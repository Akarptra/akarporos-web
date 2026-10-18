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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#07261E] text-[#F4F1E6] antialiased selection:bg-[#C7925B]/25 selection:text-[#F4F1E6]`}
      >
        {children}
      </body>
    </html>
  );
}
