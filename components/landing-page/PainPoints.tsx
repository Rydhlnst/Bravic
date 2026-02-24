"use client";

import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { Zap, Bot, Sparkles, FileText, RefreshCw, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { SectionHeader, SectionBadge } from "./SectionHeader";

const pains = [
    {
        id: "descriptions",
        title: "Manual product description creation eats up hours",
        description: "Writing and updating product details is time-consuming. Our AI generates polished, ready-to-use descriptions instantly.",
        icon: FileText,
        color: "from-orange-500 to-amber-500",
        demo: {
            input: "Write a product description for our eco water bottle.",
            output: "Quench your thirst sustainably with our Eco-Guardian Water Bottle. Crafted from 100% recycled materials, it keeps your drinks cold for 24 hours while protecting the planet."
        }
    },
    {
        id: "multistore",
        title: "Multi-store management is confusing",
        description: "Syncing inventory across Shopee, Tokopedia, and TikTok Shop is a nightmare. Bravix automates stock levels everywhere.",
        icon: RefreshCw,
        color: "from-blue-500 to-cyan-500",
        demo: {
            input: "Sync inventory for 'Eco Bottle' across all channels.",
            output: "Inventory synced: \n• Shopee: 45 units\n• Tokopedia: 45 units\n• TikTok Shop: 45 units\n✓ Conflict resolved successfully."
        }
    },
    {
        id: "seo",
        title: "SEO optimization requires extra resources",
        description: "Hiring SEO experts for thousands of SKUs is expensive. Our AI optimizes metadata for every listing automatically.",
        icon: Search,
        color: "from-purple-500 to-pink-500",
        demo: {
            input: "Optimize SEO metadata for new arrivals.",
            output: "Generated 150 unique meta titles & descriptions. Average SEO score improved from 42 to 98 across all listings."
        }
    }
];

// Memoized demo content untuk mencegah re-render
const DemoContent = memo(({ activePain }: { activePain: typeof pains[0] }) => (
    <motion.div
        key={activePain.id}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
            "relative rounded-3xl p-6 flex items-center justify-center bg-linear-to-br shadow-2xl overflow-hidden aspect-[4/3]",
            activePain.color
        )}
    >
        <div className="w-full max-w-sm flex flex-col relative">
            {/* Float Badge */}
            <div className="absolute -top-6 left-4 z-10">
                <Badge variant="secondary" className="px-3 py-1 rounded-full shadow-lg border border-border/30 flex items-center gap-1.5 bg-background/95 backdrop-blur text-xs font-semibold">
                    <Zap className="w-3 h-3 text-primary fill-primary" />
                    Speed up workflow
                </Badge>
            </div>

            {/* Browser-style Mock */}
            <div className="w-full bg-background rounded-2xl shadow-2xl overflow-hidden border border-border/20">
                {/* Browser toolbar */}
                <div className="bg-muted/50 px-4 py-3 border-b border-border/30 flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 bg-background/60 rounded-md py-1 px-3 border border-border/30 flex items-center gap-2">
                        <Bot className="w-3 h-3 text-muted-foreground" />
                        <span className="text-[10px] text-muted-foreground font-mono truncate">bravix.ai/agent</span>
                    </div>
                </div>

                <div className="p-5 space-y-4 h-[220px] overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
                    {/* User message */}
                    <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm leading-relaxed">
                            {activePain.demo.input}
                        </div>
                    </div>

                    {/* AI Response - tanpa motion per character */}
                    <div className="flex gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center shrink-0 border border-border">
                            <Sparkles className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div className="bg-muted/60 p-3.5 rounded-2xl rounded-tl-sm text-sm text-foreground flex-1 shadow-sm">
                            <div className="whitespace-pre-wrap leading-relaxed">
                                {activePain.demo.output}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
));
DemoContent.displayName = "DemoContent";

// Memoized pain card
const PainCard = memo(({
    pain,
    isActive,
    onClick,
    index
}: {
    pain: typeof pains[0];
    isActive: boolean;
    onClick: () => void;
    index: number;
}) => {
    const Icon = pain.icon;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={onClick}
            className={cn(
                "cursor-pointer relative overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300",
                isActive
                    ? "bg-background/10 border-primary/50 shadow-lg"
                    : "border-white/10 hover:border-white/20 hover:bg-background/5"
            )}
        >
            {/* Active indicator */}
            {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl" />
            )}

            <div className={cn(
                "flex gap-4 pl-1 min-h-[44px]",
                isActive ? "items-start" : "items-center"
            )}>
                <div className={cn(
                    "p-2.5 rounded-xl transition-colors shrink-0",
                    isActive ? "bg-primary/20 text-primary mt-0.5" : "bg-white/10 text-white/50"
                )}>
                    <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                    <p className={cn(
                        "font-semibold text-sm leading-snug transition-colors",
                        isActive ? "text-background" : "text-background/60"
                    )}>
                        {pain.title}
                    </p>

                    {/* Description dengan conditional render tanpa AnimatePresence */}
                    {isActive && (
                        <p className="text-background/50 text-xs leading-relaxed mt-2">
                            {pain.description}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
});
PainCard.displayName = "PainCard";

export const PainPoints = () => {
    const [activePain, setActivePain] = useState(pains[0]);

    return (
        <section className="bg-background min-h-screen flex items-center py-24 px-4 sm:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <div className="bg-foreground rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">

                    {/* Header - Standar dengan variant light untuk dark bg */}
                    <div className="text-center mb-14 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex items-center justify-center mb-4"
                        >
                            <SectionBadge icon={Zap} variant="light">
                                Pain Points
                            </SectionBadge>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight max-w-3xl mx-auto leading-[1.1]"
                        >
                            B2B Operations Are Slower Than They Should Be
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
                        {/* Left: AI Agent Demo */}
                        <DemoContent activePain={activePain} />

                        {/* Right: Pain cards */}
                        <div className="flex items-center justify-center">
                            <div className="space-y-3 w-full">
                                {pains.map((pain, index) => (
                                    <PainCard
                                        key={pain.id}
                                        pain={pain}
                                        isActive={activePain.id === pain.id}
                                        onClick={() => setActivePain(pain)}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
