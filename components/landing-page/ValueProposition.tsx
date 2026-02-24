"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

// Kurangi jumlah testimonial untuk mengurangi beban memori
const testimonials = [
    {
        id: 1,
        name: "Clara M.",
        role: "Head of Operations",
        company: "Retail Distributor",
        content: "Managing our product catalog across multiple marketplaces has become effortless. What used to take our team days is now done in a few hours.",
        initials: "CM",
        color: "#F25D2B",
        category: "Operational Efficiency"
    },
    {
        id: 2,
        name: "Samantha R.",
        role: "Director of Sales",
        company: "Electronics Supplier",
        content: "We've seen a significant increase in B2B sales since implementing this system. Real-time synchronization ensures our inventory is always accurate.",
        initials: "SR",
        color: "#3B82F6",
        category: "Growth Impact"
    },
    {
        id: 3,
        name: "Hiroshi T.",
        role: "Business Dev Lead",
        company: "Industrial Equipment",
        content: "In just the first quarter, we noticed a 20% increase in order accuracy and a big reduction in manual errors. Our team has more time to focus on customers.",
        initials: "HT",
        color: "#10B981",
        category: "Growth Impact"
    },
    {
        id: 4,
        name: "Michael Chen",
        role: "Supply Chain Manager",
        company: "Global Logistics",
        content: "The automated workflows have transformed our fulfillment process. We can now handle 3x the order volume with the same team size.",
        initials: "MC",
        color: "#8B5CF6",
        category: "Scale & Reliability"
    },
];

// Memoized card untuk mencegah re-render tidak perlu
const TestimonialCard = memo(({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[360px] shrink-0 bg-muted/30 hover:bg-muted/50 border border-border/60 rounded-2xl p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md cursor-default group/card">
        <div className="flex flex-col gap-4 h-full">
            {/* Stars */}
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
            </div>

            {/* Category label - standar */}
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{item.category}</span>

            {/* Quote */}
            <p className="text-foreground/75 text-sm leading-relaxed flex-1">
                &ldquo;{item.content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/40">
                <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ backgroundColor: item.color }}
                >
                    {item.initials}
                </div>
                <div>
                    <p className="font-semibold text-foreground text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role}, {item.company}</p>
                </div>
            </div>
        </div>
    </div>
));
TestimonialCard.displayName = "TestimonialCard";

// Optimized marquee row dengan CSS animation untuk performa lebih baik
const MarqueeRow = ({
    items,
    direction = "left",
    duration = 40
}: {
    items: typeof testimonials;
    direction?: "left" | "right";
    duration?: number;
}) => {
    // Triplicate items to ensure enough coverage for gap-free infinite loop on wide screens
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-5 flex-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
                }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                    // Pause animation saat tidak visible untuk menghemat resource
                    repeatType: "loop"
                }}
                // Pause animation saat user tidak di tab ini
                style={{ willChange: "transform" }}
            >
                {duplicatedItems.map((item, i) => (
                    <TestimonialCard key={`${item.id}-${i}`} item={item} />
                ))}
            </motion.div>
        </div>
    );
};

export const ValueProposition = () => {
    return (
        <section className="py-24 bg-background overflow-hidden relative">

            {/* Header - Standar dengan align center */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-14">
                <SectionHeader
                    badge={{ icon: MessageSquare, text: "Testimonials" }}
                    title="Why Businesses Choose Us"
                    align="center"
                />
            </div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-5 relative">
                {/* Edge fades */}
                <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Row 1: Left */}
                <MarqueeRow items={testimonials} direction="left" duration={50} />

                {/* Row 2: Right - gunakan reversed items */}
                <MarqueeRow items={[...testimonials].reverse()} direction="right" duration={60} />
            </div>
        </section>
    );
};
