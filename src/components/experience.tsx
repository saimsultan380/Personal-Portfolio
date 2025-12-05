"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const prevActiveIdRef = useRef<string>(activeId);

  useGSAP(
    () => {
      gsap.fromTo(
        ".exp-menu-item",
        {
          x: -20,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  // Animate content change
  useEffect(() => {
    if (prevActiveIdRef.current !== activeId && contentRef.current) {
      const tl = gsap.timeline();

      tl.to(contentRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      })
        .set(contentRef.current, {
          y: 10,
        })
        .to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });

      prevActiveIdRef.current = activeId;
    }
  }, [activeId]);

  const activeExp =
    experiences.find((e) => e.id === activeId) || experiences[0];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="w-full py-24 md:py-32 bg-background relative"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter mb-6">
            Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            My professional journey across different roles and companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-24">
          {/* Sidebar Menu */}
          <div className="md:col-span-4 flex flex-col gap-3">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={cn(
                  "exp-menu-item text-left px-6 py-5 rounded-xl transition-all duration-300 border group relative overflow-hidden",
                  activeId === exp.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 border-primary"
                    : "bg-card hover:bg-secondary/50 border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <div className="relative z-10 flex justify-between items-center">
                  <span className="text-base md:text-lg font-bold tracking-tight">
                    {exp.company}
                  </span>
                  {activeId === exp.id && (
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div ref={contentRef} className="md:col-span-8 min-h-[400px]">
            <div key={activeExp.id}>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 gap-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                  {activeExp.role}
                </h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {activeExp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> {activeExp.location}
                  </span>
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
                {activeExp.description}
              </p>

              <div className="space-y-6 mb-8">
                <h4 className="text-xs md:text-sm font-mono uppercase tracking-widest text-primary">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {activeExp.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base text-foreground/90 leading-relaxed"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-8 border-t border-border/40">
                {activeExp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-secondary/30 text-xs md:text-sm font-medium text-muted-foreground border border-border/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
