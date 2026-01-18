import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverGlow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverGlow = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500",
                    hoverGlow && "group hover:border-electric/50 hover:shadow-[0_0_50px_-10px_rgba(0,240,255,0.15)]",
                    className
                )}
                {...props}
            >
                {hoverGlow && (
                    <div className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                )}
                {props.children}
            </div>
        );
    }
);

Card.displayName = "Card";
