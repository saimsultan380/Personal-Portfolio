"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Code, Globe, Layout, LineChart, ShoppingBag, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Web Development",
        shortDesc: "Custom websites and web applications built with modern frameworks",
        icon: Globe,
        features: [
            "Responsive design for all devices",
            "SEO optimization",
            "Fast loading times",
            "Modern UI/UX",
            "Cross-browser compatibility",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Full-Stack Solutions",
        shortDesc: "End-to-end development with robust backends and databases",
        icon: Code,
        features: [
            "RESTful & GraphQL APIs",
            "Database design & optimization",
            "Authentication & authorization",
            "Cloud deployment (AWS, Vercel)",
            "Scalable architecture",
        ],
        technologies: ["Node.js", "PostgreSQL", "MongoDB", "AWS"],
    },
    {
        title: "E-Commerce",
        shortDesc: "High-converting online stores with payment integrations",
        icon: ShoppingBag,
        features: [
            "Product catalog management",
            "Secure payment processing",
            "Inventory tracking",
            "Order management system",
            "Analytics & reporting",
        ],
        technologies: ["Shopify", "Stripe", "WooCommerce"],
    },
    {
        title: "CMS Development",
        shortDesc: "Content management systems for easy content updates",
        icon: Layout,
        features: [
            "Custom WordPress themes",
            "Headless CMS integration",
            "Content modeling",
            "Multi-language support",
            "User role management",
        ],
        technologies: ["WordPress", "Sanity", "Contentful"],
    },
    {
        title: "Performance & SEO",
        shortDesc: "Optimization for speed, search rankings, and user experience",
        icon: LineChart,
        features: [
            "Core Web Vitals optimization",
            "Technical SEO audit",
            "Schema markup implementation",
            "Performance monitoring",
            "Analytics integration",
        ],
        technologies: ["Lighthouse", "Google Analytics", "Search Console"],
    },
];

export function Services() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="services" className="relative w-full py-12 md:py-24 px-4 md:px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        <span className="text-primary/60">&lt;</span>Services<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div
                                className={`bg-card/50 backdrop-blur-sm border transition-all duration-300 rounded-2xl overflow-hidden ${expandedIndex === index
                                    ? "border-primary/50 shadow-lg shadow-primary/10"
                                    : "border-border/50 hover:border-primary/30"
                                    }`}
                            >
                                {/* Header - Always Visible */}
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-muted-foreground">
                                                {service.shortDesc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0">
                                        {expandedIndex === index ? (
                                            <Minus className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                        )}
                                    </div>
                                </button>

                                {/* Expanded Content */}
                                <AnimatePresence>
                                    {expandedIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-4 border-t border-border/50">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    {/* Features */}
                                                    <div>
                                                        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                            <Check className="w-5 h-5 text-primary" />
                                                            What's Included
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {service.features.map((feature, idx) => (
                                                                <motion.li
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                    className="flex items-start gap-2 text-muted-foreground"
                                                                >
                                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                                                    <span>{feature}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies & CTA */}
                                                    <div className="space-y-6">
                                                        <div>
                                                            <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {service.technologies.map((tech, idx) => (
                                                                    <span
                                                                        key={idx}
                                                                        className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                                                                    >
                                                                        {tech}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <Button size="lg" className="w-full md:w-auto">
                                                                Get Started
                                                                <ArrowUpRight className="w-4 h-4 ml-2" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
