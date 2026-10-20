import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  for (const w of [810, 1440]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
    await p.goto(base + "/contact-us", { waitUntil: "networkidle2", timeout: 45000 });
    await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
    await new Promise(r => setTimeout(r, 1200));
    console.log(label + " " + w + " => " + JSON.stringify(await p.evaluate(() => {
      const leaf = [...document.querySelectorAll("*")].find(e => e.children.length === 0 && /Menu/i.test((e.textContent||"").trim()) && (e.textContent||"").trim().length < 6);
      if (!leaf) return "no Menu";
      const menu = leaf.parentElement;                 // menu column
      const card = menu.parentElement;                 // row holding contact rows + menu
      const R = (e) => ({ y: Math.round(e.getBoundingClientRect().top + scrollY), h: Math.round(e.getBoundingClientRect().height), w: Math.round(e.getBoundingClientRect().width) });
      const cs = getComputedStyle(card);
      return { menu: R(menu), card: { ...R(card), dir: cs.flexDirection, gap: cs.gap, pad: cs.padding },
        cardKids: [...card.children].map(k => R(k)) };
    }), null, 0));
    await p.close();
  }
}
await b.close();
