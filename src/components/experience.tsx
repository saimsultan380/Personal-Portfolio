"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        title: "Senior Full-Stack Developer",
        company: "TS Media",
        period: "2022 - Present",
        description: "Leading development of enterprise-scale web applications using Next.js, React, and Node.js. Mentoring junior developers and implementing best practices.",
        achievements: [
            "Reduced page load time by 40% through optimization",
            "Led team of 5 developers on major product launch",
            "Implemented CI/CD pipeline reducing deployment time by 60%",
        ],
    },
    {
        title: "Full-Stack Developer",
        company: "Digital Solutions Co.",
        period: "2020 - 2022",
        description: "Developed and maintained multiple client projects including e-commerce platforms and SaaS applications.",
        achievements: [
            "Built 15+ production-ready web applications",
            "Improved code quality through test-driven development",
            "Collaborated with design team on UI/UX improvements",
        ],
    },
    {
        title: "Frontend Developer",
        company: "StartupHub",
        period: "2019 - 2020",
        description: "Focused on creating responsive and accessible user interfaces using React and modern CSS frameworks.",
        achievements: [
            "Developed reusable component library",
            "Achieved 95+ Lighthouse scores on all projects",
            "Contributed to open-source projects",
        ],
    },
];

export function Experience() {
    return (
        <section id="experience" className="w-full py-12 md:py-24 px-4 md:px-6 bg-secondary/20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-4">
                        <span className="text-primary/60">&lt;</span>Experience<span className="text-primary/60">/&gt;</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        My professional journey and key accomplishments
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-card/50 border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Briefcase className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                                            <p className="text-lg text-primary font-medium">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm font-medium">{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-foreground/80">Key Achievements:</p>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
