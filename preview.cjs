// Optional local preview: node preview.cjs. The application itself is index.html only.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const port = Number(process.env.PORT || 4173);
const root = __dirname;
http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end('Forbidden'); return; }
  const types = { '.html':'text/html; charset=utf-8', '.md':'text/markdown; charset=utf-8', '.png':'image/png', '.js':'text/javascript; charset=utf-8' };
  fs.readFile(file, (err, body) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    res.end(body);
  });
}).listen(port, '127.0.0.1', () => console.log(`AUTO LAB: http://127.0.0.1:${port}`));
