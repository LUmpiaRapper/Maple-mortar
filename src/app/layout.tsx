import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from "@/components/progress-bar";
import TransitionProvider from "@/components/transition-provider";

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
  title: {
    default: "Maple & Mortar Coffee House",
    template: "%s | Maple & Mortar",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: "Maple & Mortar Coffee House",
              description: "Handcrafted small-batch coffee in Birchwood Hollow.",
              url: "https://mapleandmortar.com",
              telephone: "+15551234567",
              email: "hello@mapleandmortar.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "42 Maple Street",
                addressLocality: "Birchwood Hollow",
                addressRegion: "NH",
                postalCode: "03456",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:30", closes: "19:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "07:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:30", closes: "17:00" },
              ],
              servesCuisine: "Coffee",
              priceRange: "$",
              founder: { "@type": "Person", name: "Eleanor Hargrove" },
              foundingDate: "2015",
            }),
          }}
        />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
