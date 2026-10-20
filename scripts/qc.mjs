// Compact query: only prints structurally-significant nodes.
// Usage: node scripts/qc.mjs <json> <yStart> <yEnd> [maxDepth]
import { readFile } from "node:fs/promises";
const [, , file, y0 = "0", y1 = "1e9", maxDepth = "30"] = process.argv;
const root = JSON.parse(await readFile(file, "utf8"));
const Y0 = Number(y0), Y1 = Number(y1), MD = Number(maxDepth);

const SIG = ["backgroundColor", "backgroundImage", "borderRadius", "border", "padding", "gap",
  "boxShadow", "backdropFilter", "filter", "gridTemplateColumns", "transform", "opacity", "maxWidth"];

function sig(n) {
  const s = n.style || {};
  if (n.text || n.src || n.svg) return true;
  for (const k of SIG) if (s[k] !== undefined) return true;
  if (s.display === "flex" || s.display === "grid") return true;
  return false;
}
function fmt(s) {
  const order = ["display","flexDirection","justifyContent","alignItems","flexWrap","gap","gridTemplateColumns",
    "maxWidth","padding","backgroundColor","backgroundImage","borderRadius","border","boxShadow","opacity",
    "transform","backdropFilter","filter","objectFit","fontFamily","fontSize","fontWeight","lineHeight",
    "letterSpacing","color","textAlign","textTransform"];
  const out = [];
  for (const k of order) {
    if (s[k] === undefined) continue;
    let v = String(s[k]);
    if (k === "fontFamily") { v = v.split(",")[0].replace(/["']/g, ""); if (v === "sans-serif") continue; }
    if (["fontSize","fontWeight","lineHeight","letterSpacing","color","textAlign"].includes(k) && !s.__isText) continue;
    if (v.length > 70) v = v.slice(0, 70) + "…";
    out.push(`${k}:${v}`);
  }
  return out.join(" ");
}
function walk(n, d) {
  if (!n) return;
  const { y, h } = n.rect;
  const zero = n.tag.endsWith("~");
  if (!zero && (y + h < Y0 || y > Y1)) return;
  if (d > MD) return;
  if (!zero && sig(n)) {
    const pad = "  ".repeat(Math.min(d, 20));
    const s = { ...n.style, __isText: !!n.text };
    console.log(`${pad}${n.tag}${n.src ? " img=" + n.src.split("/").pop() : ""}${n.href ? " →" + n.href : ""} [${n.rect.x},${y} ${n.rect.w}x${h}]`);
    const f = fmt(s);
    if (f) console.log(`${pad}  ${f}`);
    if (n.text) console.log(`${pad}  "${n.text.replace(/\n/g, " ").slice(0, 100)}"`);
    if (n.svg) {
      const p = [...n.svg.matchAll(/d="([^"]{10,})"/g)].map((m) => m[1].slice(0, 60));
      console.log(`${pad}  SVG paths=${p.length} ${p[0] || ""}`);
    }
  }
  for (const c of n.children || []) walk(c, zero ? d : d + 1);
}
walk(root, 0);
