// Applies exact string replacements to CRLF source files.
// Usage: node scripts/copyedit.mjs <edits.json>
// edits.json: [{ "file": "...", "pairs": [["old","new"], ...] }]
import fs from "node:fs";

const edits = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
let failed = 0;

for (const { file, pairs } of edits) {
  const raw = fs.readFileSync(file, "utf8");
  const crlf = raw.includes("\r\n");
  let s = raw.split("\r\n").join("\n");
  for (const [a, b] of pairs) {
    if (!s.includes(a)) {
      console.error(`MISS  ${file}\n      ${JSON.stringify(a.slice(0, 90))}`);
      failed++;
      continue;
    }
    s = s.split(a).join(b);
  }
  fs.writeFileSync(file, crlf ? s.split("\n").join("\r\n") : s);
  console.log(`ok    ${file}`);
}
if (failed) { console.error(`\n${failed} replacement(s) did not match`); process.exit(1); }
