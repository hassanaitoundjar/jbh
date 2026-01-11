import type { Metadata, Viewport } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JBH ENGINEERING | Architecture & Design Visionnaire",
    template: "%s | JBH ENGINEERING"
  },
  description: "JBH ENGINEERING est un studio d'architecture de premier plan offrant des expériences spatiales durables, innovantes et esthétiquement profondes.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    siteName: "JBH ENGINEERING Architecture",
    title: "JBH ENGINEERING | Architecture & Design Visionnaire",
    description: "JBH ENGINEERING est un studio d'architecture de premier plan offrant des expériences spatiales durables, innovantes et esthétiquement profondes.",
  }
};

export const viewport: Viewport = {
  themeColor: "#161616",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth antialiased">
      <body
        className={`${josefinSans.variable} ${dmSans.variable} font-body bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-foreground`}
        cz-shortcut-listen="true"
      >
        <Header />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
