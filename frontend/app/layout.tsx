import type { Metadata } from "next";
import { Noto_Serif, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LayoutClient } from "@/components/layout/layout-client";

const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Travelicious | Tailor-made African Journeys",
  description: "Luxury safari operator crafting journeys that leave you forever changed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${dmSans.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-savannah-cream text-ink-editorial">
        <SiteHeader />
        <LayoutClient>
          <main className="flex-grow">
            {children}
          </main>
        </LayoutClient>
        <SiteFooter />
      </body>
    </html>
  );
}
