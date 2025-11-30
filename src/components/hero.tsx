"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 md:pt-0 md:pb-0">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

                <div className="absolute inset-0 opacity-30">
                    <motion.div
                        animate={{
                            background: [
                                "radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb, 147, 51, 234), 0.15) 0%, transparent 50%)",
                                "radial-gradient(circle at 80% 50%, rgba(var(--primary-rgb, 147, 51, 234), 0.15) 0%, transparent 50%)",
                                "radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb, 147, 51, 234), 0.15) 0%, transparent 50%)",
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    />
                </div>

                <div className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.line
                        x1="0%"
                        y1="20%"
                        x2="100%"
                        y2="20%"
                        stroke="url(#line-gradient)"
                        strokeWidth="1"
                        className="text-primary"
                        animate={{
                            y1: ["20%", "80%", "20%"],
                            y2: ["20%", "80%", "20%"],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.line
                        x1="30%"
                        y1="0%"
                        x2="30%"
                        y2="100%"
                        stroke="url(#line-gradient)"
                        strokeWidth="1"
                        className="text-primary"
                        animate={{
                            x1: ["30%", "70%", "30%"],
                            x2: ["30%", "70%", "30%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2,
                        }}
                    />
                </svg>
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4 px-4 py-2 rounded-lg bg-card/80 border border-primary/30 backdrop-blur-sm"
                >
                    <span className="text-sm font-mono text-primary">
                        <span className="text-primary/60">$ </span>whoami <span className="text-muted-foreground">→</span> Full-Stack Developer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6"
                >
                    WordPress & <span className="text-primary">Frontend Developer</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Building High-Performance Web Applications
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Expert WordPress developer and frontend specialist in Islamabad, Pakistan. I create custom WordPress themes, React applications, and Next.js solutions with a focus on performance, aesthetics, and user experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button asChild size="lg" className="h-12 px-8 text-base">
                        <Link href="#contact">
                            Hire Me <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 px-8 text-base"
                    >
                        <Link href="/Saim's CV.pdf" target="_blank">
                            Download CV <Download className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
