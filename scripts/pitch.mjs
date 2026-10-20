import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const w of [390, 810, 1440]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
    await p.goto(base + "/service-ilr", { waitUntil: "networkidle2", timeout: 60000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 40); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1500));
    console.log(label + " " + w + " => " + JSON.stringify(await p.evaluate(() => {
      const pills = [...document.querySelectorAll("*")].filter(e => e.children.length === 0 && /^Step$/i.test((e.textContent||"").trim()));
      const cards = pills.map(leaf => { let c = leaf;
        while (c && !(getComputedStyle(c).backgroundColor !== "rgba(0, 0, 0, 0)" && c.getBoundingClientRect().height > 120)) c = c.parentElement;
        return c ? { y: Math.round(c.getBoundingClientRect().top + scrollY), h: Math.round(c.getBoundingClientRect().height) } : null; }).filter(Boolean);
      const pitches = cards.slice(1).map((c, i) => c.y - cards[i].y);
      const gaps = cards.slice(1).map((c, i) => c.y - (cards[i].y + cards[i].h));
      return { cards: cards.map(c => c.h), pitches, gaps };
    }), null, 0));
    await p.close();
  }
}
await b.close();
