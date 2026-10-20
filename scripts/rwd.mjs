// Responsive audit: compares live vs local at each Framer breakpoint AND
// flags horizontal overflow (the classic mobile bug) with the offending elements.
import puppeteer from "puppeteer";

const ROUTES = process.argv[2]
  ? process.argv[2].split(",")
  : ["/","/about","/services","/case-studies","/review","/contact-us","/licensed-assets",
     "/service-ilr","/service-alq","/service-dlr","/service-fullpipe","/service-mvp","/service-webdev",
     "/case-studies/content-writing-for-video-grapher"];
// design widths straight from Framer: Phone 390, Tablet 810, Desktop-Wide 1440
const WIDTHS = (process.argv[3] || "390,810").split(",").map(Number);

const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

async function probe(url, w) {
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900, isMobile: w < 810, hasTouch: w < 810 });
  try {
    await p.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
    await p.evaluate(async () => {
      await new Promise((r) => { let y = 0; const s = () => { window.scrollBy(0, 700); y += 700;
        if (y < document.body.scrollHeight + 800) setTimeout(s, 45); else r(); }; s(); });
    });
    await new Promise((r) => setTimeout(r, 1000));
    const res = await p.evaluate(() => {
      const de = document.documentElement;
      const vw = de.clientWidth;
      // any element whose right edge spills past the viewport => horizontal scroll
      const over = [];
      for (const el of document.querySelectorAll("body *")) {
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;
        const cs = getComputedStyle(el);
        if (cs.position === "fixed") continue;
        const right = r.right + window.scrollX;
        if (right > vw + 1.5) {
          over.push({
            sel: el.tagName.toLowerCase() +
              (el.className && typeof el.className === "string"
                ? "." + el.className.trim().split(/\s+/).slice(0, 3).join(".") : ""),
            right: Math.round(right), w: Math.round(r.width),
          });
        }
      }
      // keep only the outermost offenders
      const uniq = [];
      for (const o of over) if (!uniq.some((u) => o.sel.startsWith(u.sel))) uniq.push(o);
      return { h: document.body.scrollHeight, sw: de.scrollWidth, vw, over: uniq.slice(0, 6) };
    });
    await p.close();
    return res;
  } catch (e) {
    await p.close();
    return { h: 0, sw: 0, vw: w, over: [], err: e.message.slice(0, 60) };
  }
}

for (const w of WIDTHS) {
  console.log(`\n================  ${w}px  ================`);
  for (const r of ROUTES) {
    const L = await probe("https://www.aerstack.com" + r, w);
    const M = await probe("http://localhost:3000" + r, w);
    const d = L.h ? Math.round(((M.h - L.h) / L.h) * 100) : 0;
    const flag = Math.abs(d) > 6 ? "  <<<" : "";
    console.log(`${r.padEnd(46)} live=${String(L.h).padStart(6)} mine=${String(M.h).padStart(6)} ${String(d).padStart(5)}%${flag}`);
    if (M.sw > M.vw + 1) {
      console.log(`    !! H-OVERFLOW mine: scrollWidth=${M.sw} vs ${M.vw}`);
      for (const o of M.over) console.log(`       ${o.sel}  right=${o.right} w=${o.w}`);
    }
    if (L.sw > L.vw + 1) console.log(`    (live also overflows: ${L.sw})`);
    if (M.err) console.log(`    ERR mine: ${M.err}`);
  }
}
await b.close();
