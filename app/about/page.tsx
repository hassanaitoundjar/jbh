"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Building2, Target, CheckCircle, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";


const stats = [
    { value: "25+", label: "Années d'Expérience" },
    { value: "500+", label: "Projets Réalisés" },
    { value: "150+", label: "Récompenses Gagnées" },
    { value: "50+", label: "Équipe d'Experts" },
];

const values = [
    {
        icon: Target,
        title: "Précision",
        description: "Chaque détail compte. Nous livrons des projets avec une attention méticuleuse à la précision et à la qualité.",
    },
    {
        icon: Building2,
        title: "Innovation",
        description: "Repousser les limites avec des solutions de design d'avant-garde et des pratiques de construction durables.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Travailler étroitement avec les clients, les communautés et les partenaires pour donner vie aux visions.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Viser les standards les plus élevés dans chaque projet que nous entreprenons.",
    },
];

const team = [
    {
        name: "James Harrison",
        role: "Fondateur & PDG",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Sarah Mitchell",
        role: "Architecte Principal",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Michael Chen",
        role: "Ingénieur Structure",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    },
    {
        name: "Emily Rodriguez",
        role: "Designer d'Intérieur",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
];

const milestones = [
    { year: "1998", title: "Fondation de l'Entreprise", description: "JBH Engineering a été créé avec la vision de transformer le design architectural." },
    { year: "2005", title: "Premier Projet Majeur", description: "Achèvement de l'emblématique Tour Skyline, notre premier bâtiment commercial phare." },
    { year: "2012", title: "Expansion Internationale", description: "Ouverture de bureaux à Londres et Dubaï, élargissant notre empreinte mondiale." },
    { year: "2018", title: "Prix de la Durabilité", description: "Reconnu pour avoir été pionnier dans les méthodes de construction écologiques." },
    { year: "2023", title: "500+ Projets", description: "Atteinte du cap des 500 projets réalisés avec succès dans le monde." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-32 bg-secondary overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary/95 z-10" />
                    <img
                        src="/bg/bg.jpeg"
                        alt="Blueprint Background"
                        className="w-full h-full object-cover opacity-20 invert mix-blend-overlay"
                    />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4" />

                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Link href="/" className="text-gray-400 hover:text-primary transition-colors">Accueil</Link>
                            <span className="text-gray-600">/</span>
                            <span className="text-white">À Propos</span>
                        </div>

                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Notre Histoire
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Bâtir des Rêves <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                Depuis 1998
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                            Depuis plus de 25 ans, JBH Engineering est à l'avant-garde de l'innovation architecturale,
                            livrant des designs exceptionnels qui résistent à l'épreuve du temps.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Banner */}
            <section className="py-8 -mt-16 relative z-30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white dark:bg-white/5 rounded-3xl shadow-2xl shadow-black/5 border border-neutral-100 dark:border-white/10 p-8 md:p-10"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                                        {stat.value}
                                    </div>
                                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
                    <img src="/bg/bg.jpeg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden aspect-4/5">
                                <Image
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                                    alt="Modern Architecture"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-secondary/60 via-transparent to-transparent" />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/30 max-w-[280px]"
                            >
                                <Quote className="w-10 h-10 text-white/30 mb-4" />
                                <p className="text-white font-medium italic mb-4">
                                    "L'architecture est le jeu savant, correct et magnifique des volumes assemblés sous la lumière."
                                </p>
                                <p className="text-white/60 text-sm">— Le Corbusier</p>
                            </motion.div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                                Qui Sommes-Nous
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                                Créer des Espaces <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                    Qui Inspirent
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                JBH Engineering est un cabinet d'architecture et d'ingénierie complet dédié à la création
                                d'espaces innovants, durables et esthétiquement remarquables. Notre équipe pluridisciplinaire
                                réunit des expertises en architecture, ingénierie structurelle, design d'intérieur et gestion de projet.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Du concept à la réalisation, nous travaillons en étroite collaboration avec nos clients pour comprendre leur vision
                                et la transformer en réalité. Notre engagement envers l'excellence nous a valu une reconnaissance
                                dans l'industrie et la confiance de clients du monde entier.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {["Design Durable", "Visualisation 3D", "Gestion de Projet", "Planification Intérieure"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span className="text-foreground font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="rounded-full px-8 font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300">
                                En Savoir Plus <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary/95 z-10" />
                    <img
                        src="/bg/bg.jpeg"
                        alt="Blueprint Background"
                        className="w-full h-full object-cover opacity-20 invert mix-blend-overlay"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Nos Valeurs Fondamentales
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                            Les Principes Qui <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                Guident Notre Travail
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
                    <img src="/bg/bg.jpeg" alt="" className="w-full h-full object-cover" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Notre Parcours
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                            Les Jalons Qui <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                Définissent Notre Héritage
                            </span>
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex items-center gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
                            >
                                <div className="flex-1">
                                    <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </div>
                                <div className="w-4 h-4 rounded-full bg-primary shrink-0 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                                </div>
                                <div className="flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-neutral-50 dark:bg-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
                    >
                        <div className="max-w-2xl">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                                Rencontrez l'Équipe
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                                Les Experts Derrière <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                    Chaque Succès
                                </span>
                            </h2>
                        </div>

                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group cursor-pointer"
                            >
                                <div className="relative rounded-3xl overflow-hidden aspect-3/4 mb-6">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-medium text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-secondary/95 z-10" />
                    <img
                        src="/bg/bg.jpeg"
                        alt="Blueprint Background"
                        className="w-full h-full object-cover opacity-20 invert mix-blend-overlay"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Démarrer Votre Projet
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
                            Prêt à Bâtir <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                                Votre Vision ?
                            </span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                            Discutons de la manière dont nous pouvons donner vie à vos rêves architecturaux.
                            Contactez-nous dès aujourd'hui pour une consultation gratuite.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="rounded-full px-10 h-14 font-bold tracking-wide shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
                                <Link href="/contact">
                                    Commencer <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                            <Button variant="outline" className="rounded-full px-10 h-14 border-white/20 text-black hover:bg-white hover:text-secondary transition-all duration-300">
                                Voir les Projets
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
