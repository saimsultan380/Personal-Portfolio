"use client";

import { useRef } from "react";
import { Code, Terminal, Cpu, Layers } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiments = [
  {
    title: "3D Card Hover",
    desc: "Physics-based tilt effect using React Spring.",
    icon: Layers,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Neural Network Viz",
    desc: "Canvas API visualization of nodes and links.",
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Terminal Portfolio",
    desc: "A CLI-based portfolio built with Next.js.",
    icon: Terminal,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Audio Visualizer",
    desc: "Web Audio API real-time frequency analysis.",
    icon: Code,
    color: "bg-orange-500/10 text-orange-500",
  },
];

export function Playground() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".lab-card",
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="playground"
      className="w-full py-24 md:py-32 bg-background border-t border-border/40 relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
              Experimental
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tighter">
              The Lab
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Experimental code, visual explorations, and small tools I build on weekends.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((item, index) => (
            <div
              key={index}
              className="lab-card group relative overflow-hidden cursor-pointer bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
            >
              {/* Visual Placeholder Area */}
              <div className={`h-44 w-full ${item.color.replace('text-', 'bg-').replace('/10', '/5')} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                {/* Abstract Pattern based on index */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                  {index === 0 && <div className="w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />}
                  {index === 1 && <div className="w-full h-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200" />}
                  {index === 2 && <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />}
                  {index === 3 && <div className="w-full h-full flex items-end justify-center gap-1 pb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 bg-primary/40 rounded-t-full animate-pulse" style={{ height: `${[40, 70, 50, 80, 60][i]}%`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>}
                </div>

                <div className="absolute top-4 left-4 p-3 rounded-2xl bg-background/80 backdrop-blur-md border border-white/10 shadow-lg">
                  <item.icon className={`w-6 h-6 ${item.color.split(' ')[1]}`} />
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow break-words">
                  {item.desc}
                </p>
                <div className="flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Experiment <span className="ml-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

