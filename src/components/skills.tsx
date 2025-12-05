"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techRows = [
    // Row 1 - Frontend
    [
        { name: "React", level: 98, desc: "Component Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", level: 95, desc: "Server Side Rendering", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", level: 90, desc: "Type Safety", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", level: 99, desc: "Utility First", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Three.js", level: 85, desc: "3D Experiences", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
        { name: "Framer", level: 92, desc: "Advanced Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg" },
    ],
    // Row 2 - Backend & Tools
    [
        { name: "Node.js", level: 90, desc: "Scalable Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", level: 88, desc: "Relational DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "GraphQL", level: 85, desc: "Efficient APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Docker", level: 85, desc: "Containerization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", level: 80, desc: "Cloud Infrastructure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Redis", level: 82, desc: "Caching Strategy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
    // Row 3 - Workflow & Others
    [
        { name: "Git", level: 95, desc: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: 95, desc: "Collaboration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", level: 98, desc: "Editor of Choice", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Vercel", level: 95, desc: "Deployment", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
        { name: "Supabase", level: 90, desc: "Backend as a Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MongoDB", level: 85, desc: "NoSQL Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
];

function MarqueeRow({ items, reverse = false, speed = 20 }: { items: typeof techRows[0]; reverse?: boolean; speed?: number }) {
    const rowRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState<string | null>(null);

    useGSAP(() => {
        const inner = innerRef.current;
        if (!inner) return;

        const totalWidth = inner.scrollWidth / 2;

        // Initial set
        gsap.set(inner, { x: reverse ? -totalWidth : 0 });

        const tl = gsap.to(inner, {
            x: reverse ? 0 : -totalWidth,
            duration: speed,
            ease: "none",
            repeat: -1,
        });

        // Pause on hover
        inner.addEventListener("mouseenter", () => tl.timeScale(0.2));
        inner.addEventListener("mouseleave", () => tl.timeScale(1));

        return () => {
            tl.kill();
        };
    }, { scope: rowRef });

    const duplicatedItems = [...items, ...items, ...items]; // Triple for smoother loop

    return (
        <div ref={rowRef} className="relative overflow-visible py-12 w-full">
            <div
                ref={innerRef}
                className="flex gap-8 items-center w-max px-4"
            >
                {duplicatedItems.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="relative group perspective-1000"
                        onMouseEnter={() => setIsHovered(`${item.name}-${index}`)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <AnimatePresence>
                            {isHovered === `${item.name}-${index}` && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8, rotateX: 20 }}
                                    animate={{ opacity: 1, y: -130, scale: 1, rotateX: 0 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute left-1/2 -translate-x-1/2 w-64 z-50 pointer-events-none"
                                >
                                    <div className="bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-zinc-200 dark:border-primary/50 rounded-2xl p-4 shadow-xl dark:shadow-[0_0_30px_rgba(var(--primary),0.3)] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-lg text-zinc-900 dark:text-white">{item.name}</h4>
                                                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>

                                            {/* Proficiency Bar */}
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-[10px] uppercase tracking-wider text-primary/80">
                                                    <span>Proficiency</span>
                                                    <span>{item.level}%</span>
                                                </div>
                                                <div className="h-1.5 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.level}%` }}
                                                        transition={{ duration: 0.5, delay: 0.1 }}
                                                        className="h-full bg-gradient-to-r from-primary to-primary/60"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Connecting Line */}
                                        <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 dark:bg-black/80 border-r border-b border-zinc-200 dark:border-primary/50 rotate-45" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Main Card */}
                        <div className={`
              w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white dark:bg-card/10 backdrop-blur-sm border border-zinc-200 dark:border-white/5 
              flex flex-col items-center justify-center gap-2 
              transition-all duration-500 cursor-pointer
              hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]
              ${isHovered === `${item.name}-${index}` ? 'scale-110 -translate-y-2' : 'scale-100 grayscale hover:grayscale-0'}
            `}>
                            <div className="w-10 h-10 md:w-12 md:h-12 relative">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-full h-full object-contain drop-shadow-lg"
                                />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                                {item.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Skills() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".skill-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="skills"
            className="relative w-full py-24 md:py-32 overflow-hidden bg-background"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0%,transparent_70%)]" />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="skill-header text-center mb-10 px-4">
                    <span className="text-primary font-mono tracking-widest uppercase text-sm flex items-center justify-center gap-2 mb-4">
                        <Zap className="w-4 h-4 animate-pulse" />
                        Technologies
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tighter">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">Stack</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Hover over the technologies to reveal detailed stats.
                    </p>
                </div>

                {/* Marquee Container with Gradient Masks */}
                <div className="relative">
                    {/* Left Gradient Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />

                    {/* Right Gradient Fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

                    <div className="flex flex-col gap-4">
                        <MarqueeRow items={techRows[0]} speed={40} />
                        <MarqueeRow items={techRows[1]} reverse speed={40} />
                        <MarqueeRow items={techRows[2]} speed={40} />
                    </div>
                </div>
            </div>
        </section>
    );
}
