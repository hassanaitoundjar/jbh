'use client'

import { motion } from 'framer-motion';

export function LogoSection() {

    const logos = [
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 40 30 L 70 30 L 80 40 L 80 70 L 40 70 Z" fill="currentColor" />
                    <rect x="48" y="45" width="8" height="8" fill="white" />
                    <rect x="62" y="45" width="8" height="8" fill="white" />
                    <rect x="48" y="58" width="8" height="8" fill="white" />
                </svg>
            ),
            title: "COMPANY",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 50 70 L 50 40 L 70 30 L 70 50 L 80 50 L 80 70 Z" fill="currentColor" />
                    <rect x="54" y="48" width="6" height="8" fill="white" />
                    <rect x="68" y="55" width="6" height="8" fill="white" />
                </svg>
            ),
            title: "LOGONAME",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <circle cx="60" cy="45" r="20" fill="currentColor" />
                    <path d="M 45 65 L 45 80 L 75 80 L 75 65 Z" fill="currentColor" />
                    <rect x="52" y="68" width="7" height="12" fill="white" />
                    <rect x="61" y="68" width="7" height="12" fill="white" />
                    <circle cx="60" cy="45" r="8" fill="white" />
                </svg>
            ),
            title: "RealEstate",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 45 70 L 45 40 L 60 30 L 75 40 L 75 70 Z" fill="currentColor" />
                    <rect x="35" y="70" width="50" height="5" fill="currentColor" />
                    <rect x="52" y="48" width="6" height="8" fill="white" />
                    <rect x="62" y="48" width="6" height="8" fill="white" />
                    <rect x="52" y="58" width="6" height="8" fill="white" />
                </svg>
            ),
            title: "ARCHITECTURE",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 60 30 L 80 50 L 80 75 L 40 75 L 40 50 Z" fill="currentColor" />
                    <rect x="48" y="55" width="10" height="20" fill="white" />
                    <rect x="62" y="55" width="10" height="20" fill="white" />
                    <polygon points="60,30 40,50 80,50" fill="currentColor" opacity="0.7" />
                </svg>
            ),
            title: "COMPANY NAME",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 40 70 L 50 35 L 65 35 L 75 70 Z" fill="currentColor" />
                    <rect x="35" y="70" width="50" height="8" fill="currentColor" />
                    <rect x="52" y="45" width="8" height="10" fill="white" />
                </svg>
            ),
            title: "MODERN",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 35 70 L 48 30 L 60 30 L 60 50 L 72 30 L 85 30 L 72 70 Z" fill="currentColor" />
                    <rect x="50" y="40" width="6" height="8" fill="white" />
                </svg>
            ),
            title: "LOREMIPSUM",
        },
        {
            svg: (
                <svg viewBox="0 0 120 120" className="w-full h-full">
                    <path d="M 45 35 L 55 30 L 65 30 L 75 35 L 75 70 L 45 70 Z" fill="currentColor" />
                    <rect x="50" y="42" width="8" height="10" fill="white" />
                    <rect x="62" y="42" width="8" height="10" fill="white" />
                    <rect x="50" y="55" width="8" height="10" fill="white" />
                    <rect x="62" y="55" width="8" height="10" fill="white" />
                </svg>
            ),
            title: "CONSTRUCTION",
        },
    ];

    return (
        <section className="py-20 bg-background border-y border-neutral-100 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Approuvé par les leaders du secteur</p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-20 md:w-32 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 md:w-32 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex gap-16 md:gap-24 items-center flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer w-24 md:w-32 group/logo"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 text-foreground group-hover/logo:text-primary transition-colors duration-300">
                                {logo.svg}
                            </div>
                            <span className="text-xs font-bold text-foreground/80 tracking-wider">
                                {logo.title}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}