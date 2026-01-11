import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projets | JBH ENGINEERING - Portfolio Architecture & Construction",
    description: "Explorez notre portfolio de projets architecturaux : tours commerciales, résidences de luxe, complexes industriels et designs d'intérieur. Plus de 500 projets réalisés au Maroc.",
    keywords: [
        "projets architecture Maroc",
        "portfolio architecture Agadir",
        "tours commerciales Maroc",
        "résidences luxe architecte",
        "construction industrielle",
        "design intérieur Maroc",
        "urbanisme Agadir",
        "réalisations architecturales"
    ],
    openGraph: {
        title: "Nos Projets | JBH ENGINEERING - Architecture d'Excellence",
        description: "Découvrez nos réalisations architecturales : projets commerciaux, résidentiels et industriels au Maroc et à l'international.",
        type: "website",
        locale: "fr_MA",
        url: "https://jbhengineering.ma/projects",
        siteName: "JBH ENGINEERING",
        images: [
            {
                url: "/images/og/projects-og.jpg",
                width: 1200,
                height: 630,
                alt: "Portfolio Projets JBH Engineering"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Projets | JBH ENGINEERING",
        description: "Portfolio de 500+ projets architecturaux : commercial, résidentiel, industriel.",
        images: ["/images/og/projects-og.jpg"]
    },
    alternates: {
        canonical: "https://jbhengineering.ma/projects"
    }
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
