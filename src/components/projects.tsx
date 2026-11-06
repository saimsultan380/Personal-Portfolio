"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Archiloom Studio",
    description:
      "A global architecture studio site for concept design, interiors, Revit/BIM documentation, permit sets, and photoreal 3D visualization — with service packages and an international project archive.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://archiloomstudio.com/",
    image: "/projects/archiloom-studio.jpg",
  },
  {
    title: "Moosa Constructions",
    description:
      "A high-end construction brand site for Pakistan covering apartments, penthouses, commercial builds, and renovation work across DHA, Bahria Town, Lahore, Islamabad, and Karachi.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://moosaconstructions.com/",
    image: "/projects/moosa-constructions.jpg",
  },
  {
    title: "Alphaline Construction",
    description:
      "A lead-generating website for a licensed NYC contractor specializing in roofing, waterproofing, stucco, painting, concrete, and tile across the Bronx, Manhattan, Queens, and Brooklyn.",
    tags: ["WordPress", "Elementor", "SEO"],
    liveUrl: "https://alphalineconstructioncorp.com/",
    image: "/projects/alphaline-construction.jpg",
  },
  {
    title: "Unique Quran",
    description:
      "An online Quran academy for kids and adults, with live one-on-one classes in Tajweed, Tafseer, Hifz, Qirat, and Arabic, plus trial booking and global student onboarding.",
    tags: ["WordPress", "Elementor", "SEO"],
    liveUrl: "https://uniquequran.com/",
    image: "/projects/unique-quran.jpg",
  },
  {
    title: "Miguel Bañuls",
    description:
      "A gallery website for Spanish sculptor and jewelry artist Miguel Bañuls — sculpture collections, exhibitions, and atelier presence, presented as an elegant art-forward portfolio.",
    tags: ["WordPress", "Elementor", "Multilingual"],
    liveUrl: "https://miguelbañuls.es/Fase2/",
    image: "/projects/miguel-banuls.jpg",
  },
  {
    title: "Resume Uplift",
    description:
      "An ATS-focused resume writing platform with service packages, samples, testimonials, and conversion-optimized funnels that help job seekers land more interviews.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://resumesuplift.com/",
    image: "/projects/resumes-uplift.jpg",
  },
  {
    title: "Pay Flow",
    description:
      "A high-risk merchant payment site for EasyPay Sol — PCI-aware trust signals, merchant onboarding, and API-led positioning for businesses traditional processors decline.",
    tags: ["Next.js", "TypeScript", "Vercel"],
    liveUrl: "https://easypaysol.com/",
    image: "/projects/pay-flow.jpg",
  },
  {
    title: "Epoxy Floor",
    description:
      "A local service website for Epoxee in El Paso, TX — garage, commercial, metallic, and flake epoxy flooring with a project gallery, estimates, and conversion-focused service pages.",
    tags: ["WordPress", "Elementor", "SEO"],
    liveUrl: "https://epoxee.com/",
    image: "/projects/epoxy-floor.jpg",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-background relative py-24 md:py-32"
    >
      <div className="px-4 md:px-6 container max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="mb-4 flex items-center gap-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-heading font-bold tracking-tighter mb-6">
            Selected <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Live client websites across architecture, construction, education,
            fintech, and local services.
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.liveUrl}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col rounded-t-lg rounded-b-[2rem] overflow-hidden bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-xl shadow-zinc-200/40 dark:shadow-black/20 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden bg-muted"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-background/85 backdrop-blur-md border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>

              <div className="flex flex-col flex-1 p-6 md:p-7">
                <h3 className="text-2xl font-heading font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full px-3 py-1 text-xs border-primary/20 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  View Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
