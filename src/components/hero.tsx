"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";

// Scramble Text Hook
const useScrambleText = (text: string, duration: number = 2000) => {
  const [display, setDisplay] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let start = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);

      if (progress === 1) {
        setDisplay(text);
        return;
      }

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < text.length * progress) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(scrambled);
    };

    interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, [text, duration]);

  return display;
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrambledTitle1 = useScrambleText("CREATIVE", 1500);
  const scrambledTitle2 = useScrambleText("DEVELOPER", 2000);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center perspective-1000 pt-32"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Animated Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-particle ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* 3D Content Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-20 container px-4 flex flex-col items-center text-center"
      >
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-primary flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Projects
          </span>
        </motion.div>

        <h1 className="font-heading font-bold tracking-tighter text-[12vw] leading-[0.85] mix-blend-difference text-foreground select-none flex flex-col items-center">
          <span className="block translate-z-20 glitch-hover">{scrambledTitle1}</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60 translate-z-30">
            {scrambledTitle2}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 max-w-md text-lg md:text-xl text-muted-foreground font-light tracking-wide translate-z-10"
        >
          Crafting digital experiences where design meets motion.
          <br className="hidden md:block" /> Based in Islamabad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10 flex items-center gap-6 translate-z-20"
        >
          <Magnetic>
            <Button
              asChild
              className="group relative h-14 px-8 rounded-full text-base bg-transparent border-0 overflow-hidden"
            >
              <Link href="#contact" className="relative z-10">
                {/* Animated Gradient Border */}
                <span className="absolute inset-0 rounded-full animated-border" />
                {/* Inner Background */}
                <span className="absolute inset-[2px] rounded-full bg-foreground group-hover:bg-foreground/90 transition-colors" />
                {/* Content */}
                <span className="relative z-10 flex items-center text-background">
                  Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </Magnetic>

          {/* Secondary Ghost Button */}
          <Magnetic>
            <Button
              asChild
              variant="ghost"
              className="h-14 px-6 rounded-full text-base border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="#projects">
                View Work
              </Link>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Profile Image - Parallax with Glow */}
      <motion.div
        style={{
          x: useTransform(x, [-0.5, 0.5], [20, -20]),
          y: useTransform(y, [-0.5, 0.5], [20, -20]),
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] opacity-10 pointer-events-none hidden lg:block z-10"
      >
        <div className="relative w-full h-full">
          {/* Glow Effect Behind Image */}
          <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full" />
          <Image
            src="/saim-hero.png"
            alt="Saim Sultan"
            fill
            className="object-cover object-center rounded-l-[3rem]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent" />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-30 pointer-events-none" />
    </section>
  );
}
