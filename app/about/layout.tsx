import { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos | JBH ENGINEERING - Notre Histoire et Vision",
    description: "Découvrez JBH ENGINEERING, un studio d'architecture de premier plan avec plus de 25 ans d'expérience. Notre équipe de 50+ experts a réalisé 500+ projets primés au Maroc et à l'international.",
    keywords: [
        "bureau d'architecture Agadir",
        "architecte Maroc",
        "JBH Engineering histoire",
        "équipe architectes expert",
        "conception architecturale Maroc",
        "studio architecture innovant",
        "ingénierie bâtiment Agadir"
    ],
    openGraph: {
        title: "À Propos de JBH ENGINEERING | Architecture & Design Visionnaire",
        description: "Plus de 25 ans d'excellence en architecture. Découvrez notre équipe passionnée et notre approche innovante du design.",
        type: "website",
        locale: "fr_MA",
        url: "https://jbhengineering.ma/about",
        siteName: "JBH ENGINEERING",
        images: [
            {
                url: "/images/og/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "Équipe JBH Engineering - Architecture Innovante"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "À Propos | JBH ENGINEERING",
        description: "Découvrez notre équipe d'architectes experts avec 25+ ans d'expérience et 500+ projets réalisés.",
        images: ["/images/og/about-og.jpg"]
    },
    alternates: {
        canonical: "https://jbhengineering.ma/about"
    }
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
