"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <section id="projects" className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
                Selected Works
            </motion.h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {siteConfig.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={cn(project.featured && "md:col-span-2")}
                    >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                            <Card hoverGlow className="h-full border-white/5 bg-black/40 p-1">
                                <div className="flex h-full flex-col rounded-lg bg-black/20 p-6 md:p-8">
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className={cn("h-12 w-12 rounded-full bg-gradient-to-br opacity-80 blur-[20px] transition-all group-hover:blur-[10px]", project.color || "from-gray-700 to-gray-500")} />
                                        <ArrowUpRight className="h-5 w-5 text-gray-500 transition-colors group-hover:text-white" />
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-electric transition-colors">{project.title}</h3>
                                    <p className="mb-6 flex-grow text-gray-400 font-light">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase text-gray-400 tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
