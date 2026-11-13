# Marketing Judges

A judge grades the quality of something a marketing agent produced (a hook, a headline, a cold-email opener). It is only trustworthy as far as it agrees with a named human expert. This directory holds judges and the answer keys that measure them.

An eval is a **judge** plus an **answer key**, plus a harness that reports how often they agree.

## Layout

```
evals/judges/<judge-name>/
├── JUDGE.md          # the rubric: a prompt that returns JSON with a "verdict"
└── answer-key.json   # items labeled by a named human expert
evals/judges/_template/   # copy this to start a new judge
```

## Answer key format

```json
{
  "labeled_by": "Name of the human expert who labeled every item",
  "verdicts": ["FAIL", "PASS"],
  "items": [{ "id": "one", "input": "the text to grade, with any context it needs", "label": "FAIL" }]
}
```

`labeled_by` is required and can't be a placeholder: an unlabeled or self-labeled key measures nothing.

## Run

```bash
node scripts/judge-eval.mjs evals/judges/<judge-name> --dry-run   # validate the key, show label distribution
node scripts/judge-eval.mjs evals/judges/<judge-name> --out evals/judges/results/<judge-name>.json
```

Each item costs one request on your logged-in Claude Code. The report gives agreement %, a confusion breakdown (human FAIL judged PASS vs human PASS judged FAIL), and every disagreement with the judge's reasoning.

## Methodology

1. **Rubric = failure taxonomy.** Name the specific ways something fails. That signal is more reliable than predicting "great."
2. **Match the real distribution** in the key. A 50/50 key teaches the judge the wrong prior.
3. **Err strict** for a bad-X detector: optimize precision on the fails.
4. **Calibration loop:** run the judge, read the disagreements, sharpen the rubric, repeat. Publish the agreement number with the key's size.
5. **Graded text is data.** The harness tells the judge to ignore instructions inside the item.
6. **High stakes:** use two judges from different labs, blind to the source, and treat disagreement as "needs a human."

## Status

No calibrated judges ship yet. The harness and format exist so one can be added with an expert-labeled key: `ad-hook` (from the MIT-licensed [hook-grader](https://github.com/runneth-tools/hook-grader), with credit) is the planned first. Don't publish an agreement number for a key the named expert didn't label.
