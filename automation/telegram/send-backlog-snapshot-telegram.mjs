#!/usr/bin/env node
import fs from 'node:fs';

const argv = process.argv.slice(2);
const getArg = (name, def) => {
  const i = argv.indexOf(name);
  if (i === -1) return def;
  const v = argv[i + 1];
  if (!v || v.startsWith('--')) return def;
  return v;
};

const date = getArg('--date', new Date().toISOString().slice(0, 10));
const backlogPath = getArg('--backlog', '/Users/nqcdan/dev/wiki/BACKLOG.md');

const text = fs.readFileSync(backlogPath, 'utf8');

const pickSection = (headingRegex) => {
  const m = text.match(headingRegex);
  if (!m) return null;
  const body = m[1];
  // grab markdown checklist lines only
  const items = body
    .split('\n')
    .map(l => l.trimEnd())
    .filter(l => /^- \[[ xX]\] /.test(l));
  return items;
};

const focus = pickSection(/\n##\s+Current focus\s*\n([\s\S]*?)(?=\n##\s+|\n#\s+|$)/);
const reporting = pickSection(/\n##\s+Reporting\s*\/\s*Review\s*\n([\s\S]*?)(?=\n##\s+|\n#\s+|$)/);

const lines = [];
lines.push(`Daily backlog snapshot — ${date}`);
lines.push('');

if (focus && focus.length) {
  lines.push('Current focus');
  lines.push(...focus);
  lines.push('');
} else {
  lines.push('Current focus');
  lines.push('- (not found / empty)');
  lines.push('');
}

if (reporting && reporting.length) {
  lines.push('Reporting / Review');
  lines.push(...reporting);
  lines.push('');
} else {
  lines.push('Reporting / Review');
  lines.push('- (not found / empty)');
  lines.push('');
}

process.stdout.write(lines.join('\n').trim() + '\n');
