"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Disc } from "lucide-react";

export function Music() {
    return (
        <section id="music" className="container mx-auto max-w-4xl px-6 py-24">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative shrink-0"
                >
                    <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-tr from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-2xl animate-spin-slow">
                        <Disc className="h-12 w-12 text-gray-500" />
                    </div>
                    {/* Fake equalizer bars */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-1 h-8">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [10, 24, 10] }}
                                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1, ease: "linear" }}
                                className="w-1 bg-electric rounded-full opacity-70"
                            />
                        ))}
                    </div>
                </motion.div>

                <div className="text-center md:text-left">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">On Repeat</h2>
                    <p className="mb-6 text-gray-400">Fuel for deep work sessions. Currently exploring:</p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {siteConfig.music.artists.concat(siteConfig.music.genres).map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 hover:border-electric/30 hover:text-white transition-colors cursor-default"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
