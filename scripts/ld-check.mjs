// Confirms every route's JSON-LD parses and reports the schema types found.
const BASE = process.argv[2] || "http://localhost:3000";
const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).sort();
let bad = 0;
for (const r of routes) {
  const html = await (await fetch(BASE + r)).text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const types = [];
  for (const [, body] of blocks) {
    try {
      const j = JSON.parse(body.replace(/\u003c/g, "<"));
      types.push(j["@type"] + (j.mainEntity ? `(${j.mainEntity.length})` : "") +
        (j.itemListElement ? `(${j.itemListElement.length})` : ""));
    } catch { types.push("INVALID JSON"); bad++; }
  }
  console.log(`${r.padEnd(48)} ${types.join(", ") || "NONE"}`);
}
console.log(bad ? `\n${bad} invalid block(s)` : "\nAll JSON-LD parses.");
