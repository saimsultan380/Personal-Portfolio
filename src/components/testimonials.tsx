"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO at TechStart",
        company: "TechStart Inc.",
        content: "Working with Saim was an absolute pleasure. His attention to detail and code quality exceeded our expectations. The project was delivered on time and within budget.",
        avatar: "SJ",
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "Digital Solutions",
        content: "Saim's exceptional work transformed our website performance. Our page load times decreased by 60% and conversions increased significantly. Highly recommended!",
        avatar: "MC",
    },
    {
        name: "Emily Rodriguez",
        role: "Founder",
        company: "StyleHub",
        content: "The e-commerce platform Saim built for us is fantastic. Clean code, beautiful UI, and seamless payment integration. He truly understands modern web development!",
        avatar: "ER",
    },
    {
        name: "David Park",
        role: "CTO",
        company: "InnovateLabs",
        content: "Saim Sultan demonstrated outstanding technical skills and great communication throughout the project. The full-stack solution was robust, scalable, and well-documented.",
        avatar: "DP",
    },
    {
        name: "Amina Khan",
        role: "Marketing Director",
        company: "GrowthHub",
        content: "Saim's expertise in SEO and performance optimization helped us rank higher in search results. Our organic traffic increased by 150% within three months!",
        avatar: "AK",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrent((prev) => {
            const next = prev + newDirection;
            if (next < 0) return testimonials.length - 1;
            if (next >= testimonials.length) return 0;
            return next;
        });
    };

    return (
        <section className="relative w-full py-12 md:py-24 px-4 md:px-6 bg-secondary/20">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
                        <span className="text-primary/60">&lt;</span>Client Testimonials<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        What my clients say about working with me
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-8 md:p-12">
                                        <Quote className="w-12 h-12 text-primary/20 mb-6" />
                                        <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                                            "{testimonials[current].content}"
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                                                <span className="text-lg font-bold text-primary">
                                                    {testimonials[current].avatar}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-lg">
                                                    {testimonials[current].name}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {testimonials[current].role} at {testimonials[current].company}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(-1)}
                            className="rounded-full"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > current ? 1 : -1);
                                        setCurrent(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all ${index === current
                                        ? "bg-primary w-8"
                                        : "bg-muted-foreground/30"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => paginate(1)}
                            className="rounded-full"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
