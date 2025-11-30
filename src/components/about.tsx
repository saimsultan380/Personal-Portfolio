"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
    { value: "98%", label: "Success Rate" },
];

const values = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintainable, scalable, and well-documented code",
    },
    {
        icon: Palette,
        title: "UI/UX Focus",
        description: "Creating intuitive and beautiful user experiences",
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimizing for speed and efficiency in every project",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working seamlessly with teams and stakeholders",
    },
];

export function About() {
    return (
        <section id="about" className="w-full py-10 md:py-16 px-4 md:px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6">
                        <span className="text-primary/60">&lt;</span>About Me<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <div className="max-w-3xl">
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            I'm a passionate WordPress developer and frontend specialist with 5+ years of experience
                            turning complex problems into simple, beautiful, and intuitive solutions. Specializing in
                            custom WordPress theme development, React, Next.js, and TypeScript, I help businesses build
                            digital products that users love.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            As a full-stack developer based in Islamabad, Pakistan, I combine technical expertise in
                            modern web technologies with a deep understanding of UI/UX principles. When I'm not coding,
                            you'll find me exploring new frameworks, contributing to open source, or sharing knowledge
                            through technical writing and mentoring.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-xl bg-card/50 border border-border/50"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                <value.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
