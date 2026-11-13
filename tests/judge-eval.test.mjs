import test from 'node:test';
import assert from 'node:assert/strict';
import { validateKey, parseVerdict, score, distribution } from '../scripts/judge-eval.mjs';

const ok = { labeled_by: 'A. Expert', verdicts: ['FAIL', 'PASS'], items: [{ id: 'a', input: 'x', label: 'FAIL' }, { id: 'b', input: 'y', label: 'PASS' }] };

test('accepts a valid key', () => assert.deepEqual(validateKey(ok), []));
test('rejects a placeholder labeler and bad labels', () => {
  const bad = { ...ok, labeled_by: 'TODO: name', items: [{ id: 'a', input: 'x', label: 'MAYBE' }, { id: 'a', input: '', label: 'PASS' }] };
  assert.ok(validateKey(bad).length >= 3);
});
test('parses a verdict out of surrounding text', () => {
  assert.equal(parseVerdict('Sure.\n{"verdict":"PASS","reasoning":"ok"}', ['FAIL', 'PASS']).verdict, 'PASS');
  assert.equal(parseVerdict('no json', ['FAIL', 'PASS']), null);
  assert.equal(parseVerdict('{"verdict":"MAYBE"}', ['FAIL', 'PASS']), null);
});
test('scores agreement and confusion', () => {
  const r = score([{ id: 'a', label: 'FAIL', predicted: 'FAIL' }, { id: 'b', label: 'FAIL', predicted: 'PASS' }, { id: 'c', label: 'PASS', predicted: null }], ['FAIL', 'PASS']);
  assert.equal(r.agreement, 50); assert.equal(r.unparsed, 1);
  assert.deepEqual(r.confusion, { 'human FAIL -> judge PASS': 1 });
});
test('distribution counts labels', () => assert.deepEqual(distribution(ok.items), { FAIL: 1, PASS: 1 }));
