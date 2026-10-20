import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const p = await b.newPage();
await p.setViewport({ width: 390, height: 900, isMobile: true, hasTouch: true });
await p.goto("https://www.aerstack.com/service-ilr", { waitUntil: "networkidle2", timeout: 60000 });
await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
await new Promise(r => setTimeout(r, 1200));
console.log(JSON.stringify(await p.evaluate(() => {
  const leaf = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && /^Step$/i.test((e.textContent||"").trim()))[0];
  let c = leaf; while (c && !(getComputedStyle(c).backgroundColor !== "rgba(0,0,0,0)" && c.getBoundingClientRect().height > 120)) c = c.parentElement;
  const r = c.getBoundingClientRect();
  // is there a ghosted number / connector nearby?
  const nums = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && /^0\d$/.test((e.textContent||"").trim()))
    .map(e => { const b = e.getBoundingClientRect(); return { t: e.textContent.trim(), x: Math.round(b.x), y: Math.round(b.top + scrollY), fs: getComputedStyle(e).fontSize }; });
  const lines = [...document.querySelectorAll("div")].map(e => e.getBoundingClientRect())
    .filter(b => b.width > 0 && b.width <= 5 && b.height > 40)
    .map(b => ({ x: Math.round(b.x), y: Math.round(b.top + scrollY), h: Math.round(b.height) }));
  return { firstCard: { x: Math.round(r.x), y: Math.round(r.top + scrollY), w: Math.round(r.width) }, nums: nums.slice(0,4), connectors: lines.slice(0,4) };
}), null, 1));
await b.close();
