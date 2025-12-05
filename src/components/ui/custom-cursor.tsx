"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure component is mounted on client before initializing GSAP
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useGSAP(() => {
        if (!isMounted) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
        const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

        const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3.out" });
        const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            xToCursor(e.clientX);
            yToCursor(e.clientY);
            xToFollower(e.clientX);
            yToFollower(e.clientY);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        // Observer for dynamic elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    const newElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
                    newElements.forEach((el) => {
                        el.removeEventListener("mouseenter", handleHoverStart);
                        el.removeEventListener("mouseleave", handleHoverEnd);
                        el.addEventListener("mouseenter", handleHoverStart);
                        el.addEventListener("mouseleave", handleHoverEnd);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);

            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });

            observer.disconnect();
        };
    }, [isMounted]);

    return (
        <>
            <div
                ref={cursorRef}
                className={cn(
                    "fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-300 hidden md:block",
                    isVisible ? "opacity-100" : "opacity-0",
                    isHovering && "scale-0"
                )}
            />
            <div
                ref={followerRef}
                className={cn(
                    "fixed top-0 left-0 w-12 h-12 border border-primary rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block",
                    isVisible ? "opacity-100" : "opacity-0",
                    isHovering && "scale-150 bg-primary/10 border-transparent"
                )}
            />
        </>
    );
}
