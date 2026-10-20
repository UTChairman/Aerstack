import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  const out = {};
  for (const w of [390, 810, 1440]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
    await p.goto(base + "/service-ilr", { waitUntil: "networkidle2", timeout: 60000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 900) setTimeout(s, 40); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1200));
    out[w] = await p.evaluate(() => {
      const pick = (re) => { const e = [...document.querySelectorAll("*")].find(x => x.children.length === 0 && re.test((x.textContent||"").trim()));
        if (!e) return null; const c = getComputedStyle(e), r = e.getBoundingClientRect();
        return { fs: c.fontSize, lh: c.lineHeight, w: Math.round(r.width) }; };
      return { body: pick(/^The Instant Lead Response System connects/),
        head: pick(/^What Is the Instant Lead Response/),
        item: pick(/^Instant Response$/), num: pick(/^01\.$/) };
    });
    await p.close();
  }
  console.log(label + " => " + JSON.stringify(out));
}
await b.close();
