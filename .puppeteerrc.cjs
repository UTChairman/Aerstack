/**
 * Puppeteer is dev-only tooling for the live-site extraction scripts.
 * Skip the ~200MB Chromium download on CI/Vercel builds; local runs use the
 * browser already cached in ~/.cache/puppeteer.
 */
module.exports = {
  skipDownload: process.env.CI === "true" || process.env.VERCEL === "1",
};
