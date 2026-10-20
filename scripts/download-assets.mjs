// Downloads Satoshi font files + home-page images from the live Aerstack site
// into the project. These are the user's own assets from their own site.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const fonts = {
  "satoshi-400.woff2":
    "https://framerusercontent.com/third-party-assets/fontshare/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2",
  "satoshi-700.woff2":
    "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
  "satoshi-900.woff2":
    "https://framerusercontent.com/third-party-assets/fontshare/wf/NHPGVFYUXYXE33DZ75OIT4JFGHITX5PE/PSUTMASCDJTVPERDYJZPN23BVUFUCQIF/J64QX5IPOHK56I2KYUNBQ5M2XWZEYKYX.woff2",
};

const images = [
  "b4IW2nPWxHJ6UTAoq3A4u5d56ps.png",
  "bxq0A8Hhwin15ojgBCOBsiw7rw.png",
  "yhpIH0GdxLw99gay0FBpfIIM.png",
  "eb5BAUbWpDSbM0QrEZiDqbwVQwM.png",
  "LMLU2SDUt6FEk6RYhSyhUN1T3A.png",
  "AJekJWTMMpjIkNLkfhO2mh041c.png",
  "13io4DirT94ABxHfIqZer9j2G8.png",
  "AFwhon4kAyZHNTAkLIgTyKvTTJg.png",
  "xOz91BrLMifZXksr8HqpgNMqqEc.jpg",
  "jNK8t6af4Fs03rTOadGzMRmweqo.jpg",
  "kovQoNz6Ql3YnNkQjQhEVqzuBI.png",
  "kowsLNxnpQclOQJjDCjUkZkX0yw.jpg",
  "mr7pSKURwMO4ZrsBLvHCtibCc.jpg",
  "Y9KmJAQ4w53hsc4jJojfokLZ7D8.jpg",
  "6uPQSjDGRQZxLCvtvV5va15J1hs.jpg",
  "kGoQcTIw1fAqbj2U9kOtJrmNE.jpg",
  "tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
  "QHwiFG8CdFS1wdIHWtWHvAuzLAM.jpg",
  "w3HJ5z6jIbuVODNRrmm2cec7Ow.png",
];

async function dl(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return buf.length;
}

let ok = 0,
  fail = 0;
for (const [name, url] of Object.entries(fonts)) {
  try {
    const n = await dl(url, join(root, "src", "fonts", name));
    console.log(`font ok  ${name} (${n} bytes)`);
    ok++;
  } catch (e) {
    console.log(`font FAIL ${name}: ${e.message}`);
    fail++;
  }
}
for (const img of images) {
  try {
    const n = await dl(
      `https://framerusercontent.com/images/${img}`,
      join(root, "public", "images", img),
    );
    console.log(`img ok   ${img} (${n} bytes)`);
    ok++;
  } catch (e) {
    console.log(`img FAIL ${img}: ${e.message}`);
    fail++;
  }
}
console.log(`\nDone. ${ok} ok, ${fail} failed.`);
