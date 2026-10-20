import puppeteer from "puppeteer";
const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
for (const [base,label] of [["https://www.aerstack.com","LIVE"],["http://localhost:3000","MINE"]]) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.goto(base + "/case-studies/content-writing-for-video-grapher", { waitUntil: "networkidle2", timeout: 45000 });
  await p.evaluate(async () => { await new Promise(r => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700; if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); }); });
  await new Promise(r => setTimeout(r, 1200));
  console.log(label + " => " + JSON.stringify(await p.evaluate(() => {
    const t = document.body.innerText;
    const idx = t.indexOf("Other Case Studies");
    const tail = idx >= 0 ? t.slice(idx, idx + 1400) : "";
    return { nCaseStudyPills: (tail.match(/CASE STUDY/gi) || []).length,
      tail: tail.replace(/\s+/g, " ").slice(0, 460) };
  }), null, 0));
  await p.close();
}
await b.close();
