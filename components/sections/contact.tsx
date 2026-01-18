"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
    const copyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        toast.success("Email copied to clipboard");
        window.location.href = siteConfig.links.email;
    };


    return (
        <section id="contact" className="container mx-auto max-w-4xl px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">Let's Build Something</h2>
                <p className="mx-auto mb-10 max-w-lg text-lg text-gray-400">
                    Always open to discussing new projects, opportunities, or just chatting about the latest in tech.
                </p>

                <div className="flex flex-col items-center justify-center gap-6">
                    <Button onClick={copyEmail} size="lg" className="h-14 px-10 text-lg">
                        <Mail className="mr-2 h-5 w-5" />
                        Say Hello
                    </Button>

                    <div className="flex gap-4 mt-4">
                        <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <div className="h-5 w-5 font-bold flex items-center justify-center">Ig</div>
                        </a>
                        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <footer className="mt-24 border-t border-white/5 pt-8 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                </footer>
            </motion.div>
        </section>
    );
}
