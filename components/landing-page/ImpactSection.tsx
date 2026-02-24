"use client";

import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowUpRight, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SectionHeader, SectionBadge } from "./SectionHeader";

const impactItems = [
    {
        id: "faster-listing",
        title: "Faster Listing",
        // Gunakan gambar yang lebih kecil dan optimize
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        metric: "85%",
        metricLabel: "faster time-to-market",
        description: "List thousands of products in minutes, not days. Automated mapping handles the complexity."
    },
    {
        id: "search-visibility",
        title: "Search Visibility",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        metric: "3.2x",
        metricLabel: "increase in organic search traffic",
        description: "SEO-optimized product data ensures your products appear at the top of marketplace results."
    },
    {
        id: "boosted-sales",
        title: "Boosted Sales",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
        metric: "+42%",
        metricLabel: "average revenue growth",
        description: "Scale your distribution globally and tap into new markets with multi-channel integration."
    },
    {
        id: "fewer-errors",
        title: "Fewer Errors",
        imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop",
        metric: "100+",
        metricLabel: "stores managed seamlessly",
        description: "Accurate, real-time data sync reduces customer support tickets by over 60%."
    }
];

// Memoized accordion item untuk mengurangi re-render
const ImpactAccordionItem = memo(({ item, isActive, onHover, onClick }: {
    item: typeof impactItems[0];
    isActive: boolean;
    onHover: () => void;
    onClick: () => void;
}) => {
    return (
        <motion.div
            onClick={onClick}
            onMouseEnter={onHover}
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group",
                isActive ? "flex-[4]" : "flex-[1] brightness-90 md:brightness-100"
            )}
            layout
        >
            {/* Background Image dengan Next.js Image untuk optimasi */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover grayscale brightness-[0.35] transition-all duration-700 group-hover:scale-[1.03]"
                    priority={item.id === "fewer-errors"}
                />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

            {/* Collapsed label */}
            <AnimatePresence mode="wait">
                {!isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    >
                        <span className="text-xs font-bold text-white/50 uppercase tracking-[0.25em] whitespace-nowrap md:[writing-mode:vertical-lr]">
                            {item.title}
                        </span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Expanded content */}
            <div className={cn(
                "absolute inset-x-0 bottom-0 p-8 lg:p-10 z-20 transition-all duration-500",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
            )}>
                {/* Label kecil standar */}
                <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-3 block">
                    {item.title}
                </span>
                <div className="text-5xl md:text-6xl font-bold text-white mb-1 font-mono tracking-tighter">
                    {item.metric}
                </div>
                <div className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">
                    {item.metricLabel}
                </div>
                <p className="text-white/70 max-w-sm text-sm md:text-base leading-relaxed mb-6">
                    {item.description}
                </p>
                <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-primary transition-all group/btn">
                    <ArrowUpRight className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                </button>
            </div>
        </motion.div>
    );
});
ImpactAccordionItem.displayName = "ImpactAccordionItem";

export const ImpactSection = () => {
    const [activeId, setActiveId] = useState<string>("fewer-errors");

    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header - Standar dengan align center */}
                <div className="mb-14">
                    <SectionHeader
                        badge={{ icon: BarChart, text: "Impact" }}
                        title="B2B Made Simple."
                        highlight="Growth Made Inevitable."
                        align="center"
                    />
                </div>

                {/* Horizontal Accordion */}
                <div
                    className="flex flex-col md:flex-row gap-3 h-[580px] md:h-[480px] rounded-3xl overflow-hidden"
                >
                    {impactItems.map((item) => (
                        <ImpactAccordionItem
                            key={item.id}
                            item={item}
                            isActive={activeId === item.id}
                            onHover={() => setActiveId(item.id)}
                            onClick={() => setActiveId(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
