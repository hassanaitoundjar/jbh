import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | JBH ENGINEERING - Démarrez Votre Projet",
    description: "Contactez JBH ENGINEERING pour vos projets d'architecture et de construction à Agadir, Maroc. Consultation gratuite, devis personnalisé. Appelez-nous au +212-628-096-812.",
    keywords: [
        "contact architecte Agadir",
        "devis architecture Maroc",
        "consultation architecte gratuite",
        "bureau études Agadir",
        "ingénieur bâtiment contact",
        "architecte projet Maroc",
        "JBH Engineering contact",
        "demande devis construction"
    ],
    openGraph: {
        title: "Contactez-Nous | JBH ENGINEERING",
        description: "Démarrez votre projet architectural. Consultation gratuite et devis personnalisé à Agadir, Maroc.",
        type: "website",
        locale: "fr_MA",
        url: "https://jbhengineering.ma/contact",
        siteName: "JBH ENGINEERING",
        images: [
            {
                url: "/images/og/contact-og.jpg",
                width: 1200,
                height: 630,
                alt: "Contactez JBH Engineering"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | JBH ENGINEERING",
        description: "Contactez-nous pour une consultation gratuite. +212-628-096-812 | Agadir, Maroc",
        images: ["/images/og/contact-og.jpg"]
    },
    alternates: {
        canonical: "https://jbhengineering.ma/contact"
    },
    other: {
        "geo.region": "MA-AGD",
        "geo.placename": "Agadir",
        "geo.position": "30.4278;-9.5981"
    }
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
