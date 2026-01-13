"use client";

import { Ruler, Building2, Paintbrush, Briefcase, Map, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const infoCards = [
    {
        icon: Ruler,
        title: "Génie Civil",
        description: "Nos services de construction en béton armé allient robustesse et durabilité pour des projets immobiliers solides et pérennes.",
    },
    {
        icon: Building2,
        title: "Génie Thermique et Fluides",
        description: "Experts en fluides, nous proposons des solutions de climatisation, chauffage et plomberie efficaces, éco-responsables et adaptées à vos besoins.",
    },
    {
        icon: Paintbrush,
        title: "Génie Electrique",
        description: "Notre expertise en conception d'installations électriques courants forts/faibles assure une distribution électrique sûre et une connectivité optimale pour vos bâtiments.",
    },
    {
        icon: Briefcase,
        title: "Infrastructure VRD",
        description: "Nos projets de VRD intègrent planification, conception et gestion des infrastructures routières et réseaux divers pour des solutions intégrées et fonctionnelles.",
    },
    {
        icon: Map,
        title: "Economie de la Construction",
        description: "Gestion des coûts. Estimation tous corps d’état. Prescriptions techniques tous corps d’état.Audit de constructions existantes",
    },
    {
        icon: Leaf,
        title: "Direction de Travaux",
        description: "Ordonnancement, pilotage de chantier. Coordination des travaux Assistance maîtrise d’ouvrage et maitrise d’ouvrage déléguée (AMO MOD).",
    },
    {
        icon: Leaf,
        title: "Ouvrages d'art et Routes",
        description: "Ouvrages d’art.Routes. Pont, Dalot. Murs de soutènement.",
    },
    {
        icon: Leaf,
        title: "Notice de sécurité incendie",
        description: "Les établissements recevant du public (ERP)Les bâtiments d’habitation (BH) Les immeubles de grande hauteur (IGH) Les lieux de travail (ERT)",
    },
    {
        icon: Leaf,
        title: "Impact sur Environnement (EIE)",
        description: "Analyse préalable pour évaluer les effets potentiels d'un projet (construction, industrie) sur l'environnement (air, eau, faune, flore, humain) pour identifier, prévenir ou compenser les impacts négatifs et renforcer les positifs.",
    },
];

export function CardsSection() {
    return (
        <section className="py-24  bg-background overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/principles/2.jpeg"
                    alt="Background"
                    fill
                    className="object-cover opacity-15"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                    >
                        Nos <span className="relative inline-block">
                            <span className="text-primary relative z-10">Services</span>
                            <svg
                                className="absolute -top-[15%] -left-[10%] w-[120%] h-[130%] pointer-events-none"
                                viewBox="0 0 160 60"
                                preserveAspectRatio="none"
                                fill="none"
                            >
                                <motion.path
                                    d="M10,30 Q10,5 80,5 T150,30 T80,55 T10,30"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    className="text-primary"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }}
                                />
                            </svg>
                        </span>
                    </motion.h2>

                    {/* Decorative Dots */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-2 justify-center mb-8"
                    >
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground text-lg leading-relaxed"
                    >
                        Une expertise complète pour répondre à tous vos besoins en ingénierie technique.
                    </motion.p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {infoCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Icon */}
                                <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                    <card.icon
                                        className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    {/* Title */}
                                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        {card.description}
                                    </p>

                                    {/* Read More Link */}
                                    <button className="text-xs font-bold text-gray-900 tracking-widest hover:text-primary transition-colors duration-300 uppercase relative">
                                        En Savoir Plus
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
