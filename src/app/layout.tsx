import type { Metadata } from "next";
import "./globals.css";
import { unbounded, inter, satoshi } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import SiteBackground from "@/components/site/SiteBackground";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import SiteChrome from "@/components/site/SiteChrome";

const description =
  "Aerstack is an AI-driven agency focused on automating lead generation and management for marketing agencies. We streamline the entire process from capturing and qualifying leads to nurturing and conversion.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aerstack - Automate Your Leads Pipeline",
  description,
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  icons: {
    icon: "/favicon-aerstack.png",
    apple: "/favicon-aerstack.png",
  },
  openGraph: {
    type: "website",
    title: "Aerstack - Automate Your Leads Pipeline",
    description,
    images: [{ url: "/images/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerstack - Automate Your Leads Pipeline",
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
