// Ground-truth DOM + computed-style extractor.
// Usage: node scripts/extract-dom.mjs <url> <outJson> [width] [yStart] [yEnd]
// Dumps a normalized tree of every visible element in the Y range with exact computed styles.
import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";

const [, , url, out, widthArg, y0Arg, y1Arg, depthArg, rootSel] = process.argv;
const MAXD = Number(depthArg) || 14;
const ROOT = rootSel || "main";
const width = Number(widthArg) || 1440;
const y0 = y0Arg === undefined ? 0 : Number(y0Arg);
const y1 = y1Arg === undefined ? 1e9 : Number(y1Arg); // NB: Infinity doesn't survive page.evaluate serialization

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width, height: 1000, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
  // slow scroll to trigger in-view content
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 400);
        y += 400;
        if (y < document.body.scrollHeight + 800) setTimeout(step, 90);
        else res();
      };
      step();
    });
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 2500));

  const tree = await page.evaluate(
    ({ y0, y1, MAXD, ROOT }) => {
      const KEEP = [
        "display", "flexDirection", "justifyContent", "alignItems", "flexWrap", "gap",
        "gridTemplateColumns", "position", "width", "height", "maxWidth", "minHeight",
        "padding", "margin", "backgroundColor", "backgroundImage", "borderRadius",
        "border", "boxShadow", "opacity", "transform", "overflow", "zIndex",
        "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
        "color", "textAlign", "textTransform", "backdropFilter", "filter", "objectFit",
      ];
      const DEFAULTS = {
        position: "static", overflow: "visible", opacity: "1", transform: "none",
        backgroundImage: "none", boxShadow: "none", zIndex: "auto", margin: "0px",
        padding: "0px", borderRadius: "0px", backdropFilter: "none", filter: "none",
        textTransform: "none", flexWrap: "nowrap", maxWidth: "none", minHeight: "0px",
        gridTemplateColumns: "none", objectFit: "fill",
      };
      function styleOf(el) {
        const cs = getComputedStyle(el);
        const o = {};
        for (const k of KEEP) {
          let v = cs[k];
          if (v === undefined || v === "" || v === "normal" && k !== "lineHeight" && k !== "letterSpacing") continue;
          if (DEFAULTS[k] !== undefined && v === DEFAULTS[k]) continue;
          if (k === "border" && (v === "" || v.startsWith("0px none"))) continue;
          if (k === "backgroundColor" && v === "rgba(0, 0, 0, 0)") continue;
          if (k === "gap" && v === "normal") continue;
          o[k] = v;
        }
        return o;
      }
      function walk(el, depth) {
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY;
        const zero = r.width === 0 && r.height === 0;
        // Framer uses display:contents / zero-size wrappers — pass through them
        // instead of dropping the whole subtree.
        if (!zero && (top + r.height < y0 || top > y1)) return null;
        if (depth > MAXD) return null;
        const kids = [];
        for (const c of el.children) {
          const k = walk(c, depth + 1);
          if (k) kids.push(k);
        }
        if (zero) {
          if (!kids.length) return null;
          return { tag: el.tagName.toLowerCase() + "~", rect: { x: 0, y: 0, w: 0, h: 0 }, style: {}, children: kids };
        }
        const ownText =
          el.children.length === 0 ? (el.innerText || el.textContent || "").trim().slice(0, 200) : "";
        const node = {
          tag: el.tagName.toLowerCase(),
          rect: { x: Math.round(r.x), y: Math.round(top), w: Math.round(r.width), h: Math.round(r.height) },
          style: styleOf(el),
        };
        if (ownText) node.text = ownText;
        if (el.tagName === "IMG") node.src = el.getAttribute("src")?.split("?")[0];
        if (el.tagName === "A") node.href = el.getAttribute("href");
        if (el.tagName === "svg") { node.svg = el.outerHTML.slice(0, 1200); return node; }
        if (kids.length) node.children = kids;
        return node;
      }
      const root = document.querySelector(ROOT) || document.body;
      return walk(root, 0);
    },
    { y0, y1, MAXD, ROOT },
  );

  await writeFile(out, JSON.stringify(tree, null, 1));
  console.log("wrote", out);
} finally {
  await browser.close();
}
