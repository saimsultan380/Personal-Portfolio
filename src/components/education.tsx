"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
    {
        degree: "Bachelor of Science in Computer Science",
        school: "Federal Urdu University of Arts, Sciences & Technology, Islamabad",
        period: "2019 - 2024",
        description: "Graduated with honors. Focused on software engineering, algorithms, and web technologies.",
    },
    {
        degree: "Full-Stack Web Development Bootcamp",
        school: "TS Media",
        period: "2019",
        description: "Intensive 6-month program covering modern web development stack and best practices.",
    },
];

const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Meta Front-End Developer",
    "MongoDB Certified Developer",
];

export function Education() {
    return (
        <section id="education" className="w-full py-12 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
                        <span className="text-primary/60">&lt;</span>Education<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        My academic background and continuous learning journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Education Timeline */}
                    <div className="lg:col-span-2 space-y-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 pb-8 border-l-2 border-border/50 last:pb-0"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                <div className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors">
                                    <div className="flex items-start gap-3 mb-3">
                                        <GraduationCap className="w-6 h-6 text-primary shrink-0 mt-1" />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                            <p className="text-primary font-medium">{edu.school}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                                    <p className="text-muted-foreground">{edu.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/50 border border-border/50 rounded-xl p-6 h-fit"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">Certifications</h3>
                        </div>
                        <ul className="space-y-3">
                            {certifications.map((cert, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-2 text-muted-foreground"
                                >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                    <span>{cert}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
