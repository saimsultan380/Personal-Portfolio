"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Code2, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

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

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Code2 className="h-6 w-6" />
                    <span className="font-bold text-xl font-heading">Saim Sultan</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="ml-2"
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    )}
                    <Button asChild variant="default">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-2">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                        >
                            {theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    )}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col">
                            <SheetHeader className="border-b border-border/50 pb-4">
                                <SheetTitle className="flex items-center gap-2">
                                    <Code2 className="h-6 w-6 text-primary" />
                                    <span className="font-heading text-xl">Saim Sultan</span>
                                </SheetTitle>
                            </SheetHeader>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-1 mt-6 flex-1">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="group relative px-4 py-3 rounded-lg text-lg font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                                        }}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Bottom CTA Button */}
                            <div className="pt-6 border-t border-border/50 mt-auto">
                                <Button asChild className="w-full h-12 text-base rounded-none" size="lg">
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                                        Hire Me
                                    </Link>
                                </Button>
                            </div>

                            <style jsx>{`
                                @keyframes slideIn {
                                    from {
                                        opacity: 0;
                                        transform: translateX(20px);
                                    }
                                    to {
                                        opacity: 1;
                                        transform: translateX(0);
                                    }
                                }
                            `}</style>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
