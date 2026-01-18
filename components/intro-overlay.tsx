"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export function IntroOverlay() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Prevent scroll when overlay is visible
        if (show) {
            document.body.style.overflow = "hidden";
            // Disable after animation duration
            const timer = setTimeout(() => {
                setShow(false);
                document.body.style.overflow = "unset";
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl font-bold tracking-tighter text-white sm:text-6xl"
                        >
                            {siteConfig.initials}
                        </motion.div>

                        {/* Scanning line animation */}
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                            className="absolute -bottom-2 h-[2px] bg-electric shadow-[0_0_20px_rgba(0,240,255,0.8)]"
                        />

                        {/* Loading percentage or text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-10 left-0 w-full text-center text-xs text-gray-500 font-mono"
                        >
                            INITIALIZING SYSTEM...
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
