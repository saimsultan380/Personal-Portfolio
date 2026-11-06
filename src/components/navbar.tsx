"use client";

import * as React from "react";
import Link from "next/link";
import { Code2, Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Magnetic } from "@/components/ui/magnetic";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    const navRef = React.useRef<HTMLDivElement>(null);
    const menuRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useGSAP(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            delay: 0.5
        });
    }, { scope: navRef });

    useGSAP(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                x: 0,
                duration: 0.6,
                ease: "expo.out"
            });
            gsap.fromTo(".mobile-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2 }
            );
        } else {
            gsap.to(menuRef.current, {
                x: "100%",
                duration: 0.6,
                ease: "expo.in"
            });
        }
    }, [isOpen]);

    return (
        <>
            <div ref={navRef} className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
                <div className={cn(
                    "pointer-events-auto flex items-center gap-2 p-2 rounded-full border transition-all duration-500 ease-out",
                    isScrolled
                        ? "bg-background/70 backdrop-blur-xl border-border/40 shadow-2xl shadow-primary/5"
                        : "bg-transparent border-transparent"
                )}>
                    {/* Logo */}
                    <Magnetic>
                        <Link href="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group">
                            <Code2 className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform" />
                        </Link>
                    </Magnetic>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center px-4 gap-1">
                        {navItems.map((item) => (
                            <Magnetic key={item.name}>
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-secondary/50"
                                >
                                    {item.name}
                                </Link>
                            </Magnetic>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-2 pl-2 border-l border-border/20">
                        {mounted && (
                            <Magnetic>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={toggleTheme}
                                    className="rounded-full w-10 h-10 hover:bg-secondary/50"
                                >
                                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                                </Button>
                            </Magnetic>
                        )}
                        <Magnetic>
                            <Button asChild className="rounded-full px-6 h-10">
                                <Link href="#contact">Hire Me</Link>
                            </Button>
                        </Magnetic>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-lg"
                            >
                                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                            </Button>
                        )}
                        <Button
                            variant="default"
                            size="icon"
                            className="rounded-full w-10 h-10"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-[60] bg-background md:hidden transform translate-x-full"
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-end mb-12">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full w-12 h-12 border-border/50"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </Button>
                    </div>

                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="mobile-link text-5xl font-bold font-heading text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-6">
                        <div className="h-px w-full bg-border/50" />
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Get in touch</span>
                            <Link href="mailto:saimsultan380@gmail.com" className="text-lg font-medium hover:underline">
                                saimsultan380@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
