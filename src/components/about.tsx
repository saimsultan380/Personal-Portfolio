"use client";

import { useRef } from "react";
import {
  Code2,
  Globe,
  Zap,
  Rocket,
  Trophy,
  Sparkles,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-32 md:py-40 w-full relative overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
              About Me
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter uppercase">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">the Code</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl border-l-2 border-primary/50 pl-6">
              Architecting digital realities. I fuse engineering precision with artistic intuition to build the web of tomorrow.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 md:col-span-8 row-span-2 relative group rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-2xl shadow-zinc-200/50 dark:shadow-black/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col md:flex-row h-full">
              <div className="p-8 md:p-12 flex flex-col justify-between md:w-3/5 order-2 md:order-1">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/20">
                    <Sparkles className="w-3 h-3" />
                    <span>The Architect</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
                    Engineering <br />
                    <span className="text-muted-foreground">Excellence</span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I&apos;m Saim Sultan. I don&apos;t just write code; I engineer experiences. Specializing in high-performance React/Next.js applications and scalable WordPress architectures. My mission is to obliterate the line between web and native performance.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    Available for new projects
                  </div>
                </div>
              </div>

              <div className="md:w-2/5 h-80 md:h-auto relative overflow-hidden order-1 md:order-2">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-background via-transparent to-transparent z-10" />
                <img
                  src="/saim-hero.png"
                  alt="Saim Sultan"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-4 row-span-1 relative group rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl p-8 flex flex-col justify-center items-center text-center shadow-xl shadow-zinc-200/50 dark:shadow-black/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Trophy className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-5xl font-bold font-heading mb-1 text-foreground">5+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Years Experience</span>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-1 md:col-span-4 row-span-1 relative group rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl p-8 flex flex-col justify-center items-center text-center shadow-xl shadow-zinc-200/50 dark:shadow-black/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Rocket className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-5xl font-bold font-heading mb-1 text-foreground">50+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-widest">Projects Shipped</span>
          </motion.div>

          {/* Tech Stack / Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 md:col-span-6 row-span-1 relative group rounded-[2.5rem] overflow-hidden bg-zinc-900 text-white p-8 flex flex-col justify-between shadow-xl shadow-zinc-200/50 dark:shadow-black/10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/30 transition-colors" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Cpu className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Current Focus</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Next.js & AI Integration</h3>
              <p className="text-zinc-400 text-sm">Pushing the boundaries of what's possible on the web.</p>
            </div>

            <ArrowUpRight className="absolute bottom-8 right-8 w-6 h-6 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </motion.div>

          {/* Location / Global */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 md:col-span-6 row-span-1 relative group rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 backdrop-blur-xl p-8 flex items-center gap-6 shadow-xl shadow-zinc-200/50 dark:shadow-black/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Globe className="w-8 h-8 text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1 text-foreground">Global Reach</h3>
              <p className="text-muted-foreground text-sm">
                Based in Islamabad, serving clients worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
