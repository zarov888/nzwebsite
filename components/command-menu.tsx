"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, MapPin, Linkedin, Github, Mail, Laptop, User, Music, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { toast } from "sonner";

export function CommandMenu() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs font-medium text-gray-400 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white cursor-pointer shadow-2xl md:bottom-8 md:right-8"
            >
                <span className="text-xs">⌘K</span>
                <span className="hidden sm:inline">Command</span>
            </div>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl z-[100]"
            >
                <div className="flex items-center border-b border-white/10 px-3">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
                    <Command.Input
                        placeholder="Type a command or search..."
                        className="flex h-12 w-full rouned-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 text-white disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden pt-2 scrollbar-hide">
                    <Command.Empty className="py-6 text-center text-sm text-gray-500">No results found.</Command.Empty>

                    <Command.Group heading="Navigation" className="text-xs font-medium text-gray-500 px-2 py-1.5 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:cursor-pointer [&_[cmdk-item]]:rounded-md [&_[cmdk-item]]:text-gray-300 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-gray-500">
                        <Command.Item onSelect={() => runCommand(() => router.push('#about'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors group">
                            <User className="mr-2 h-4 w-4 text-electric group-hover:text-white" />
                            <span>About Me</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => router.push('#projects'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors group">
                            <Laptop className="mr-2 h-4 w-4 text-purple-400 group-hover:text-white" />
                            <span>Projects</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => router.push('#music'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors group">
                            <Music className="mr-2 h-4 w-4 text-emerald-400 group-hover:text-white" />
                            <span>Music Taste</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => router.push('#timeline'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors group">
                            <Clock className="mr-2 h-4 w-4 text-amber-400 group-hover:text-white" />
                            <span>Career Timeline</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="my-2 h-px bg-white/10" />

                    <Command.Group heading="Socials" className="text-xs font-medium text-gray-500 px-2 py-1.5">
                        <Command.Item onSelect={() => runCommand(() => window.open(siteConfig.links.instagram, '_blank'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span>Instagram</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => window.open(siteConfig.links.linkedin, '_blank'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors">
                            <Linkedin className="mr-2 h-4 w-4" />
                            <span>LinkedIn</span>
                        </Command.Item>
                        <Command.Item onSelect={() => runCommand(() => window.open(siteConfig.links.github, '_blank'))} className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors">
                            <Github className="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="my-2 h-px bg-white/10" />

                    <Command.Group heading="General" className="text-xs font-medium text-gray-500 px-2 py-1.5">
                        <Command.Item
                            onSelect={() => runCommand(() => {
                                navigator.clipboard.writeText(siteConfig.email);
                                toast.success("Email copied to clipboard");
                            })}
                            className="flex items-center gap-2 hover:bg-white/10 hover:text-white p-2 rounded transition-colors"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Copy Email</span>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </>
    );
}
