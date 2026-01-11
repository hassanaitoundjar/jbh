"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Ruler, Users, Award, CheckCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: "1",
        title: "Skyline Tower",
        category: "Commercial",
        location: "New York, États-Unis",
        year: "2023",
        area: "4 180 m²",
        client: "Manhattan Developments Inc.",
        duration: "24 mois",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Un développement mixte de 52 étages comprenant des espaces de bureaux haut de gamme et des commerces. Ce projet emblématique redéfinit la ligne d'horizon de New York avec son design innovant et ses caractéristiques durables.",
        challenge: "Le principal défi était de créer une structure maximisant la lumière naturelle tout en maintenant l'efficacité énergétique dans un environnement urbain dense.",
        solution: "Nous avons mis en œuvre un système de façade à double peau avec des stores automatisés et des panneaux photovoltaïques intégrés, réduisant la consommation d'énergie de 40 %.",
        features: [
            "Certifié LEED Platine",
            "Technologie de Bâtiment Intelligent",
            "Jardin sur le Toit & Équipements",
            "Recharge de Véhicules Électriques",
            "Système de Récupération des Eaux de Pluie",
            "Fenêtres du Sol au Plafond",
        ],
    },
    {
        id: "2",
        title: "The Green Haven",
        category: "Résidentiel",
        location: "Los Angeles, États-Unis",
        year: "2023",
        area: "1 115 m²",
        client: "Client Privé",
        duration: "18 mois",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Villa écologique de luxe avec un design durable et des systèmes d'énergie renouvelable. Cette résidence mélange harmonieusement la vie intérieure et extérieure.",
        challenge: "Créer une maison de luxe atteignant une consommation nette zéro sans compromettre le confort ou l'esthétique.",
        solution: "Nous avons conçu une maison passive avec chauffage/refroidissement géothermique, panneaux solaires et domotique pour une gestion optimale de l'énergie.",
        features: [
            "Maison à Énergie Nette Zéro",
            "Système CVC Géothermique",
            "Réseau de Panneaux Solaires",
            "Aménagement Paysager Indigène",
            "Intégration Domotique",
            "Piscine à Débordement",
        ],
    },
    {
        id: "3",
        title: "Metro Hub Station",
        category: "Urbanisme",
        location: "Chicago, États-Unis",
        year: "2022",
        area: "7 900 m²",
        client: "Chicago Transit Authority",
        duration: "36 mois",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Pôle de transport moderne reliant plusieurs réseaux de transport avec des espaces commerciaux. Conçu pour accueillir 50 000 navetteurs quotidiens.",
        challenge: "Intégrer plusieurs systèmes de transport tout en créant une expérience passager agréable et efficace dans un site urbain contraint.",
        solution: "Nous avons développé une conception multi-niveaux avec une signalétique intuitive, un éclairage naturel et des zones d'attente climatisées.",
        features: [
            "Pôle de Transport Multimodal",
            "Système de Ventilation Naturelle",
            "Signalétique Numérique",
            "Options de Commerce et Restauration",
            "Installation de Stationnement pour Vélos",
            "Fonctionnalités d'Accessibilité",
        ],
    },
    {
        id: "4",
        title: "Apex Manufacturing Plant",
        category: "Industriel",
        location: "Détroit, États-Unis",
        year: "2022",
        area: "11 150 m²",
        client: "Apex Industries",
        duration: "20 mois",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Installation de fabrication de pointe avec des lignes de production automatisées. Conçu pour les opérations de l'Industrie 4.0.",
        challenge: "Créer un espace de fabrication flexible capable de s'adapter à des exigences de production en évolution rapide.",
        solution: "Conception de baies modulaires avec systèmes de ponts roulants, services publics intégrés et plan d'étage extensible.",
        features: [
            "Lignes de Production Automatisées",
            "Conception de Baies Modulaires",
            "Systèmes de Ponts Roulants",
            "Systèmes de Récupération d'Énergie",
            "Centre de Bien-être pour Employés",
            "Matériaux Durables",
        ],
    },
    {
        id: "5",
        title: "Horizon Office Complex",
        category: "Commercial",
        location: "San Francisco, États-Unis",
        year: "2023",
        area: "6 040 m²",
        client: "TechVentures LLC",
        duration: "22 mois",
        image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Complexe de bureaux contemporain avec des espaces de travail flexibles et des équipements de bien-être conçus pour la main-d'œuvre moderne.",
        challenge: "Concevoir un espace de travail post-pandémique favorisant la collaboration tout en assurant la santé et la sécurité.",
        solution: "Plans d'étage ouverts avec cloisons mobiles, filtration CVC améliorée et systèmes de bâtiment sans contact.",
        features: [
            "Espaces de Travail Flexibles",
            "Équipements de Bien-être",
            "Filtration HEPA",
            "Systèmes Sans Contact",
            "Terrasse sur le Toit",
            "Station de Recharge VE",
        ],
    },
    {
        id: "6",
        title: "Serenity Apartments",
        category: "Résidentiel",
        location: "Miami, États-Unis",
        year: "2021",
        area: "2 600 m²",
        client: "Serenity Developments",
        duration: "16 mois",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Appartements de luxe au bord de l'eau avec vue panoramique sur l'océan et équipements privés pour résidents exigeants.",
        challenge: "Maximiser les vues sur l'océan pour toutes les unités tout en assurant la résilience structurelle contre les ouragans.",
        solution: "Dalles de plancher décalées avec vitrage résistant aux impacts et construction en béton armé.",
        features: [
            "Vues sur l'Océan",
            "Résistant aux Ouragans",
            "Accès Plage Privée",
            "Piscine à Débordement",
            "Service de Conciergerie",
            "Prêt pour Domotique",
        ],
    },
    {
        id: "7",
        title: "Urban Loft Redesign",
        category: "Intérieur",
        location: "Boston, États-Unis",
        year: "2023",
        area: "325 m²",
        client: "Client Privé",
        duration: "6 mois",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Transformation de loft industriel avec un design intérieur minimaliste moderne dans un bâtiment historique.",
        challenge: "Préserver le caractère industriel tout en créant un espace de vie moderne et confortable.",
        solution: "Briques apparentes et éléments en acier combinés à des finitions en bois chaleureuses et des luminaires contemporains.",
        features: [
            "Murs en Briques Apparentes",
            "Menuiserie sur Mesure",
            "Cuisine de Chef",
            "Bureau à Domicile",
            "Chauffage au Sol",
            "Système Audio",
        ],
    },
    {
        id: "8",
        title: "Central Park Plaza",
        category: "Urbanisme",
        location: "Denver, États-Unis",
        year: "2022",
        area: "8 825 m²",
        client: "Ville de Denver",
        duration: "30 mois",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Développement urbain mixte avec espaces verts et équipements communautaires desservant le centre-ville.",
        challenge: "Créer un espace public dynamique encourageant le rassemblement communautaire en toutes saisons.",
        solution: "Pavillons couverts, allées chauffées et éclairage programmable pour une activation toute l'année.",
        features: [
            "Espaces Verts Publics",
            "Centre Communautaire",
            "Amphithéâtre Extérieur",
            "Zone de Marché Fermier",
            "Installation d'Art Public",
            "Gestion des Eaux Pluviales",
        ],
    },
    {
        id: "9",
        title: "Executive Penthouse",
        category: "Intérieur",
        location: "Seattle, États-Unis",
        year: "2023",
        area: "483 m²",
        client: "Client Privé",
        duration: "8 mois",
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Intérieur de penthouse de luxe avec mobilier sur mesure et intégration domotique pour une vie sans faille.",
        challenge: "Intégrer une technologie de pointe tout en maintenant une esthétique chaleureuse et accueillante.",
        solution: "Intégration technologique cachée avec commande vocale, systèmes motorisés et mobilier sur mesure.",
        features: [
            "Système Domotique",
            "Mobilier sur Mesure",
            "Cave à Vin",
            "Cinéma Maison",
            "Terrasse Privée",
            "Salle de Bain Spa",
        ],
    },
];

