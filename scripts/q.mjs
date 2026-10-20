// Query the extracted DOM tree.
// Usage: node scripts/q.mjs <json> [yStart] [yEnd] [maxDepth]
import { readFile } from "node:fs/promises";
const [, , file, y0 = "0", y1 = "1e9", maxDepth = "8"] = process.argv;
const root = JSON.parse(await readFile(file, "utf8"));
const Y0 = Number(y0), Y1 = Number(y1), MD = Number(maxDepth);

function fmt(s) {
  if (!s) return "";
  const order = ["display","flexDirection","justifyContent","alignItems","flexWrap","gap","gridTemplateColumns",
    "width","height","maxWidth","padding","margin","backgroundColor","backgroundImage","borderRadius","border",
    "boxShadow","opacity","transform","backdropFilter","filter","position","zIndex","overflow",
    "fontFamily","fontSize","fontWeight","lineHeight","letterSpacing","color","textAlign","textTransform","objectFit"];
  const parts = [];
  for (const k of order) {
    if (s[k] === undefined) continue;
    let v = String(s[k]);
    if (k === "fontFamily") v = v.split(",")[0].replace(/["']/g, "");
    if (k === "backgroundImage" && v.length > 80) v = v.slice(0, 80) + "…";
    if (v.length > 90) v = v.slice(0, 90) + "…";
    parts.push(`${k}:${v}`);
  }
  return parts.join("  ");
}
function walk(n, d) {
  if (!n) return;
  const { y, h } = n.rect;
  if (y + h < Y0 || y > Y1) return;
  if (d > MD) return;
  const pad = "  ".repeat(d);
  const label = `${n.tag}${n.src ? ` src=${n.src.split("/").pop()}` : ""}${n.href ? ` href=${n.href}` : ""}`;
  console.log(`${pad}${label}  [${n.rect.x},${y} ${n.rect.w}x${h}]`);
  const st = fmt(n.style);
  if (st) console.log(`${pad}  ${st}`);
  if (n.text) console.log(`${pad}  TEXT "${n.text.replace(/\n/g, " ⏎ ").slice(0, 110)}"`);
  if (n.svg) console.log(`${pad}  SVG ${n.svg.replace(/\s+/g, " ").slice(0, 150)}`);
  for (const c of n.children || []) walk(c, d + 1);
}
walk(root, 0);
