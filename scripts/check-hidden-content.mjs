#!/usr/bin/env node
// Fail on content that hides instructions from reviewers in skills/ and tools/.
//
//   node scripts/check-hidden-content.mjs            # scan skills/ and tools/
//   node scripts/check-hidden-content.mjs --warn     # report, but exit 0
//   node scripts/check-hidden-content.mjs path...    # scan specific files/dirs
//
// Checks: HTML comments in .md files, runs of >20 blank lines, literal prompt-injection
// phrases ("ignore previous instructions"), zero-width / bidi /
// tag Unicode characters, `curl ... | sh|bash`, and exfiltration patterns (webhook
// URLs; "send ... to" an email/URL near .env/key/token words).
// Legitimate hits go in scripts/hidden-content-allowlist.json as
// { "path": "skills/x/SKILL.md", "rule": "html-comment", "reason": "..." }.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { resolve, dirname, relative, join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const warnOnly = args.includes("--warn");
const targets = args.filter((a) => !a.startsWith("--"));
const roots = targets.length ? targets.map((t) => resolve(t)) : [join(ROOT, "skills"), join(ROOT, "tools")];

const allowPath = join(ROOT, "scripts", "hidden-content-allowlist.json");
const allow = existsSync(allowPath) ? JSON.parse(readFileSync(allowPath, "utf8")) : [];
const allowed = (path, rule) => allow.some((a) => a.path === path && a.rule === rule);

const TEXT = new Set([".md", ".js", ".cjs", ".mjs", ".json", ".yml", ".yaml", ".sh", ".py", ".txt"]);
const SKIP = new Set(["node_modules", ".git"]);
function* walk(p) {
  const st = statSync(p);
  if (st.isDirectory()) {
    for (const e of readdirSync(p)) if (!SKIP.has(e)) yield* walk(join(p, e));
  } else if (TEXT.has(extname(p))) yield p;
}

const INVISIBLE = /[​-‏‪-‮⁠-⁤⁦-⁩﻿\u{E0000}-\u{E007F}]/u;
const rules = [
  { id: "html-comment", mdOnly: true, test: (t) => /<!--/.test(t), msg: "HTML comment (invisible when rendered)" },
  { id: "invisible-unicode", test: (t) => INVISIBLE.test(t), msg: "zero-width, bidi, or tag Unicode character" },
  {
    id: "injection-phrase",
    test: (t) => /\b(ignore|disregard|forget)\s+(all\s+)?(of\s+)?(the\s+|your\s+)?(previous|prior|above|earlier)\s+instructions\b/i.test(t),
    msg: "literal prompt-injection phrase; skill scanners (e.g. Hermes Skills Guard) block installs on these. Describe it instead",
  },
  { id: "curl-pipe-shell", test: (t) => /\b(curl|wget)\b[^\n|]*\|\s*(sudo\s+)?(ba|z)?sh\b/i.test(t), msg: "curl/wget piped to a shell" },
  { id: "webhook-url", test: (t) => /(hooks\.slack\.com\/services|discord(app)?\.com\/api\/webhooks|webhook\.site|requestbin|pipedream\.net|ngrok\.io)/i.test(t), msg: "webhook / exfiltration endpoint" },
  {
    id: "exfil-send",
    test: (t) => /\bsend\b[^\n]{0,80}\b(to|at)\b[^\n]{0,60}(https?:\/\/|[\w.+-]+@[\w-]+\.[\w.]+)/i.test(t) && /(\.env\b|api[_ -]?key|secret|token|credential|password)/i.test(t),
    msg: "'send ... to' a URL/email on a line near .env/key/token words",
  },
];

const findings = [];
for (const root of roots) {
  if (!existsSync(root)) continue;
  for (const file of walk(root)) {
    const rel = relative(ROOT, file);
    const text = readFileSync(file, "utf8");
    const lines = text.split("\n");
    const isMd = extname(file) === ".md";
    let fenced = false;
    lines.forEach((line, i) => {
      if (isMd && /^\s*(```|~~~)/.test(line)) fenced = !fenced;
      for (const r of rules) {
        if (r.mdOnly && !isMd) continue;
        if (r.id === "html-comment" && fenced) continue; // visible inside code blocks
        if (r.test(line) && !allowed(rel, r.id)) findings.push({ rel, line: i + 1, rule: r.id, msg: r.msg });
      }
    });
    if (isMd && !allowed(rel, "blank-run")) {
      let run = 0;
      lines.forEach((line, i) => {
        run = line.trim() === "" ? run + 1 : 0;
        if (run === 21) findings.push({ rel, line: i + 1, rule: "blank-run", msg: "more than 20 consecutive blank lines" });
      });
    }
  }
}

for (const f of findings) {
  const tag = warnOnly ? "warning" : "error";
  console.log(`${f.rel}:${f.line} ${tag} [${f.rule}] ${f.msg}`);
}
console.log(findings.length ? `\n${findings.length} hidden-content finding(s).` : "No hidden content found.");
process.exit(findings.length && !warnOnly ? 1 : 0);
