"use client";

import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Thriveclix",
    description:
      "A high-performance e-commerce solution designed for scale. Features include a custom cart engine, real-time inventory management, and a seamless checkout experience powered by Stripe.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "https://thriveclix.com/",
    github: "https://github.com",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fthriveclix.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    color: "bg-primary",
  },
  {
    title: "Mr Web Sol",
    description:
      "A corporate digital agency portfolio with a focus on motion design and accessibility. Built to showcase services with interactive case studies and a dynamic blog system.",
    tags: ["React", "Next.js", "Framer Motion", "CMS"],
    liveUrl: "https://mrwebsol.com/",
    github: "https://github.com",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fmrwebsol.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    color: "bg-primary",
  },
  {
    title: "Society FC",
    description:
      "A dynamic community platform for sports enthusiasts. Includes member management, event scheduling, and live score updates, built on a custom WordPress architecture.",
    tags: ["WordPress", "PHP", "Custom Theme", "MySQL"],
    liveUrl: "https://societyfc.com/",
    github: "https://github.com",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fsocietyfc.com%2F&screenshot=true&meta=false&embed=screenshot.url",
    color: "bg-primary",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".project-panel");

      panels.forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "bottom top",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="w-full bg-background relative"
    >
      {/* Section Header */}
      <div className="py-24 px-4 md:px-6 container max-w-7xl mx-auto">
        <div className="mb-4 flex items-center gap-2 text-primary">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-mono uppercase tracking-widest">Portfolio</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-6">
          Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">Works</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of projects that define my approach to digital product design and engineering.
        </p>
      </div>

      {/* Stacked Cards */}
      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-panel h-screen sticky top-0 flex flex-col justify-center px-4 md:px-6 border-t border-border/20 bg-background"
            style={{ zIndex: index + 1 }}
          >
            <div className="container max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center h-full py-12">
              {/* Text Content */}
              <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl md:text-8xl font-bold text-muted-foreground/20 font-heading">
                    0{index + 1}
                  </span>
                  <div className="h-px bg-border flex-1" />
                </div>

                <h3 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full px-4 py-2 text-sm border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <Link href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors group">
                    View Project <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Project Image */}
              <div className="md:col-span-7 h-[40vh] md:h-[50vh] w-full rounded-3xl overflow-hidden relative order-1 md:order-2 group">
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 ${project.color} opacity-20 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/40" />

                {/* Hover Reveal */}
                <div className="absolute bottom-8 right-8 p-4 border border-border/50 rounded-xl bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs font-mono uppercase tracking-wider text-foreground">Explore Case Study</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacing for last card scrolling */}
      <div className="h-[50vh] bg-background" />
    </section>
  );
}
