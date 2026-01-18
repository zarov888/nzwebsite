"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export function Timeline() {
    return (
        <section id="timeline" className="container mx-auto max-w-3xl px-6 py-24">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white">Path</h2>

            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
                {siteConfig.timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Dot */}
                        <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full bg-electric border border-black shadow-[0_0_8px_#00f0ff] md:-left-[5px] md:ml-0" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <span className="font-mono text-sm text-gray-500">{item.year}</span>
                        </div>
                        <div className="mb-2 font-medium text-gray-400">{item.company}</div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-md">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
