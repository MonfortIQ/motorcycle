import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const footerPath = path.join(root, 'scripts', 'footer-template.html');
const footer = fs.readFileSync(footerPath, 'utf8').trim();
const files = [
  ...fs.readdirSync(root).filter((name) => name.endsWith('.html')).map((name) => path.join(root, name)),
  path.join(root, 'scripts', 'blog-article-template.html')
];
const excluded = new Set(['service-details.html', 'blog-details.html', 'login.html', 'register.html', 'dashboard.html']);
let updated = 0;

for (const file of files) {
  const name = path.basename(file);
  if (excluded.has(name)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const opening = html.indexOf('<footer');
  if (opening < 0) continue;
  const closing = html.indexOf('</footer>', opening);
  if (closing < 0) continue;
  const current = html.slice(opening, closing + '</footer>'.length);
  if (current === footer) continue;
  fs.writeFileSync(file, html.slice(0, opening) + footer + html.slice(closing + '</footer>'.length), 'utf8');
  updated += 1;
}

console.log(`Applied the shared footer to ${updated} pages and the blog article template.`);
