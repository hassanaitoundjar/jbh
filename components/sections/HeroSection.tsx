'use client';
import React, { useState, useEffect } from 'react';
import { Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { url } from 'inspector';

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop",
            alt: "Ingénierie Moderne",
            label: "Ingénierie",
            title: ["JBH", "ENGINEERING", "SERVICES"],
            subtitle: "CONSTRUIRE L'AVENIR AVEC PRÉCISION",
            buttonText: "VOIR NOS PROJETS"
        },
        {
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
            alt: "Architecture Innovante",
            label: "Innovation",
            title: ["DESIGN", "MODERNE", "& CRÉATIF"],
            subtitle: "L'EXCELLENCE DANS CHAQUE DÉTAIL",
            buttonText: "EN SAVOIR PLUS"
        },
        {
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop",
            alt: "Solutions Durables",
            label: "Architecture",
            title: ["SOLUTIONS", "DURABLES", "& AVENIR"],
            subtitle: "VOTRE VISION, NOTRE EXPERTISE",
            buttonText: "COMMENCER"
        }
    ];

    // Auto slide every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-1 pointer-events-none">
                <div className="absolute inset-0 z-10" />
                <img
                    src="/bg/bg-iconbox3.jpg"
                    alt="Technical Floor Plan Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>


            {/* Social Media Sidebar - Fixed Left */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-8 text-foreground/60"
            >
                <div className="h-24 w-px bg-border mx-auto" />
                <a href="#" className="hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary hover:scale-110 transition-all duration-300" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                </a>
                <div className="h-24 w-px bg-border mx-auto" />
            </motion.div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 h-screen items-center">

                {/* Text Content - Left Side */}
                <div className="relative z-20 pt-20 lg:pt-0 pl-12 lg:pl-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-sm font-semibold tracking-wider mb-6 uppercase"
                            >
                                {slides[currentSlide].label}
                            </motion.span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-foreground mb-8 leading-tight">
                                {slides[currentSlide].title.map((line, i) => (
                                    <span key={i} className="block">
                                        {i === 1 ? <span className="text-primary italic">{line}</span> : line}
                                    </span>
                                ))}
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-muted-foreground mb-10 max-w-lg font-light tracking-wide border-l-2 border-primary pl-6"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-foreground text-background px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                {slides[currentSlide].buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Image Slider - Right Side */}
                <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full lg:h-screen lg:rounded-bl-[80px] overflow-hidden z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.05, opacity: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].alt}
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-background/80 via-transparent to-black/20 lg:from-transparent" />
                            <div className="absolute inset-0 bg-black/10" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-10 left-10 lg:left-20 flex items-center gap-4 z-30">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:w-8 hover:bg-white/60'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Element */}
            <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        </section>
    );
}

