const fs = require('fs');
const path = require('path');

const USER = 'DsMans0021';
const HEADERS = { 'User-Agent': 'readme-stats-updater', 'Accept': 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) HEADERS.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;

async function gh(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error('GitHub API ' + res.status + ' for ' + url);
  return res.json();
}

(async function () {
  const user = await gh('https://api.github.com/users/' + USER);
  const repos = await gh('https://api.github.com/users/' + USER + '/repos?per_page=100&sort=pushed');

  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const top = repos.slice().sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3)
    .map(r => '`' + r.name + '` (' + r.stargazers_count + '⭐)').join(' · ') || '`—`';

  const rows = [
    ['public_repos', '🗂️', '**Public repos**', String(user.public_repos)],
    ['stars', '⭐', '**Total stars earned**', String(totalStars)],
    ['followers', '👥', '**Followers**', String(user.followers)],
    ['top', '🎮', '**Most-starred**', top]
  ];
  const table = [
    '|                        | |',
    '| ---------------------- | --- |',
    ...rows.map(([key, emoji, label, value]) => '| ' + emoji + ' ' + label + ' | `' + value + '` |'),
    '> _Updated ' + new Date().toUTCString() + ' by GitHub Actions._'
  ].join('\n');

  const readme = path.join(__dirname, '..', 'README.md');
  let content = fs.readFileSync(readme, 'utf8');
  const start = content.indexOf('<!-- STATS:START -->');
  const end = content.indexOf('<!-- STATS:END -->');
  if (start < 0 || end < 0) throw new Error('STATS markers not found in README.md');
  content = content.slice(0, start) + '<!-- STATS:START -->\n' + table + '\n<!-- STATS:END -->' + content.slice(end + '<!-- STATS:END -->'.length);
  fs.writeFileSync(readme, content);
  console.log('stats updated');
})().catch(e => { console.error(e.message); process.exit(1); });