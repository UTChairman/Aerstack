// Reusable Framer section extractor.
// Usage: npx @framer/agent exec -s 1 --file scripts/extract-section.js
// Set NODE_ID + PAGE below (or via state) then read the compact tree it prints.
const pagePath = state.pagePath || "/";
const nodeId = state.nodeId || "OwAUKhpgK";

const LAYOUT_KEYS = [
  "htmlTag", "layout", "stackDirection", "stackDistribution", "stackAlignment",
  "gap", "padding", "position", "left", "right", "top", "bottom", "zIndex",
  "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight", "aspectRatio",
  "radius", "border", "fill", "backgroundBlur", "overflow", "opacity", "rotation",
  "grayscale", "contrast", "appearEffect", "gridColumnCount", "gridGap",
];
const TEXT_KEYS = ["text", "font", "fontSize", "fontWeight", "fontStyle", "lineHeight",
  "letterSpacing", "color", "textColor", "textAlign", "textTransform", "textDecoration"];

function compact(attrs) {
  if (!attrs) return "";
  const parts = [];
  for (const k of LAYOUT_KEYS) {
    if (attrs[k] !== undefined && attrs[k] !== null && attrs[k] !== "") {
      let v = attrs[k];
      if (typeof v === "object") v = JSON.stringify(v);
      parts.push(`${k}=${v}`);
    }
  }
  for (const k of TEXT_KEYS) {
    if (attrs[k] !== undefined && attrs[k] !== null && attrs[k] !== "") {
      let v = attrs[k];
      if (typeof v === "object") v = JSON.stringify(v);
      if (k === "text") v = `"${String(v).slice(0, 80)}"`;
      parts.push(`${k}=${v}`);
    }
  }
  // component / icon refs
  for (const k of ["component", "componentId", "icon", "set", "$control__icon"]) {
    if (attrs[k]) parts.push(`${k}=${attrs[k]}`);
  }
  return parts.join("  ");
}

const root = await framer.agent.serialize({ id: nodeId, depth: 8 }, { pagePath });
const lines = [];
function walk(n, pre) {
  const nm = n.name || n.type;
  lines.push(`${pre}${n.type}:${nm} [${n.id}]`);
  const c = compact(n.attributes);
  if (c) lines.push(`${pre}   ${c}`);
  for (const ch of (n.children || [])) walk(ch, pre + "  ");
}
walk(root, "");
console.log(lines.join("\n"));
