"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(".fab-action", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    } else {
      gsap.to(".fab-action", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      {/* Actions */}
      <div className={`flex flex-col gap-3 mb-2 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <Button
          asChild
          size="icon"
          className="fab-action h-12 w-12 rounded-full shadow-lg opacity-0 translate-y-4 bg-blue-500 hover:bg-blue-600"
        >
          <Link href="https://calendly.com" target="_blank" aria-label="Book a call">
            <Calendar className="h-5 w-5" />
          </Link>
        </Button>
        
        <Button
          asChild
          size="icon"
          className="fab-action h-12 w-12 rounded-full shadow-lg opacity-0 translate-y-4 bg-green-500 hover:bg-green-600"
        >
          <Link href="https://wa.me/923006031380" target="_blank" aria-label="WhatsApp">
            <Phone className="h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          size="icon"
          className="fab-action h-12 w-12 rounded-full shadow-lg opacity-0 translate-y-4 bg-primary hover:bg-primary/90"
        >
          <Link href="mailto:saimsultan380@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Toggle Button */}
      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-xl transition-transform duration-300 ${
          isOpen ? "rotate-90 bg-destructive hover:bg-destructive/90" : "hover:scale-110"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
