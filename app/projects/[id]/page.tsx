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
        title: "Clinique Ibn Rochd",
        category: "Santé",
        location: "Tiznit, Maroc",
        year: "2023",
        area: "2 500 m²",
        client: "Privé",
        duration: "18 mois",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Construction d'une clinique moderne offrant des services de santé de qualité à la région de Tiznit. Le projet comprend des blocs opératoires, des chambres d'hospitalisation et des services d'urgence.",
        challenge: "Intégrer des équipements médicaux de pointe dans une architecture fonctionnelle tout en respectant les normes sanitaires strictes.",
        solution: "Conception modulaire permettant une circulation fluide des patients et du personnel médical, avec une attention particulière à l'hygiène et à la lumière naturelle.",
        features: [
            "Blocs Opératoires Modernes",
            "Service d'Urgence 24/7",
            "Chambres Confortables",
            "Équipements de Radiologie",
            "Système de Filtration d'Air",
            "Accessibilité PMR",
        ],
    },
    {
        id: "2",
        title: "CMC (OFPPT)",
        category: "Éducation",
        location: "Laâyoune, Maroc",
        year: "2023",
        area: "3 200 m²",
        client: "OFPPT",
        duration: "24 mois",
        image: "/images/company/ofppt.jpeg",
        gallery: [
            "/images/company/ofppt.jpeg",
            "/images/company/ofppt.jpeg",
            "/images/company/ofppt.jpeg",
        ],
        description: "Cité des Métiers et des Compétences, un centre de formation professionnelle d'excellence équipé des dernières technologies pour former la jeunesse de la région.",
        challenge: "Créer un environnement d'apprentissage stimulant adapté aux besoins spécifiques de la formation professionnelle technique.",
        solution: "Espaces ouverts et polyvalents, ateliers équipés et salles de cours connectées favorisant l'apprentissage pratique.",
        features: [
            "Ateliers Techniques",
            "Salles de Cours Connectées",
            "Bibliothèque Numérique",
            "Espaces de Détente",
            "Amphithéâtre",
            "Architecture Durable",
        ],
    },
    {
        id: "3",
        title: "Club de l'Avocat",
        category: "Institutionnel",
        location: "Guelmim, Maroc",
        year: "2022",
        area: "1 800 m²",
        client: "Ordre des Avocats",
        duration: "14 mois",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Espace de rencontre, de formation et d'échange pour les professionnels du droit, alliant solennité institutionnelle et convivialité.",
        challenge: "Concevoir un bâtiment qui reflète la dignité de la profession tout en offrant des espaces fonctionnels pour les événements et réunions.",
        solution: "Architecture sobre et élégante utilisant des matériaux locaux, avec un grand atrium central favorisant les échanges.",
        features: [
            "Salle de Conférence",
            "Salles de Réunion",
            "Bibliothèque Juridique",
            "Espace Cafétéria",
            "Bureaux Administratifs",
            "Jardin Intérieur",
        ],
    },
    {
        id: "4",
        title: "Prison Locale",
        category: "Institutionnel",
        location: "Dakhla, Maroc",
        year: "2022",
        area: "8 500 m²",
        client: "DGAPR",
        duration: "30 mois",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Construction d'un établissement pénitentiaire moderne répondant aux normes internationales de sécurité et d'humanisation des conditions de détention.",
        challenge: "Assurer un haut niveau de sécurité tout en intégrant les espaces nécessaires à la réinsertion et à la formation des détenus.",
        solution: "Organisation spatiale rigoureuse séparant les flux, intégration d'ateliers de formation et d'espaces sportifs.",
        features: [
            "Systèmes de Sécurité Avancés",
            "Ateliers de Formation",
            "Centre Médical",
            "Terrains de Sport",
            "Cuisines Collectives",
            "Espaces Visiteurs",
        ],
    },
    {
        id: "5",
        title: "École Al-Hanane Privée",
        category: "Éducation",
        location: "Inzegane, Maroc",
        year: "2023",
        area: "2 800 m²",
        client: "Groupe Al-Hanane",
        duration: "12 mois",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Établissement scolaire privé offrant un cadre éducatif épanouissant pour le primaire et le secondaire.",
        challenge: "Optimiser l'espace pour accueillir différentes tranches d'âge en toute sécurité et convivialité.",
        solution: "Cours de récréation séparées, salles de classe lumineuses et colorées, laboratoires scientifiques modernes.",
        features: [
            "Salles de Classe Modulaires",
            "Laboratoires Scientifiques",
            "Terrain Omnisport",
            "Cantine Scolaire",
            "Salle Informatique",
            "Garderie",
        ],
    },
    {
        id: "6",
        title: "Clinique Atlas SIS",
        category: "Santé",
        location: "Inzegane, Maroc",
        year: "2021",
        area: "3 000 m²",
        client: "Groupe Atlas",
        duration: "20 mois",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516549655169-df83a0833860?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Clinique multidisciplinaire de référence offrant des plateaux techniques complets et des services hôteliers de confort.",
        challenge: "Combiner technicité médicale et confort hôtelier dans une structure compacte.",
        solution: "Organisation verticale des services de soins et utilisation de matériaux apaisants pour les espaces d'accueil.",
        features: [
            "Blocs Opératoires",
            "Service Maternité",
            "Réanimation",
            "Radiologie Numérique",
            "Suites VIP",
            "Urgences",
        ],
    },
    {
        id: "7",
        title: "Dania Land Parc",
        category: "Infrastructure",
        location: "Agadir, Maroc",
        year: "2023",
        area: "15 000 m²",
        client: "Dania Group",
        duration: "24 mois",
        image: "/images/company/dania-land.jpg",
        gallery: [
            "/images/company/dania-land.jpg",
            "/images/company/dania-land.jpg",
            "/images/company/dania-land.jpg",
        ],
        description: "Parc de loisirs et d'attractions majeur, offrant des espaces verts, manèges et zones de restauration pour les familles.",
        challenge: "Intégrer des attractions mécaniques d'envergure dans un environnement paysager harmonieux.",
        solution: "Zonage thématique du parc et aménagement paysager dense pour créer des atmosphères immersives.",
        features: [
            "Attractions Mécaniques",
            "Espaces Verts",
            "Zone Restauration",
            "Théâtre de Plein Air",
            "Parking Sécurisé",
            "Fontaines Interactives",
        ],
    },
    {
        id: "8",
        title: "L'Aérodrome",
        category: "Infrastructure",
        location: "Smara, Maroc",
        year: "2022",
        area: "12 000 m²",
        client: "ONDA",
        duration: "18 mois",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1483304528321-0674f0040030?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Modernisation et extension de l'aérodrome de Smara pour améliorer la connectivité de la région.",
        challenge: "Réaliser les travaux sans interrompre l'activité aéroportuaire existante.",
        solution: "Phasage rigoureux des travaux et respect strict des normes de sécurité aérienne.",
        features: [
            "Nouvelle Aérogare",
            "Extension de Piste",
            "Tour de Contrôle",
            "Hangar Technique",
            "Parking Avions",
            "Nouveaux Accès",
        ],
    },
    {
        id: "9",
        title: "Clinique & Annexes Hospitalier",
        category: "Santé",
        location: "Fès, Maroc",
        year: "2023",
        area: "5 500 m²",
        client: "Groupe Hospitalier",
        duration: "26 mois",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516574187841-693083f049e2?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Grand complexe hospitalier intégrant plusieurs spécialités et des annexes techniques pour une prise en charge complète.",
        challenge: "Gérer la complexité des flux et des réseaux techniques pour un établissement de cette envergure.",
        solution: "Conception en pôles spécialisés reliés par une galerie technique centrale.",
        features: [
            "Pôle Cardiologie",
            "Pôle Oncologie",
            "Laboratoire d'Analyses",
            "Pharmacie Hospitalière",
            "Héliport",
            "Logements de Fonction",
        ],
    },
    {
        id: "10",
        title: "Usine Parapharmaceutique",
        category: "Industriel",
        location: "Agadir, Maroc",
        year: "2022",
        area: "6 000 m²",
        client: "Laboratoire Pharma",
        duration: "16 mois",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Unité de production industrielle respectant les normes BPF (Bonnes Pratiques de Fabrication) pour produits cosmétiques et parapharmaceutiques.",
        challenge: "Assurer la stérilité et le contrôle de l'environnement de production.",
        solution: "Salles blanches classées, sas de décontamination et gestion stricte des flux d'air.",
        features: [
            "Salles Blanches",
            "Laboratoire de Contrôle Qualité",
            "Zone de Stockage",
            "Quais de Chargement",
            "Bureaux Administratifs",
            "Traitement des Déchets",
        ],
    },
    {
        id: "11",
        title: "Entrepôt Frigorifique",
        category: "Industriel",
        location: "Smara, Maroc",
        year: "2021",
        area: "4 500 m²",
        client: "Groupe Logistique",
        duration: "12 mois",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Plateforme logistique pour le stockage de denrées périssables, essentielle pour l'approvisionnement des régions du sud.",
        challenge: "Maintenir une chaîne du froid ininterrompue dans un environnement climatique exigeant.",
        solution: "Isolation thermique haute performance et systèmes de réfrigération à haut rendement énergétique.",
        features: [
            "Chambres Froides Positives",
            "Chambres Froides Négatives",
            "Quais Réfrigérés",
            "Gestion Informatisée des Stocks",
            "Groupe Électrogène de Secours",
            "Panneaux Solaires",
        ],
    },
    {
        id: "12",
        title: "Villa Privée",
        category: "Résidentiel",
        location: "Agadir, Maroc",
        year: "2023",
        area: "800 m²",
        client: "Particulier",
        duration: "14 mois",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
        ],
        description: "Résidence de prestige alliant architecture contemporaine marocaine et confort moderne.",
        challenge: "Adapter le design moderne aux spécificités climatiques locales et au style de vie familial.",
        solution: "Conception bioclimatique orientée vers l'extérieur avec piscine et jardins, préservant l'intimité.",
        features: [
            "Piscine à Débordement",
            "Jardin Paysager",
            "Hammam Traditionnel",
            "Suite Parentale",
            "Domotique",
            "Espace Réception",
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
