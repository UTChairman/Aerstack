import puppeteer from "puppeteer";
const path = process.argv[2], w = Number(process.argv[3] || 1440);
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
async function dump(base) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto(base + path, { waitUntil: "networkidle2", timeout: 60000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1500));
  const o = await p.evaluate(() => [...document.querySelectorAll("h1,h2,h3")]
    .map(e => ({ t: (e.innerText || "").replace(/\s+/g, " ").trim().slice(0, 34), y: Math.round(e.getBoundingClientRect().top + scrollY) }))
    .filter(e => e.t));
  await p.close(); return o;
}
const L = await dump("https://www.aerstack.com"), M = await dump("http://localhost:3000");
console.log("HEADING".padEnd(36) + "LIVE".padStart(7) + "MINE".padStart(7) + "     Δ" + "  Δgap");
let pl = 0, pm = 0;
for (const l of L) {
  const m = M.find(x => x.t.toLowerCase().slice(0, 16) === l.t.toLowerCase().slice(0, 16));
  if (!m) { console.log(l.t.padEnd(36) + String(l.y).padStart(7) + "  (not matched)"); continue; }
  console.log(l.t.padEnd(36) + String(l.y).padStart(7) + String(m.y).padStart(7) +
    String(m.y - l.y).padStart(6) + String((m.y - pm) - (l.y - pl)).padStart(7));
  pl = l.y; pm = m.y;
}
await b.close();
