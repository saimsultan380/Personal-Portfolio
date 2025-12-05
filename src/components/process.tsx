"use client";

import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "I dive deep into your business goals, audience, and competitors to build a solid strategy.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design",
    desc: "Crafting wireframes and high-fidelity interactive prototypes that align with your brand.",
    icon: PenTool,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Development",
    desc: "Writing clean, scalable code using the latest tech stack (Next.js, React, Node).",
    icon: Code2,
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Testing, optimization, and deployment. Ensuring everything runs perfectly at scale.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

export function Process() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".process-card");

      cards.forEach((card: any, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Animate connecting line
      gsap.from(".process-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full py-24 md:py-32 bg-secondary/5 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
            Workflow
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter mb-6">
            How I Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven workflow that ensures transparency, quality, and speed.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 z-0">
            <div className="process-line w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent origin-left" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="process-card group relative bg-background border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Step Number Background */}
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-muted-foreground/5 font-heading select-none group-hover:text-primary/5 transition-colors z-0">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg shadow-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 break-words">
                    {step.desc}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Step {step.number}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

