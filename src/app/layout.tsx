import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/progress-bar";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maple & Mortar Coffee House",
  description:
    "Where the town slows down for a cup. Handcrafted coffee in Birchwood Hollow.",
  openGraph: {
    title: "Maple & Mortar Coffee House",
    description:
      "Where the town slows down for a cup. Handcrafted coffee in Birchwood Hollow.",
    siteName: "Maple & Mortar",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body className="antialiased">
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
