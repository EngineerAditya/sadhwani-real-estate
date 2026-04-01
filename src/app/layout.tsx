import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";

import { CustomCursor } from "@/components/site/CustomCursor";

// Headline: Classic, Editorial Serif
const headlineFont = Playfair_Display({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

// Labels: Highly spaced, clean luxury sans
const labelFont = Montserrat({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Body: High readability
const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadhwani | Real Estate Holdings & Heritage Brokerage",
  description: "Private advisory and management of Bangalore's most resilient real estate capital since 1959.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${headlineFont.variable} ${labelFont.variable} ${bodyFont.variable} antialiased min-h-screen selection:bg-primary selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}