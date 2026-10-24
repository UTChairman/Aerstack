import type { Metadata } from "next";
import "./globals.css";
import { unbounded, inter, satoshi } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { SITE_NAME, OG_IMAGE, OG_W, OG_H, ORGANISATION, WEBSITE } from "@/lib/seo";
import StructuredData from "@/components/site/StructuredData";
import SiteBackground from "@/components/site/SiteBackground";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SiteChrome from "@/components/site/SiteChrome";

const description =
  "Aerstack builds websites, custom management software such as POS and inventory, and AI workflows for small and medium businesses. Tell us about your business.";

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
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Aerstack | Digital solutions for businesses",
    description,
    images: [{ url: OG_IMAGE, width: OG_W, height: OG_H, alt: "Aerstack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerstack | Digital solutions for businesses",
    description,
    images: [OG_IMAGE],
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
        <StructuredData data={[ORGANISATION, WEBSITE]} />
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
