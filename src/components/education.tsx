"use client";

import { useRef } from "react";
import { GraduationCap, Award, Calendar, ArrowRight, BookOpen } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Federal Urdu University of Arts, Sciences & Technology, Islamabad",
    period: "2019 - 2024",
    description:
      "Focused on software engineering, algorithms, and modern web technologies. Graduated with honors.",
    icon: GraduationCap,
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    school: "TS Media",
    period: "2019",
    description:
      "Intensive 6-month program covering the complete MERN stack, system design, and best coding practices.",
    icon: BookOpen,
  },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    color: "from-primary to-primary/60",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    year: "2023",
    color: "from-primary to-primary/60",
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Meta",
    year: "2022",
    color: "from-primary to-primary/60",
  },
];

export function Education() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".edu-item");

      items.forEach((item: any, index) => {
        gsap.from(item, {
          x: index % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        })
      });

      const certs = gsap.utils.toArray(".cert-card");

      certs.forEach((cert: any, index) => {
        gsap.fromTo(cert,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cert,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="education"
      className="w-full py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Education & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My academic foundation and continuous pursuit of technical excellence.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto mb-32">
          {/* Center Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <div
                key={index}
                className={`edu-item flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] z-10 md:-translate-x-1/2 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Content */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}>
                  <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                    <div className={`inline-flex items-center gap-2 text-sm font-mono text-primary mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}>
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <div className="text-lg text-muted-foreground mb-4 font-medium">
                      {item.school}
                    </div>
                    <p className="text-muted-foreground/80 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mt-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-center">
              Professional Certifications
            </h3>
          </div>

          <div className="cert-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-1 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative h-full bg-card rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-5xl font-heading font-bold text-muted-foreground/20 group-hover:text-primary/10 transition-colors">
                        0{idx + 1}
                      </span>
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center opacity-80 group-hover:scale-110 transition-transform`}>
                        <Award className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors break-words">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
                    <span className="text-xs font-mono text-muted-foreground">{cert.year}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
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
