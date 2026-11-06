"use client";

import { useState, useRef } from "react";
import { Calendar, MapPin, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "ts-media",
    company: "TS Media",
    role: "Senior Full-Stack Developer",
    period: "2022 - Present",
    location: "Islamabad",
    description:
      "Spearheading the development of enterprise-level web solutions. I bridge the gap between complex backend logic and intuitive frontend design, leading a team of 5 developers.",
    stack: ["Next.js", "Node.js", "AWS", "Docker"],
    achievements: [
      "Architected a microservices system handling 50k+ daily users",
      "Reduced cloud infrastructure costs by 35% via optimization",
      "Implemented a unified design system used across 4 products",
    ],
  },
  {
    id: "digital-solutions",
    company: "Digital Solutions",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    location: "Remote",
    description:
      "Delivered high-performance e-commerce and SaaS platforms for international clients. Focused on scalability, payment integrations, and conversion optimization.",
    stack: ["React", "PostgreSQL", "Stripe", "Redis"],
    achievements: [
      "Launched 10+ custom e-commerce stores with Shopify/WooCommerce",
      "Optimized database queries reducing latency by 60%",
      "Integrated automated testing, increasing code reliability",
    ],
  },
  {
    id: "startup-hub",
    company: "StartupHub",
    role: "Frontend Developer",
    period: "2019 - 2020",
    location: "Islamabad",
    description:
      "Crafted pixel-perfect user interfaces for early-stage startups. Specialized in translating Figma designs into responsive, accessible code.",
    stack: ["React", "GSAP", "Figma", "Sass"],
    achievements: [
      "Achieved consistent 98/100 Lighthouse performance scores",
      "Developed a component library reducing dev time by 40%",
      "Mentored 2 interns in modern frontend practices",
    ],
  },
];

export function Experience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".exp-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".exp-timeline", {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef }
  );

  const activeExp = experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="w-full py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="exp-header mb-16 md:mb-24">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
            Career Path
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter mb-6">
            Professional <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A timeline of my professional journey, building scalable solutions and leading technical teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {/* Timeline Navigation */}
          <div className="exp-timeline md:col-span-4 lg:col-span-3 flex md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 scrollbar-hide">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[240px] md:min-w-0 border border-transparent",
                  activeId === exp.id
                    ? "bg-primary/5 border-primary/10"
                    : "hover:bg-secondary/50 hover:border-border/50"
                )}
              >
                {/* Indicator Line/Dot */}
                <div className={cn(
                  "w-1 h-12 rounded-full transition-all duration-300",
                  activeId === exp.id
                    ? "bg-gradient-to-b from-primary to-primary/60 shadow-[0_0_10px_color-mix(in_oklch,var(--primary)_50%,transparent)]"
                    : "bg-border/50 group-hover:bg-primary/30"
                )} />

                <div>
                  <h3 className={cn(
                    "font-bold text-base transition-colors",
                    activeId === exp.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {exp.company}
                  </h3>
                  <p className="text-xs text-muted-foreground/80 font-mono mt-1">
                    {exp.period}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:col-span-8 lg:col-span-9 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                <div className="bg-card/30 backdrop-blur-md border border-border/50 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/5 relative overflow-hidden group">
                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                          {activeExp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium text-lg">
                          <Briefcase className="w-5 h-5" />
                          {activeExp.company}
                        </div>
                      </div>

                      <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground font-mono bg-secondary/30 px-4 py-2 rounded-lg border border-border/50">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" /> {activeExp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" /> {activeExp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                      {activeExp.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {activeExp.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeExp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium text-foreground border border-border/50 hover:border-primary/50 transition-colors cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
