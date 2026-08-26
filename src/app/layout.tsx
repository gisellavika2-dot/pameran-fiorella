// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Castoro, Figtree } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SitePreloader from "@/components/layout/SitePreloader";
import SupergrafisField from "@/components/layout/SupergrafisField";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/constants";
import "./globals.css";

const shellImageSources = [
  "/logo/fiorella-blue-mark.webp",
  "/logo/Logo_White.webp",
];

const castoro = Castoro({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-castoro",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export const viewport: Viewport = {
  themeColor: "#121e42",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${castoro.variable} ${figtree.variable}`}>
      <body className="site-preload-pending flex min-h-screen flex-col">
        <SitePreloader imageSources={shellImageSources} />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <SupergrafisField />
      </body>
    </html>
  );
}
