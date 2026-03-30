import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://les-quatre-vents-website.vercel.app"),
  title: "Les Quatre Vents — Brasserie & Bar, Brest depuis 1984",
  description:
    "Brasserie Les Quatre Vents, institution brestoise depuis 1984. Bar, restaurant, terrasse sur les quais. Formules du midi, goûter, huîtres, poulet frites du dimanche.",
  openGraph: {
    title: "Les Quatre Vents — Brasserie, Brest",
    description: "Institution brestoise depuis 1984. Terrasse sur les quais, cuisine généreuse, ambiance authentique.",
    images: ["/images/terrasse.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${sourceSans3.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
