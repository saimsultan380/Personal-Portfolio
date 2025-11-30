"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const projects = [
    {
        title: "Thriveclix",
        description: "Full-featured online store with cart, checkout, and admin dashboard",
        tags: ["Next.js", "TypeScript", "Stripe"],
        gradient: "from-purple-500/20 to-indigo-500/20",
        liveUrl: "https://thriveclix.com/",
        github: "https://github.com",
    },
    {
        title: "Mr Web Sol",
        description: "Professional digital agency website offering comprehensive web solutions",
        tags: ["React", "Next.js", "Tailwind CSS"],
        gradient: "from-blue-500/20 to-cyan-500/20",
        liveUrl: "https://mrwebsol.com/",
        github: "https://github.com",
    },
    {
        title: "Society FC",
        description: "Dynamic sports club website built with WordPress",
        tags: ["WordPress", "PHP", "Custom Theme"],
        gradient: "from-pink-500/20 to-orange-500/20",
        liveUrl: "https://societyfc.com/",
        github: "https://github.com",
    },
];

// Helper to get screenshot URL from Microlink API
const getScreenshotUrl = (url: string) => {
    return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
};

export function Projects() {
    return (
        <section id="projects" className="relative w-full py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
                        <span className="text-primary/60">&lt;</span>Featured Work<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Recent projects showcasing my technical expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <Card className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                                {/* Auto-Generated Screenshot Container */}
                                <div className="relative w-full h-48 overflow-hidden bg-muted/50 border-b border-border/50">
                                    <Image
                                        src={getScreenshotUrl(project.liveUrl)}
                                        alt={`${project.title} screenshot`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        priority={index === 0}
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                </div>

                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />

                                <CardContent className="relative p-6 flex flex-col flex-1">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-6 text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 mt-auto">
                                        <Link href={project.liveUrl} target="_blank" className="flex-1">
                                            <Button variant="outline" size="sm" className="w-full">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        </Link>
                                        <Link href={project.github} target="_blank" className="flex-1">
                                            <Button variant="ghost" size="sm" className="w-full">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
