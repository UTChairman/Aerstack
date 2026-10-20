import { Unbounded, Inter } from "next/font/google";
import localFont from "next/font/local";

// Display headings — matches Framer's Unbounded usage (weights 200–900 used across site)
export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-unbounded",
  display: "swap",
});

// Body / UI — Inter (Framer serves the same standard Inter)
export const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

// Secondary body — Satoshi (Fontshare). Self-hosted from the exact files the site ships.
export const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
