import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | JBH ENGINEERING - Actualités Architecture & Design",
    description: "Suivez les dernières tendances en architecture, construction durable et design d'intérieur. Articles d'experts, conseils et innovations du secteur.",
    keywords: [
        "blog architecture Maroc",
        "actualités construction",
        "tendances design intérieur",
        "architecture durable",
        "innovation bâtiment",
        "conseils architecte",
        "articles architecture",
        "durabilité construction"
    ],
    openGraph: {
        title: "Blog Architecture | JBH ENGINEERING",
        description: "Articles et conseils d'experts sur l'architecture, la construction durable et le design d'intérieur.",
        type: "website",
        locale: "fr_MA",
        url: "https://jbhengineering.ma/blog",
        siteName: "JBH ENGINEERING",
        images: [
            {
                url: "/images/og/blog-og.jpg",
                width: 1200,
                height: 630,
                alt: "Blog JBH Engineering - Actualités Architecture"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | JBH ENGINEERING",
        description: "Articles et tendances en architecture, construction et design d'intérieur.",
        images: ["/images/og/blog-og.jpg"]
    },
    alternates: {
        canonical: "https://jbhengineering.ma/blog"
    }
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
