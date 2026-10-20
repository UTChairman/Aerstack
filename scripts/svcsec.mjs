import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label,lo,hi] of [["https://www.aerstack.com","LIVE",736,2184],["http://localhost:3000","MINE",770,1882]]) {
  const p = await b.newPage();
  await p.setViewport({ width: 390, height: 900, isMobile: true, hasTouch: true });
  await p.goto(base + "/service-ilr", { waitUntil: "networkidle2", timeout: 60000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log("##### " + label);
  console.log((await p.evaluate(([lo, hi]) => [...document.querySelectorAll("*")]
    .filter(e => e.children.length === 0 && (e.textContent||"").trim().length > 2)
    .map(e => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e);
      return { y: Math.round(r.top + scrollY), h: Math.round(r.height), w: Math.round(r.width),
        fs: c.fontSize, lh: c.lineHeight, t: (e.textContent||"").replace(/\s+/g," ").trim().slice(0, 44) }; })
    .filter(o => o.y >= lo - 20 && o.y <= hi + 20)
    .map(o => `y=${o.y} h=${o.h} w=${o.w} ${o.fs}/${o.lh}  «${o.t}»`).slice(0, 22).join("\n"), [lo, hi])));
  await p.close();
}
await b.close();
