// Scans the rendered text of every route in the sitemap for the client's copy
// rules: no hyphens, no en/em dashes, and "Aerstack" never "AerStack".
import puppeteer from "puppeteer";

const BASE = process.argv[2] || "http://localhost:3000";

const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const ROUTES = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .sort();
console.log(`checking ${ROUTES.length} routes from the sitemap\n`);

const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let problems = 0;

for (const r of ROUTES) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 1000 });
  await p.goto(BASE + r, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((s) => setTimeout(s, 700));

  const found = await p.evaluate(() => {
    const out = [];
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = walk.nextNode())) {
      const el = n.parentElement;
      if (!el || el.closest("script,style,svg")) continue;
      const t = (n.nodeValue || "").trim();
      if (!t) continue;
      // the licensed assets page lists third party URLs, which contain hyphens
      if (/^https?:\/\//.test(t)) continue;
      if (/[-‐-―]/.test(t)) out.push({ kind: "dash", t: t.slice(0, 100) });
      if (/AerStack/.test(t)) out.push({ kind: "caps", t: t.slice(0, 100) });
    }
    for (const m of [document.title,
      (document.querySelector("meta[name=description]") || {}).content || ""]) {
      if (/[-‐-―]/.test(m)) out.push({ kind: "dash(meta)", t: m.slice(0, 100) });
      if (/AerStack/.test(m)) out.push({ kind: "caps(meta)", t: m.slice(0, 100) });
    }
    return out;
  });

  if (found.length) {
    problems += found.length;
    console.log(r);
    for (const f of found) console.log(`   [${f.kind}] ${f.t}`);
  }
  await p.close();
}
await b.close();
console.log(problems ? `\n${problems} copy rule violation(s)` : "\nAll routes clean: no hyphens, no dashes, no AerStack.");
