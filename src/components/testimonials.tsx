"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Saim's attention to detail is unmatched. The site isn't just fast; it feels alive.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
  },
  {
    text: "Delivered a complex e-commerce platform ahead of schedule. True professional.",
    author: "Michael Chen",
    role: "Founder, DigitalFlow",
  },
  {
    text: "Best developer we've worked with. The animations are buttery smooth.",
    author: "Emily Rodriguez",
    role: "Art Director, Studio X",
  },
  {
    text: "He translated our vague ideas into a stunning, functional reality.",
    author: "David Park",
    role: "Product Lead, Innovate",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderRef2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Marquee Effect 1 (Left to Right)
      gsap.to(sliderRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });

      // Marquee Effect 2 (Right to Left)
      gsap.to(sliderRef2.current, {
        xPercent: 50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-32 overflow-hidden bg-background relative z-10"
    >
      <div className="container px-4 md:px-6 mb-16 text-center">
        <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
          Testimonials
        </span>
        <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">Stories</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hear from those who have experienced the difference. Real results, real impact.
        </p>
      </div>

      {/* First Row */}
      <div className="flex w-[200%] mb-8" ref={sliderRef}>
        {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
          <div
            key={i}
            className="w-[400px] md:w-[500px] shrink-0 px-4"
          >
            <div className="h-full p-8 rounded-3xl bg-secondary/10 border border-border/50 hover:bg-secondary/20 transition-colors">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row (Reverse) */}
      <div className="flex w-[200%] -ml-[100%]" ref={sliderRef2}>
        {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
          <div
            key={i}
            className="w-[400px] md:w-[500px] shrink-0 px-4"
          >
            <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors">
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