export default function ProjectDetailPage() {
    const params = useParams();
    const projectId = params.id as string;

    const project = projects.find(p => p.id === projectId);
    const currentIndex = projects.findIndex(p => p.id === projectId);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    if (!project) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Projet Non Trouvé</h1>
                    <p className="text-muted-foreground mb-8">Le projet que vous recherchez n'existe pas.</p>
                    <Button asChild className="rounded-full">
                        <Link href="/projects">Retour aux Projets</Link>
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/50 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="container mx-auto px-4 pb-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">Accueil</Link>
                                <span className="text-gray-600">/</span>
                                <Link href="/projects" className="text-gray-400 hover:text-primary transition-colors">Projets</Link>
                                <span className="text-gray-600">/</span>
                                <span className="text-white">{project.title}</span>
                            </div>

                            <span className="inline-block bg-primary text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                                {project.category}
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-6 text-white/80">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    {project.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    {project.year}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Ruler className="w-5 h-5 text-primary" />
                                    {project.area}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    {project.client}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
                    <img src="/bg/bg.jpeg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                    Aperçu du Projet
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                    Le Défi
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.challenge}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                    Notre Solution
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {project.solution}
                                </p>
                            </motion.div>

                            {/* Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                                    Galerie du Projet
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {project.gallery.map((img, index) => (
                                        <div key={index} className="relative aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer">
                                            <Image
                                                src={img}
                                                alt={`${project.title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <Share2 className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Project Info Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-neutral-100 dark:border-white/10 shadow-xl"
                            >
                                <h3 className="text-xl font-bold text-foreground mb-6">Détails du Projet</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-3 border-b border-border">
                                        <span className="text-muted-foreground">Client</span>
                                        <span className="font-medium text-foreground">{project.client}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border">
                                        <span className="text-muted-foreground">Lieu</span>
                                        <span className="font-medium text-foreground">{project.location}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border">
                                        <span className="text-muted-foreground">Année</span>
                                        <span className="font-medium text-foreground">{project.year}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-border">
                                        <span className="text-muted-foreground">Surface</span>
                                        <span className="font-medium text-foreground">{project.area}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="text-muted-foreground">Durée</span>
                                        <span className="font-medium text-foreground">{project.duration}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Features Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-secondary p-8 rounded-3xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 opacity-10">
                                    <img src="/bg/bg.jpeg" alt="" className="w-full h-full object-cover invert" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-6">Caractéristiques Clés</h3>
                                    <div className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-primary/10 p-8 rounded-3xl border border-primary/20"
                            >
                                <Award className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-foreground mb-3">Démarrer Votre Projet</h3>
                                <p className="text-muted-foreground mb-6">
                                    Intéressé par un projet similaire ? Discutons de votre vision.
                                </p>
                                <Button asChild className="w-full rounded-full">
                                    <Link href="/contact">Contactez-nous</Link>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-12 border-t border-border">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {prevProject ? (
                            <Link href={`/projects/${prevProject.id}`} className="group flex items-center gap-4 hover:text-primary transition-colors">
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                <div>
                                    <span className="text-sm text-muted-foreground">Précédent</span>
                                    <p className="font-bold">{prevProject.title}</p>
                                </div>
                            </Link>
                        ) : <div />}

                        <Button variant="outline" asChild className="rounded-full">
                            <Link href="/projects">Tous les Projets</Link>
                        </Button>

                        {nextProject ? (
                            <Link href={`/projects/${nextProject.id}`} className="group flex items-center gap-4 text-right hover:text-primary transition-colors">
                                <div>
                                    <span className="text-sm text-muted-foreground">Suivant</span>
                                    <p className="font-bold">{nextProject.title}</p>
                                </div>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>
        </main>
    );
}
