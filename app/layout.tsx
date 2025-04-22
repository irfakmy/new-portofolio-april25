import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {} from "next/font/google";

export const metadata: Metadata = {
  title:
    "Portfolio | Muhammad Irfa' Maulana (irfakkk06) |  Web Developer",
  description:
    "merging creativity with functionality seamlessly."
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
