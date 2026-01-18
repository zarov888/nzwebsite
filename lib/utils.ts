import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to merge tailwind classes cleanly
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Simple delay helper for async simulations if needed
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
