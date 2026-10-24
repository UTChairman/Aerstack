// Full SEO audit over every route in the sitemap.
import puppeteer from "puppeteer";
const BASE = process.argv[2] || "http://localhost:3000";

const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const ROUTES = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).sort();

const b = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const issues = [];
const add = (r, sev, msg) => issues.push({ r, sev, msg });

for (const r of ROUTES) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 1000 });
  await p.goto(BASE + r, { waitUntil: "networkidle2", timeout: 60000 });
  await new Promise((s) => setTimeout(s, 500));

  const d = await p.evaluate(() => {
    const m = (sel, attr = "content") =>
      (document.querySelector(sel) || {}).getAttribute?.(attr) ?? null;
    const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")]
      .map((h) => ({ lvl: +h.tagName[1], t: (h.innerText || "").replace(/\s+/g, " ").trim().slice(0, 50) }))
      .filter((h) => h.t);
    const imgs = [...document.querySelectorAll("img")];
    return {
      title: document.title,
      desc: m('meta[name="description"]'),
      canonical: m('link[rel="canonical"]', "href"),
      robots: m('meta[name="robots"]'),
      ogTitle: m('meta[property="og:title"]'),
      ogDesc: m('meta[property="og:description"]'),
      ogImage: m('meta[property="og:image"]'),
      ogUrl: m('meta[property="og:url"]'),
      ogType: m('meta[property="og:type"]'),
      ogSiteName: m('meta[property="og:site_name"]'),
      twCard: m('meta[name="twitter:card"]'),
      twImage: m('meta[name="twitter:image"]'),
      lang: document.documentElement.lang,
      viewport: m('meta[name="viewport"]'),
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')]
        .map((s) => { try { return JSON.parse(s.textContent); } catch { return null; } })
        .filter(Boolean),
      h1s: headings.filter((h) => h.lvl === 1).map((h) => h.t),
      headings,
      imgTotal: imgs.length,
      imgNoAlt: imgs.filter((i) => i.getAttribute("alt") === null).length,
      imgEmptyAlt: imgs.filter((i) => i.getAttribute("alt") === "").length,
      internalLinks: [...document.querySelectorAll('a[href^="/"]')].length,
    };
  });

  // checks
  if (!d.title) add(r, "ERR", "no <title>");
  else if (d.title.length > 60) add(r, "WARN", `title ${d.title.length} chars (>60): ${d.title}`);
  else if (d.title.length < 25) add(r, "WARN", `title only ${d.title.length} chars: ${d.title}`);

  if (!d.desc) add(r, "ERR", "no meta description");
  else if (d.desc.length > 160) add(r, "WARN", `description ${d.desc.length} chars (>160)`);
  else if (d.desc.length < 70) add(r, "WARN", `description only ${d.desc.length} chars`);

  if (!d.canonical) add(r, "ERR", "no canonical");
  else if (new URL(d.canonical).pathname !== r) add(r, "ERR", `canonical points to ${new URL(d.canonical).pathname}`);

  if (!d.ogTitle) add(r, "ERR", "no og:title");
  if (!d.ogDesc) add(r, "ERR", "no og:description");
  if (!d.ogImage) add(r, "ERR", "no og:image");
  if (!d.ogUrl) add(r, "WARN", "no og:url");
  if (!d.ogSiteName) add(r, "WARN", "no og:site_name");
  if (!d.twCard) add(r, "WARN", "no twitter:card");
  if (!d.twImage) add(r, "WARN", "no twitter:image");
  if (!d.lang) add(r, "ERR", "no lang on <html>");
  if (!d.jsonld.length) add(r, "WARN", "no JSON-LD structured data");

  if (d.h1s.length === 0) add(r, "ERR", "no h1");
  else if (d.h1s.length > 1) add(r, "ERR", `${d.h1s.length} h1 tags: ${d.h1s.join(" | ").slice(0, 80)}`);

  let prev = 0;
  for (const h of d.headings) {
    if (prev && h.lvl > prev + 1) add(r, "WARN", `heading jumps h${prev} to h${h.lvl}: "${h.t}"`);
    prev = h.lvl;
  }
  if (d.imgNoAlt) add(r, "ERR", `${d.imgNoAlt}/${d.imgTotal} img missing alt attribute`);

  await p.close();
}
await b.close();

const errs = issues.filter((i) => i.sev === "ERR");
const warns = issues.filter((i) => i.sev === "WARN");
for (const group of [errs, warns]) {
  let last = "";
  for (const i of group) {
    if (i.r !== last) { console.log(`\n${i.r}`); last = i.r; }
    console.log(`   [${i.sev}] ${i.msg}`);
  }
}
console.log(`\n${errs.length} errors, ${warns.length} warnings across ${ROUTES.length} routes`);
