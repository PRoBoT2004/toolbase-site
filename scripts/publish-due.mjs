#!/usr/bin/env node
// publish-due.mjs — move library articles from _library/ to src/content/blog/
// when their pubDate has arrived.
//
// Usage:
//   node scripts/publish-due.mjs                  # publish anything with pubDate <= today
//   node scripts/publish-due.mjs --list           # show queue, don't move anything
//   node scripts/publish-due.mjs --force <slug>   # publish a specific slug today regardless of pubDate

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(__dirname, '..');

const LIBRARY_ARTICLES = path.join(REPO, '_library', 'articles');
const LIBRARY_ASSETS = path.join(REPO, '_library', 'assets');
const LIVE_ARTICLES = path.join(REPO, 'src', 'content', 'blog');
const LIVE_ASSETS = path.join(REPO, 'src', 'assets');

const args = process.argv.slice(2);
const LIST_ONLY = args.includes('--list');
const FORCE_IDX = args.indexOf('--force');
const FORCE_SLUG = FORCE_IDX >= 0 ? args[FORCE_IDX + 1] : null;

if (!fs.existsSync(LIBRARY_ARTICLES)) {
  console.error('No _library/articles/ directory found. Nothing to publish.');
  process.exit(0);
}

const today = new Date();
today.setHours(23, 59, 59, 999); // include articles dated today

function parsePubDate(raw) {
  const m = raw.match(/^pubDate:\s*['"]?(.+?)['"]?\s*$/m);
  if (!m) return null;
  const d = new Date(m[1]);
  if (isNaN(d.getTime())) return null;
  return d;
}

const files = fs.readdirSync(LIBRARY_ARTICLES).filter((f) => f.endsWith('.md'));
const queue = [];
const due = [];

for (const file of files) {
  const slug = file.replace(/\.md$/, '');
  const fullPath = path.join(LIBRARY_ARTICLES, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  const pubDate = parsePubDate(content);
  const entry = { slug, file, pubDate, fullPath };
  queue.push(entry);

  if (FORCE_SLUG && slug === FORCE_SLUG) {
    due.push(entry);
    continue;
  }
  if (!FORCE_SLUG && pubDate && pubDate <= today) {
    due.push(entry);
  }
}

queue.sort((a, b) => (a.pubDate?.getTime() ?? 0) - (b.pubDate?.getTime() ?? 0));

if (LIST_ONLY) {
  console.log(`\n=== Library queue (${queue.length} articles) ===\n`);
  for (const q of queue) {
    const date = q.pubDate ? q.pubDate.toISOString().slice(0, 10) : 'no-pubdate';
    const status = q.pubDate && q.pubDate <= today ? '⏰ DUE' : '   queued';
    console.log(`${status}  ${date}  ${q.slug}`);
  }
  console.log(`\n${due.length} article(s) due today.\n`);
  process.exit(0);
}

if (due.length === 0) {
  console.log('Nothing due today. Use --list to see the queue.');
  process.exit(0);
}

console.log(`\nPublishing ${due.length} article(s)...\n`);

let moved = 0;
for (const entry of due) {
  const liveArticle = path.join(LIVE_ARTICLES, entry.file);
  const libraryAsset = path.join(LIBRARY_ASSETS, `${entry.slug}.webp`);
  const liveAsset = path.join(LIVE_ASSETS, `${entry.slug}.webp`);

  if (fs.existsSync(liveArticle)) {
    console.log(`SKIP  ${entry.slug} — already in src/content/blog/`);
    continue;
  }

  fs.renameSync(entry.fullPath, liveArticle);

  if (fs.existsSync(libraryAsset)) {
    fs.renameSync(libraryAsset, liveAsset);
  } else {
    console.log(`  (no library asset for ${entry.slug} — make sure src/assets/${entry.slug}.webp exists)`);
  }

  console.log(`PUB   ${entry.slug}`);
  moved++;
}

console.log(`\n${moved} article(s) published locally.\n`);
console.log('Next steps:');
console.log('  1. npm run build       (verify build)');
console.log('  2. git add src/content/blog/ src/assets/ _library/');
console.log('  3. git commit -m "publish: <slug>"');
console.log('  4. git push');
