# Security

## What this repository contains

Markdown skill files under `skills/`, integration guides and zero-dependency Node.js CLI scripts under `tools/`, and the scripts in `scripts/` that validate them. Skills are plain instructions for AI agents; they contain no hidden binaries.

## How CI checks it

Every PR that touches `skills/**` or `tools/**` runs `scripts/check-hidden-content.mjs`, which fails on:

- HTML comments in Markdown (invisible when GitHub renders it; comments inside code blocks are fine)
- runs of more than 20 blank lines
- literal prompt-injection phrases such as "ignore previous instructions" (skill scanners block installs on them; describe the attack instead of quoting it)
- zero-width, bidi, or tag Unicode characters
- `curl ... | sh` or `| bash`
- webhook or other exfiltration endpoints, and "send ... to" an email or URL near `.env` / key / token words

Legitimate hits go in `scripts/hidden-content-allowlist.json` with a reason a reviewer can read. Run it locally with `node scripts/check-hidden-content.mjs`.

## Reporting a problem

Open a private security advisory on the repository (Security tab, "Report a vulnerability"), or contact the maintainer directly. Please don't open a public issue for a suspected malicious instruction.

## Using the skills safely

- Pin a release tag or commit instead of tracking `main`.
- Read a skill before installing it, especially any command it asks the agent to run.
- Keep credentials in your own environment; no skill here needs you to paste secrets into chat.
