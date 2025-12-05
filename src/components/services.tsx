"use client";

import { useRef } from "react";
import {
  Globe,
  Code2,
  ShoppingCart,
  FileCode,
  Search,
  Sparkles,
  ArrowUpRight,
  Zap,
  Palette,
  Database,
  Smartphone,
  TrendingUp,
  Package,
  Bot,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites built with React, Next.js, and modern frameworks. Pixel-perfect, responsive, and blazing fast.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: ["React & Next.js", "Responsive Design", "Lightning Fast"],
    skillIcons: [
      { icon: Code2, label: "React", color: "text-blue-400" },
      { icon: Zap, label: "Next.js", color: "text-cyan-400" },
      { icon: Palette, label: "Tailwind", color: "text-sky-400" },
    ],
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and headless CMS solutions. Scalable, secure, and easy to manage for any business.",
    icon: FileCode,
    color: "from-indigo-500 to-purple-500",
    features: ["Custom Themes", "Plugin Development", "Headless CMS"],
    skillIcons: [
      { icon: FileCode, label: "WordPress", color: "text-indigo-400" },
      { icon: Database, label: "MySQL", color: "text-purple-400" },
      { icon: Code2, label: "PHP", color: "text-violet-400" },
    ],
  },
  {
    title: "Shopify E-Commerce",
    description:
      "High-converting Shopify stores with custom themes and integrations. Turn your visitors into loyal customers.",
    icon: ShoppingCart,
    color: "from-emerald-500 to-teal-500",
    features: ["Custom Themes", "App Integration", "Conversion Focused"],
    skillIcons: [
      { icon: ShoppingCart, label: "Shopify", color: "text-emerald-400" },
      { icon: Package, label: "Liquid", color: "text-teal-400" },
      { icon: Smartphone, label: "Mobile", color: "text-green-400" },
    ],
  },
  {
    title: "SEO & Performance",
    description:
      "Technical SEO optimization, Core Web Vitals tuning, and growth strategies. Rank higher, load faster, convert better.",
    icon: Search,
    color: "from-orange-500 to-red-500",
    features: ["Technical SEO", "Core Web Vitals", "Analytics Setup"],
    skillIcons: [
      { icon: Search, label: "SEO", color: "text-orange-400" },
      { icon: TrendingUp, label: "Analytics", color: "text-red-400" },
      { icon: Zap, label: "Speed", color: "text-amber-400" },
    ],
  },
  {
    title: "Custom Software",
    description:
      "Bespoke software solutions tailored to your unique business needs. From MVPs to enterprise-grade applications.",
    icon: Code2,
    color: "from-pink-500 to-rose-500",
    features: ["Full-Stack Apps", "API Development", "Cloud Solutions"],
    skillIcons: [
      { icon: Code2, label: "TypeScript", color: "text-pink-400" },
      { icon: Database, label: "PostgreSQL", color: "text-rose-400" },
      { icon: Globe, label: "APIs", color: "text-fuchsia-400" },
    ],
  },
  {
    title: "AI Solutions & Automation",
    description:
      "Leveraging the power of Artificial Intelligence to automate workflows and build intelligent applications.",
    icon: Bot,
    color: "from-violet-600 to-indigo-600",
    features: ["LLM Integration", "Smart Automation", "AI Chatbots"],
    skillIcons: [
      { icon: Bot, label: "AI Models", color: "text-violet-400" },
      { icon: Cpu, label: "Processing", color: "text-indigo-400" },
      { icon: Code2, label: "Python", color: "text-blue-400" },
    ],
  },
];

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".service-card");

      cards.forEach((card: any, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate skill icons
        gsap.from(card.querySelectorAll(".skill-icon"), {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="w-full py-24 md:py-32 px-4 md:px-6 bg-background relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.05)_0%,transparent_50%)]" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-mono tracking-widest uppercase text-sm flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            What I Bring to the Table
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

              {/* Floating Orb */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-[60px] group-hover:opacity-30 transition-opacity duration-700`} />

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Skill Icons */}
                <div className="flex items-center gap-3 mb-6 pt-4 border-t border-border/50">
                  {service.skillIcons.map((skill, idx) => (
                    <div
                      key={idx}
                      className="skill-icon group/skill relative"
                      title={skill.label}
                    >
                      <div className="w-10 h-10 rounded-xl bg-background/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 cursor-pointer">
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {skill.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
