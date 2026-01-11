export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ArchitecturalFirm",
        "@id": "https://jbhengineering.ma",
        "name": "JBH ENGINEERING",
        "alternateName": "JBH Engineering Architecture",
        "url": "https://jbhengineering.ma",
        "logo": "https://jbhengineering.ma/images/logo/jbh.png",
        "image": "https://jbhengineering.ma/images/og/home-og.jpg",
        "description": "JBH ENGINEERING est un studio d'architecture de premier plan à Agadir, Maroc. Conception architecturale innovante, design d'intérieur et construction durable.",
        "telephone": "+212-628-096-812",
        "email": "hassanprof96@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Boulevard de l'Innovation, Suite 500",
            "addressLocality": "Agadir",
            "postalCode": "80000",
            "addressCountry": "MA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.4278",
            "longitude": "-9.5981"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
            }
        ],
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "Country",
                "name": "Morocco"
            },
            {
                "@type": "City",
                "name": "Agadir"
            }
        ],
        "sameAs": [
            "https://facebook.com/jbhengineering",
            "https://instagram.com/jbhengineering",
            "https://twitter.com/jbhengineering",
            "https://linkedin.com/company/jbhengineering"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150"
        },
        "founder": {
            "@type": "Person",
            "name": "JBH Engineering Team"
        },
        "foundingDate": "1999",
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "50"
        },
        "award": "150+ Prix d'Architecture",
        "knowsAbout": [
            "Architecture",
            "Design d'intérieur",
            "Construction durable",
            "Urbanisme",
            "Ingénierie structurelle"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services d'Architecture",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conception Architecturale",
                        "description": "Conception architecturale innovante pour projets résidentiels et commerciaux"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Design d'Intérieur",
                        "description": "Design d'intérieur moderne et fonctionnel"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Construction Durable",
                        "description": "Solutions de construction écologique et durable"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Urbanisme",
                        "description": "Planification et design urbain"
                    }
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
