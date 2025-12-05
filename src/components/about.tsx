"use client";

import { useRef } from "react";
import {
  Code2,
  Globe,
  Palette,
  Zap,
  Rocket,
  Users,
  Trophy,
  Cpu,
  Sparkles
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".bento-item");

      gsap.from(items, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      // Holographic Tilt Effect
      items.forEach((item: any) => {
        item.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xPct = (x / rect.width - 0.5) * 2;
          const yPct = (y / rect.height - 0.5) * 2;

          gsap.to(item, {
            rotationY: xPct * 10,
            rotationX: -yPct * 10,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out",
          });

          // Move internal holographic shine
          const shine = item.querySelector(".holo-shine");
          if (shine) {
            gsap.to(shine, {
              x: xPct * 50,
              y: yPct * 50,
              opacity: 0.5 + Math.abs(xPct) * 0.5,
              duration: 0.5,
            });
          }
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power2.out",
          });
          const shine = item.querySelector(".holo-shine");
          if (shine) {
            gsap.to(shine, {
              opacity: 0,
              duration: 0.5,
            });
          }
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="py-24 md:py-32 px-4 md:px-6 w-full max-w-7xl mx-auto perspective-1000 relative"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="mb-20 relative">
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter uppercase">
          Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-cyan-500">the Code</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl border-l-2 border-primary/50 pl-6">
          Architecting digital realities. I fuse engineering precision with artistic intuition to build the web of tomorrow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        {/* Main Bio Card - Holographic Glass with Animated Border */}
        <div className="bento-item col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative rounded-[2rem] overflow-hidden">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 animated-border-slow rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Card Background */}
          <div className="absolute inset-[2px] bg-white/50 dark:bg-card/30 backdrop-blur-xl rounded-[2rem]" />

          <div className="holo-shine absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 opacity-0 pointer-events-none mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay rounded-[2rem]" />

          <div className="relative z-10 p-10 flex flex-col justify-between h-full">
            <div>
              <div className="w-80 h-80 rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-zinc-200 dark:shadow-primary/30 group-hover:shadow-zinc-300 dark:group-hover:shadow-primary/50 transition-all duration-500">
                <img
                  src="/saim-hero.png"
                  alt="Saim Sultan"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4">The Architect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m Saim Sultan. I don&apos;t just write code; I engineer experiences. Specializing in high-performance React/Next.js applications and scalable WordPress architectures. My mission is to obliterate the line between web and native performance.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium flex items-center gap-2 group-hover:bg-primary/20 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                System Online
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-sm">
                Islamabad, PK
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card - Neon Glow with Digital Display */}
        <div className="bento-item col-span-1 md:col-span-1 lg:col-span-1 row-span-1 group relative rounded-[2rem] overflow-hidden border-glow">
          <div className="absolute inset-0 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 rounded-[2rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
          <div className="holo-shine absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-shine" />

          <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center h-full">
            <Trophy className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:scale-110 transition-transform" />
            <h3 className="text-5xl font-bold font-heading text-zinc-900 dark:text-white digital-text group-hover:text-blue-400 transition-colors">5+</h3>
            <p className="text-xs text-blue-600 dark:text-blue-300 uppercase tracking-[0.2em] mt-2 font-mono">Years Exp</p>
          </div>
        </div>

        {/* Projects Card - Cyberpunk Style */}
        <div className="bento-item col-span-1 md:col-span-1 lg:col-span-1 row-span-1 group relative rounded-[2rem] overflow-hidden border-glow">
          <div className="absolute inset-0 bg-zinc-100 dark:bg-black border border-zinc-200 dark:border-white/10 rounded-[2rem]" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

          <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center h-full">
            <Rocket className="w-10 h-10 text-purple-500 dark:text-purple-400 mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-110 group-hover:-translate-y-1 transition-all" />
            <h3 className="text-5xl font-bold font-heading text-zinc-900 dark:text-white digital-text group-hover:text-purple-400 transition-colors">50+</h3>
            <p className="text-xs text-purple-600 dark:text-purple-300 uppercase tracking-[0.2em] mt-2 font-mono">Shipped</p>
          </div>
        </div>

        {/* Global Reach - Holographic Map */}
        <div className="bento-item col-span-1 md:col-span-1 lg:col-span-1 row-span-1 group relative rounded-[2rem] overflow-hidden border-glow">
          <div className="absolute inset-0 bg-white/50 dark:bg-card/30 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-[2rem]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />

          <div className="relative z-10 p-6 flex flex-col justify-center items-center text-center h-full">
            <Globe className="w-12 h-12 text-emerald-400 mb-4 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)] group-hover:animate-pulse" />
            <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">Global Reach</h3>
            <p className="text-xs text-muted-foreground mt-2">Serving clients worldwide</p>
          </div>
        </div>

        {/* Philosophy - Minimalist Future */}
        <div className="bento-item col-span-1 md:col-span-2 lg:col-span-1 row-span-1 group relative rounded-[2rem] overflow-hidden border-glow">
          <div className="absolute inset-0 bg-zinc-50 dark:bg-white/5 backdrop-blur-lg border border-zinc-200 dark:border-white/10 rounded-[2rem]" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-[60px] rounded-full group-hover:bg-orange-500/30 transition-colors" />

          <div className="relative z-10 p-8 flex flex-col justify-between h-full">
            <div className="mb-4">
              <Sparkles className="w-8 h-8 text-orange-400 mb-3 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)] group-hover:animate-pulse" />
              <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">Future Ready</h3>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Building scalable solutions that adapt to the evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
