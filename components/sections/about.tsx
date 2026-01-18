"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="container mx-auto max-w-4xl px-6 py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-white md:text-4xl">About</h2>
                <Card className="p-8 md:p-12 bg-white/5 border-none shadow-none">
                    <div className="text-lg leading-relaxed text-gray-300 md:text-xl md:leading-relaxed font-light space-y-6">
                        {siteConfig.about.paragraphs.map((paragraph: string, index: number) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p className="text-gray-400 text-base italic border-l-2 border-electric/50 pl-4">
                            "{siteConfig.about.musicVibe}"
                        </p>
                    </div>
                </Card>

            </motion.div>
        </section>
    );
}
