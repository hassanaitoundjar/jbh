import type { Metadata, Viewport } from "next";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { StructuredData } from "@/components/seo/StructuredData";
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
  metadataBase: new URL("https://jbhengineering.ma"),
  title: {
    default: "JBH ENGINEERING | Bureau d'Architecture à Agadir, Maroc",
    template: "%s | JBH ENGINEERING"
  },
  description: "JBH ENGINEERING est un studio d'architecture de premier plan à Agadir, Maroc. Conception architecturale innovante, design d'intérieur et construction durable. 25+ ans d'expérience, 500+ projets réalisés.",
  keywords: [
    "architecte Agadir",
    "bureau architecture Maroc",
    "JBH Engineering",
    "conception architecturale",
    "design intérieur",
    "construction durable",
    "ingénierie bâtiment",
    "urbanisme Maroc"
  ],
  authors: [{ name: "JBH ENGINEERING", url: "https://jbhengineering.ma" }],
  creator: "JBH ENGINEERING",
  publisher: "JBH ENGINEERING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  twitter: {
    card: "summary_large_image",
    site: "@jbhengineering",
    creator: "@jbhengineering"
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: "JBH ENGINEERING",
    title: "JBH ENGINEERING | Architecture & Design Visionnaire",
    description: "Studio d'architecture de premier plan à Agadir, Maroc. Conception innovante et construction durable.",
    images: [
      {
        url: "/images/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "JBH Engineering - Architecture & Design"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/images/logo/single-logo.png",
    shortcut: "/images/logo/single-logo.png",
    apple: "/images/logo/single-logo.png",
  },
  manifest: "/manifest.json",
  category: "architecture"
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
    <html lang="fr" className="scroll-smooth antialiased" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
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
