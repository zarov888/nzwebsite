"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    return (
        <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Gradient Blob */}
            <div className="pointer-events-none absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-electric/5 blur-[120px] mix-blend-screen" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.5 }} // Delay to sync with IntroOverlay
                >
                    <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-electric backdrop-blur-md">
                        Based in {siteConfig.location}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2.7 }}
                    className="mb-6 max-w-4xl text-6xl font-black tracking-tighter text-white sm:text-8xl md:text-9xl"
                >
                    NZ<span className="text-electric">.</span>
                </motion.h1>


                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3 }}
                    className="mb-10 max-w-lg text-lg text-gray-400 sm:text-xl"
                >
                    {siteConfig.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.2 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex gap-2">
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="md" className="px-3"><Linkedin className="h-4 w-4" /></Button>
                        </a>
                        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" size="md" className="px-3"><Github className="h-4 w-4" /></Button>
                        </a>
                        <a href={siteConfig.links.email}>
                            <Button variant="secondary" size="md" className="px-3"><Mail className="h-4 w-4" /></Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-600"
            >
                <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-gray-500" />
            </motion.div>
        </section>
    );
}
