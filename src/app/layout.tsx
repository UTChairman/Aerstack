import type { Metadata } from "next";
import "./globals.css";
import { unbounded, inter, satoshi } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import SiteBackground from "@/components/site/SiteBackground";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SiteChrome from "@/components/site/SiteChrome";

const description =
  "Aerstack is a digital solutions company for small and medium businesses. We build websites that bring in calls, bookings and orders, management software such as POS, inventory, staff and reporting systems, and AI workflows that handle repetitive work.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aerstack | Digital solutions for businesses",
  description,
  keywords: [
    "website design",
    "business website",
    "POS system",
    "inventory management software",
    "restaurant POS",
    "custom management software",
    "AI workflows",
    "business automation",
    "WhatsApp automation",
    "appointment reminders",
  ],
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  icons: {
    icon: "/favicon-aerstack.png",
    apple: "/favicon-aerstack.png",
  },
  openGraph: {
    type: "website",
    title: "Aerstack | Digital solutions for businesses",
    description,
    images: [{ url: "/images/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerstack | Digital solutions for businesses",
    description,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} ${satoshi.variable}`}
    >
      <body>
        <SiteChrome
          background={<SiteBackground />}
          nav={<Navbar />}
          footer={<Footer />}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
