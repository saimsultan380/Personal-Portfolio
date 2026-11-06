"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const monochromeIcons = new Set(["Next.js", "Three.js", "Framer", "GitHub", "Vercel"]);

const techRows = [
    // Row 1 - Frontend
    [
        { name: "React", level: 98, desc: "Component Architecture", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", level: 95, desc: "Server Side Rendering", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", level: 90, desc: "Type Safety", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind", level: 99, desc: "Utility First", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Three.js", level: 85, desc: "3D Experiences", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
        { name: "Framer", level: 92, desc: "Advanced Motion", icon: "/tech/framer.svg" },
    ],
    // Row 2 - Backend & Tools
    [
        { name: "Node.js", level: 90, desc: "Scalable Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", level: 88, desc: "Relational DB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "GraphQL", level: 85, desc: "Efficient APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "Docker", level: 85, desc: "Containerization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", level: 80, desc: "Cloud Infrastructure", icon: "/tech/aws.svg" },
        { name: "Redis", level: 82, desc: "Caching Strategy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
    // Row 3 - Workflow & Others
    [
        { name: "Git", level: 95, desc: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", level: 95, desc: "Collaboration", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "VS Code", level: 98, desc: "Editor of Choice", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Vercel", level: 95, desc: "Deployment", icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
        { name: "Supabase", level: 90, desc: "Backend as a Service", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
        { name: "MongoDB", level: 85, desc: "NoSQL Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
];

function TechCard({
    item,
    isHovered,
    onEnter,
    onLeave,
}: {
    item: (typeof techRows)[0][number];
    isHovered: boolean;
    onEnter: () => void;
    onLeave: () => void;
}) {
    return (
        <div
            className="relative group shrink-0"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
        >
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8, rotateX: 20 }}
                        animate={{ opacity: 1, y: -130, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute left-1/2 -translate-x-1/2 w-64 z-50 pointer-events-none"
                    >
                        <div className="bg-popover/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-xl shadow-zinc-200/70 dark:shadow-[0_0_30px_rgba(59,130,246,0.25)] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-bold text-lg text-foreground">{item.name}</h4>
                                    <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                                </div>
                                <p className="text-xs text-muted-foreground mb-3">{item.desc}</p>
                                <div className="space-y-1">
                                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-primary">
                                        <span>Proficiency</span>
                                        <span>{item.level}%</span>
                                    </div>
                                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.level}%` }}
                                            transition={{ duration: 0.5, delay: 0.1 }}
                                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-popover border-r border-b border-border rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={`
          w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-card/80 dark:bg-card/10 backdrop-blur-sm border border-border/70 dark:border-white/10
          flex flex-col items-center justify-center gap-2 px-2
          transition-all duration-500 cursor-pointer
          hover:bg-primary/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
          ${isHovered ? "scale-110 -translate-y-2 border-primary/50 bg-primary/5" : "scale-100"}
        `}
            >
                <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <img
                        src={item.icon}
                        alt=""
                        className={`w-full h-full object-contain ${monochromeIcons.has(item.name) ? "dark:invert" : ""}`}
                        draggable={false}
                    />
                </div>
                <span
                    className={`text-[11px] md:text-sm font-medium truncate max-w-full transition-colors ${
                        isHovered ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                >
                    {item.name}
                </span>
            </div>
        </div>
    );
}

function MarqueeRow({
    items,
    reverse = false,
    pixelsPerSecond = 45,
}: {
    items: (typeof techRows)[0];
    reverse?: boolean;
    pixelsPerSecond?: number;
}) {
    const rowRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const setRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState<string | null>(null);

    useGSAP(
        () => {
            const track = trackRef.current;
            const set = setRef.current;
            if (!track || !set) return;

            let tween: gsap.core.Tween | null = null;

            const start = () => {
                const distance = set.offsetWidth;
                if (!distance) return;

                tween?.kill();
                gsap.set(track, { x: reverse ? -distance : 0 });
                tween = gsap.to(track, {
                    x: reverse ? 0 : -distance,
                    duration: distance / pixelsPerSecond,
                    ease: "none",
                    repeat: -1,
                });
            };

            start();

            const images = Array.from(track.querySelectorAll("img"));
            const waitForImages = Promise.all(
                images.map(
                    (img) =>
                        img.complete
                            ? Promise.resolve()
                            : new Promise<void>((resolve) => {
                                  img.addEventListener("load", () => resolve(), { once: true });
                                  img.addEventListener("error", () => resolve(), { once: true });
                              })
                )
            );

            waitForImages.then(() => {
                requestAnimationFrame(start);
            });

            const onResize = () => start();
            window.addEventListener("resize", onResize);

            const slow = () => tween?.timeScale(0.25);
            const restore = () => tween?.timeScale(1);
            track.addEventListener("mouseenter", slow);
            track.addEventListener("mouseleave", restore);

            return () => {
                window.removeEventListener("resize", onResize);
                track.removeEventListener("mouseenter", slow);
                track.removeEventListener("mouseleave", restore);
                tween?.kill();
            };
        },
        { scope: rowRef, dependencies: [reverse, pixelsPerSecond, items] }
    );

    return (
        <div ref={rowRef} className="relative overflow-x-clip overflow-y-visible py-12 w-full">
            <div ref={trackRef} className="flex w-max will-change-transform">
                <div ref={setRef} className="flex items-center gap-8 pr-8">
                    {items.map((item, index) => {
                        const cardKey = `${item.name}-a-${index}`;
                        return (
                            <TechCard
                                key={cardKey}
                                item={item}
                                isHovered={isHovered === cardKey}
                                onEnter={() => setIsHovered(cardKey)}
                                onLeave={() => setIsHovered(null)}
                            />
                        );
                    })}
                </div>
                <div className="flex items-center gap-8 pr-8" aria-hidden="true">
                    {items.map((item, index) => {
                        const cardKey = `${item.name}-b-${index}`;
                        return (
                            <TechCard
                                key={cardKey}
                                item={item}
                                isHovered={isHovered === cardKey}
                                onEnter={() => setIsHovered(cardKey)}
                                onLeave={() => setIsHovered(null)}
                            />
                        );
                    })}
                </div>
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto relative z-10 px-4">
                <div className="skill-header text-center mb-10">
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
            </div>

            <div className="relative z-10 flex flex-col gap-4">
                <MarqueeRow items={techRows[0]} pixelsPerSecond={42} />
                <MarqueeRow items={techRows[1]} reverse pixelsPerSecond={38} />
                <MarqueeRow items={techRows[2]} pixelsPerSecond={40} />
            </div>
        </section>
    );
}
