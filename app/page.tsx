import { Metadata } from "next";
import { HeroSection2 } from "@/components/sections/HeroSection2";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { LogoSection } from "@/components/sections/LogoSection";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import FunctionsSection from "@/components/sections/FunctionsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CardsSection } from "@/components/sections/CardsSection";

export const metadata: Metadata = {
  title: "JBH ENGINEERING | Bureau d'Architecture & Ingénierie à Agadir, Maroc",
  description: "JBH ENGINEERING est un studio d'architecture de premier plan à Agadir, Maroc. Conception architecturale, design d'intérieur, construction durable. 25+ ans d'expérience, 500+ projets réalisés.",
  keywords: [
    "architecte Agadir",
    "bureau d'architecture Maroc",
    "JBH Engineering",
    "conception architecturale",
    "design intérieur Agadir",
    "construction durable Maroc",
    "ingénierie bâtiment",
    "urbanisme Agadir",
    "architecte Maroc",
    "bureau études techniques"
  ],
  openGraph: {
    title: "JBH ENGINEERING | Architecture & Design Visionnaire",
    description: "Studio d'architecture de premier plan à Agadir. 25+ ans d'expérience, 500+ projets réalisés. Conception innovante et durable.",
    type: "website",
    locale: "fr_MA",
    url: "https://jbhengineering.ma",
    siteName: "JBH ENGINEERING",
    images: [
      {
        url: "/images/og/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "JBH Engineering - Architecture & Design Visionnaire"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "JBH ENGINEERING | Architecture & Design",
    description: "Studio d'architecture à Agadir, Maroc. Conception innovante et construction durable.",
    images: ["/images/og/home-og.jpg"]
  },
  alternates: {
    canonical: "https://jbhengineering.ma"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code"
  }
};

export default function Home() {
  return (
    <>
      <HeroSection2 />
      <ServicesSection />
      <PrinciplesSection />
      <CardsSection />
      <StatsSection />
      <FunctionsSection />
      <ProcessSection />
      <PortfolioGallery />
      <TestimonialsSection />
      <LogoSection />
      <BlogSection />
    </>
  );
}
