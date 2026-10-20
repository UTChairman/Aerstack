import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const w of [390, 810, 1440]) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  await p.goto("https://www.aerstack.com/case-studies", { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log(w + " => " + JSON.stringify(await p.evaluate(() => {
    const img = [...document.querySelectorAll("img")].find(i => i.getBoundingClientRect().width > 200);
    // climb to the card, then take the non-image sibling as the copy panel
    let card = img.closest("a") || img.parentElement;
    while (card && card.getBoundingClientRect().height < img.getBoundingClientRect().height + 50) card = card.parentElement;
    const kids = [...card.children];
    const panel = kids.find(k => !k.contains(img));
    const cs = panel ? getComputedStyle(panel) : null;
    const pr = panel ? panel.getBoundingClientRect() : null;
    const sub = panel ? [...panel.querySelectorAll("*")].filter(e => e.children.length === 0 && e.textContent.trim().length > 30)[0] : null;
    const rows = panel ? [...panel.children].map(c => ({ h: Math.round(c.getBoundingClientRect().height), gap: getComputedStyle(c).gap, t: (c.innerText||"").replace(/\s+/g," ").slice(0,26) })) : [];
    return { card: { h: Math.round(card.getBoundingClientRect().height), w: Math.round(card.getBoundingClientRect().width), gap: getComputedStyle(card).gap, dir: getComputedStyle(card).flexDirection },
      panel: pr ? { h: Math.round(pr.height), w: Math.round(pr.width), pad: cs.padding, gap: cs.gap, just: cs.justifyContent } : null,
      subCs: sub ? { fs: getComputedStyle(sub).fontSize, lh: getComputedStyle(sub).lineHeight } : null,
      rows };
  }), null, 0));
  await p.close();
}
await b.close();
