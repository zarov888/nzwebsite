"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navItems = [
    { id: "hero", label: "Start" },
    { id: "about", label: "About" },
    { id: "now", label: "Now" },
    { id: "projects", label: "Projects" },
    { id: "music", label: "Music" },
    { id: "timeline", label: "Career" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.4 }
        );

        navItems.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                <div onClick={() => scrollTo("hero")} className="cursor-pointer text-xl font-bold tracking-tighter text-white hover:text-electric transition-colors">
                    {siteConfig.initials}.
                </div>

                {/* Desktop Dot Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className="group relative flex items-center justify-center p-2"
                            aria-label={`Scroll to ${item.label}`}
                        >
                            <span
                                className={cn(
                                    "relative z-10 block h-1.5 w-1.5 rounded-full transition-all duration-300 group-hover:scale-150",
                                    activeSection === item.id ? "bg-electric scale-125 shadow-[0_0_10px_#00f0ff]" : "bg-white/20 hover:bg-white/50"
                                )}
                            />
                            {/* Tooltip on hover */}
                            <span className="absolute top-10 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 bg-black/50 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </nav>

                {/* Mobile: Just show active section label */}
                <div className="md:hidden text-xs font-mono text-electric">
                    {navItems.find(i => i.id === activeSection)?.label.toUpperCase()}
                </div>
            </div>
        </header>
    );
}
