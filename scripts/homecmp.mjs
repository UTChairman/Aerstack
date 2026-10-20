import puppeteer from "puppeteer";
const w = Number(process.argv[2] || 810);
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
async function dump(base) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto(base + "/", { waitUntil: "networkidle2", timeout: 60000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1500));
  const o = await p.evaluate(() => [...document.querySelectorAll("h1,h2")]
    .map(e => ({ t: (e.innerText || "").replace(/\s+/g, " ").trim().slice(0, 30), y: Math.round(e.getBoundingClientRect().top + scrollY) }))
    .filter(e => e.t));
  await p.close(); return o;
}
const L = await dump("https://www.aerstack.com"), M = await dump("http://localhost:3000");
console.log("HEADING".padEnd(32) + "LIVE".padStart(7) + "MINE".padStart(7) + "  Δ" + "   Δsection");
let pl = 0, pm = 0;
for (const l of L) {
  const m = M.find(x => x.t.toLowerCase().slice(0, 14) === l.t.toLowerCase().slice(0, 14));
  if (!m) { console.log(l.t.padEnd(32) + String(l.y).padStart(7) + "  MISSING"); continue; }
  const secL = l.y - pl, secM = m.y - pm;
  console.log(l.t.padEnd(32) + String(l.y).padStart(7) + String(m.y).padStart(7) +
    String(m.y - l.y).padStart(6) + String(secM - secL).padStart(10));
  pl = l.y; pm = m.y;
}
await b.close();
