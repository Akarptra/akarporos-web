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
  title: "Akar Poros — Autonomous AI Systems & Engineering Studio",
  description:
    "Kami membangun ekosistem sistem otonom dan AI dari fondasi terdalam untuk menggerakkan pertumbuhan bisnis Anda 24/7.",
  keywords: [
    "Akar Poros",
    "AI Agent Indonesia",
    "Autonomous AI",
    "WhatsApp AI Assistant",
    "AlertFlow",
    "AI Studio",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-[#090a0f] text-[#f3f4f6] antialiased selection:bg-emerald-500/20 selection:text-emerald-300`}
      >
        {children}
      </body>
    </html>
  );
}
