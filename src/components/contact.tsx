"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Magnetic } from "@/components/ui/magnetic";

export function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("saimsultan380@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(
    () => {
      gsap.from(".contact-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="min-h-screen w-full bg-background flex flex-col justify-center px-4 md:px-6 py-24 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12">
          <div className="overflow-hidden">
            <span className="contact-line text-sm font-mono uppercase tracking-widest text-primary mb-2 block">
              Contact
            </span>
            <p className="contact-line text-xl md:text-2xl font-mono text-muted-foreground mb-4">
              ( Have an idea? )
            </p>
          </div>
          <div className="overflow-hidden pb-2 pr-4">
            <h2 className="contact-line text-[12vw] leading-[0.85] font-heading font-bold tracking-tighter uppercase text-foreground">
              Let&apos;s Work
            </h2>
          </div>
          <div className="overflow-hidden pb-2 pr-4">
            <h2 className="contact-line text-[12vw] leading-[0.85] font-heading font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/80 to-primary/60">
              Together
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start mt-12">
          <div className="contact-line space-y-8 flex-1">
            <Magnetic>
              <div
                onClick={copyEmail}
                className="group cursor-pointer inline-flex items-center gap-4 text-3xl md:text-5xl font-bold border-b border-border pb-4 hover:border-primary transition-colors text-foreground"
              >
                <span>saimsultan380@gmail.com</span>
                <div className="relative w-8 h-8">
                  {copied ? (
                    <Check className="w-8 h-8 text-green-500" />
                  ) : (
                    <Copy className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
            </Magnetic>
            <p className="text-muted-foreground text-lg max-w-md">
              Currently available for freelance projects and open to full-time
              opportunities.
            </p>
          </div>

          <div className="contact-line flex flex-col gap-4">
            <h3 className="text-sm font-mono uppercase text-muted-foreground tracking-widest">
              Socials
            </h3>
            <div className="flex gap-4">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/saim-sultan-wordpress-developer/" },
                { name: "Twitter", url: "https://x.com/saimthewebguy" },
              ].map((social) => (
                <Magnetic key={social.name}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-border hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-2 text-foreground"
                  >
                    {social.name} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Strip */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end text-xs text-muted-foreground/40 font-mono uppercase">
        <div>
          <p>© {new Date().getFullYear()} Saim Sultan</p>
          <p>Islamabad, Pakistan</p>
        </div>
        <div className="text-right">
          <p>Designed & Built</p>
          <p>with Next.js + GSAP</p>
        </div>
      </div>
    </section>
  );
}
