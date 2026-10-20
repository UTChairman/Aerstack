// Visits every route on the live site, collects all image URLs + inline SVGs,
// downloads images into public/images and writes an svg catalog + manifest.
import puppeteer from "puppeteer";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const BASE = "https://www.aerstack.com";
const ROUTES = [
  "/", "/about", "/services", "/case-studies", "/review", "/contact-us",
  "/licensed-assets", "/service-ilr", "/service-webdev", "/service-mvp",
  "/service-alq", "/service-dlr", "/service-fullpipe",
];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const images = new Map(); // baseUrl -> {routes:[], maxW}
const svgs = new Map(); // outerHTML -> {routes:[], count}
const pageMeta = {};

try {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000 });
    try {
      await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 60000 });
      await page.evaluate(async () => {
        if (document.fonts?.ready) await document.fonts.ready;
        await new Promise((res) => {
          let y = 0;
          const step = () => {
            window.scrollBy(0, 500);
            y += 500;
            if (y < document.body.scrollHeight + 800) setTimeout(step, 80);
            else res();
          };
          step();
        });
      });
      await new Promise((r) => setTimeout(r, 1500));

      const data = await page.evaluate(() => {
        const imgs = [];
        document.querySelectorAll("img").forEach((im) => {
          if (im.src) imgs.push({ url: im.src, w: im.naturalWidth, h: im.naturalHeight, alt: im.alt });
          if (im.srcset)
            im.srcset.split(",").forEach((s) => {
              const u = s.trim().split(" ")[0];
              if (u) imgs.push({ url: u, w: 0, h: 0, alt: "" });
            });
        });
        document.querySelectorAll("*").forEach((el) => {
          const bg = getComputedStyle(el).backgroundImage;
          if (bg && bg !== "none") {
            const m = bg.match(/url\(["']?(https?:[^"')]+)["']?\)/g);
            if (m)
              m.forEach((u) =>
                imgs.push({ url: u.replace(/url\(["']?/, "").replace(/["']?\)$/, ""), w: 0, h: 0, alt: "" }),
              );
          }
        });
        const svgList = [];
        document.querySelectorAll("svg").forEach((s) => {
          const html = s.outerHTML;
          if (html.length < 4000) svgList.push(html);
        });
        return {
          imgs,
          svgs: svgList,
          title: document.title,
          desc: document.querySelector('meta[name="description"]')?.content || "",
          h1: document.querySelector("h1")?.innerText?.trim()?.slice(0, 120) || "",
          height: document.body.scrollHeight,
        };
      });

      pageMeta[route] = { title: data.title, desc: data.desc, h1: data.h1, height: data.height };
      for (const im of data.imgs) {
        const base = im.url.split("?")[0];
        if (!base.startsWith("http")) continue;
        const cur = images.get(base) || { routes: [], w: 0, h: 0 };
        if (!cur.routes.includes(route)) cur.routes.push(route);
        cur.w = Math.max(cur.w, im.w || 0);
        cur.h = Math.max(cur.h, im.h || 0);
        images.set(base, cur);
      }
      for (const s of data.svgs) {
        const cur = svgs.get(s) || { routes: [], count: 0 };
        if (!cur.routes.includes(route)) cur.routes.push(route);
        cur.count++;
        svgs.set(s, cur);
      }
      console.log(`${route.padEnd(20)} imgs=${data.imgs.length} svgs=${data.svgs.length} h=${data.height}`);
    } catch (e) {
      console.log(`${route} FAILED: ${e.message}`);
    }
    await page.close();
  }
} finally {
  await browser.close();
}

// download images
await mkdir("public/images", { recursive: true });
let ok = 0, fail = 0;
for (const [url, meta] of images) {
  const name = url.split("/").pop();
  if (!name) continue;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join("public/images", name), buf);
    ok++;
  } catch (e) {
    console.log("dl fail", name, e.message);
    fail++;
  }
}

await mkdir("extracted", { recursive: true });
await writeFile(
  "extracted/assets-manifest.json",
  JSON.stringify(
    {
      pageMeta,
      images: [...images].map(([url, m]) => ({ file: url.split("/").pop(), url, ...m })),
      svgCount: svgs.size,
      svgs: [...svgs].map(([html, m]) => ({ html, routes: m.routes, count: m.count })),
    },
    null,
    1,
  ),
);
console.log(`\nimages: ${images.size} unique, downloaded ${ok}, failed ${fail}`);
console.log(`svgs: ${svgs.size} unique`);
