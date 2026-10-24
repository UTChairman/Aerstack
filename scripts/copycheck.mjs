// Scans the rendered text of every route for the client's copy rules:
//   no hyphens, no en/em dashes, and "Aerstack" never "AerStack".
import puppeteer from "puppeteer";

const ROUTES = ["/", "/about", "/services", "/services/websites", "/services/software",
  "/services/automation", "/case-studies", "/case-studies/restaurant-pos", "/review",
  "/contact-us", "/licensed-assets"];
const BASE = process.argv[2] || "http://localhost:3000";

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
      // licensed-assets is a list of third party URLs, which legitimately contain hyphens
      const isUrl = /^https?:\/\//.test(t);
      if (!isUrl && /[-‐-―]/.test(t)) out.push({ kind: "dash", t: t.slice(0, 90) });
      if (/AerStack/.test(t)) out.push({ kind: "caps", t: t.slice(0, 90) });
    }
    // also the document title and meta description
    const metas = [document.title,
      (document.querySelector('meta[name=description]') || {}).content || ""];
    for (const m of metas) {
      if (/[-‐-―]/.test(m)) out.push({ kind: "dash(meta)", t: m.slice(0, 90) });
      if (/AerStack/.test(m)) out.push({ kind: "caps(meta)", t: m.slice(0, 90) });
    }
    return out;
  });

  if (found.length) {
    problems += found.length;
    console.log(`\n${r}`);
    for (const f of found) console.log(`   [${f.kind}] ${f.t}`);
  }
  await p.close();
}
await b.close();
console.log(problems ? `\n${problems} copy rule violation(s)` : "\nAll routes clean: no hyphens, no dashes, no AerStack.");
