// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SitePreloader from "@/components/layout/SitePreloader";
import SupergrafisField from "@/components/layout/SupergrafisField";
import { SITE_NAME, SITE_DESCRIPTION } from "@/data/constants";
import { importedSiteImageSources } from "@/data/imported-site-images";
import { getPublicImageSources } from "@/lib/public-image-sources";
import "./globals.css";

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
  const imageSources = Array.from(
    new Set([...getPublicImageSources(), ...importedSiteImageSources]),
  );

  return (
    <html lang="id">
      <body className="site-preload-pending flex min-h-screen flex-col">
        <SitePreloader imageSources={imageSources} />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <SupergrafisField />
      </body>
    </html>
  );
}
