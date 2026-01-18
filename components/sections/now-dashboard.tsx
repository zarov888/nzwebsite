"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Briefcase, Hammer, Headphones, Zap } from "lucide-react";

const IconMap = {
    Briefcase: Briefcase,
    Hammer: Hammer,
    Headphones: Headphones,
    Zap: Zap
};

export function NowDashboard() {
    return (
        <section id="now" className="container mx-auto max-w-4xl px-6 py-12">
            <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">Currently</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Role", text: siteConfig.now.role, icon: "Briefcase" },
                    { label: "Building", text: siteConfig.now.building, sub: siteConfig.now.buildingSub, icon: "Hammer" },
                    { label: "Focus", text: siteConfig.now.focus, icon: "Zap" },
                    { label: "Listening", text: siteConfig.now.listening, icon: "Headphones" }
                ].map((item, index) => {
                    const Icon = IconMap[item.icon as keyof typeof IconMap] || Briefcase;

                    return (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card hoverGlow className="flex h-full flex-col p-6 bg-black/40 border-white/5">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-electric">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <h3 className="mb-1 text-xs font-medium uppercase text-gray-500">{item.label}</h3>
                                <p className="font-medium text-white">{item.text}</p>
                                {item.sub && <p className="text-xs text-gray-500 mt-1">{item.sub}</p>}
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
