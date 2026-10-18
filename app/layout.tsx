import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Akar Poros — Membangun Sistem AI dari Akarnya",
  description:
    "Akar Poros merekayasa ekosistem sistem otonom dan arsitektur AI dari akarnya untuk menggerakkan operasional dan efisiensi bisnis 24/7.",
  keywords: [
    "Akar Poros",
    "Membangun sistem AI dari akarnya",
    "AI Engineering Studio",
    "Autonomous AI",
    "WhatsApp AI Assistant",
    "AlertFlow",
    "Raka Putra Pratidina",
  ],
  authors: [{ name: "Raka Putra Pratidina", url: "https://rakaputra.dev" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-dark antialiased selection:bg-lime selection:text-dark`}>
        {children}
      </body>
    </html>
  );
}
