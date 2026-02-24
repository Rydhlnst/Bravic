"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "./SectionHeader";

const benefits = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
];

// Memoized benefit item
const BenefitItem = memo(({ text }: { text: string }) => (
    <div className="flex items-center gap-2 text-white/80 text-sm">
        <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
        <span>{text}</span>
    </div>
));
BenefitItem.displayName = "BenefitItem";

export const FinalCTA = () => {
    return (
        <section className="py-20 bg-background px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden"
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
                
                {/* Grid pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {/* Content - Centered Layout */}
                <div className="relative z-10 flex flex-col items-center text-center gap-8">
                    {/* Badge */}
                    <SectionBadge icon={Sparkles} variant="light">
                        Get started today
                    </SectionBadge>

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl">
                        Ready to Automate & Grow Your B2B Business?
                    </h2>

                    {/* Description */}
                    <p className="text-white/80 text-lg font-medium max-w-xl">
                        Our AI platform helps you save time, reduce errors, and grow faster — starting from day one.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 flex-wrap justify-center">
                        {benefits.map((b) => (
                            <BenefitItem key={b} text={b} />
                        ))}
                    </div>

                    {/* CTA Button - Large and centered */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-7 rounded-2xl font-bold shadow-2xl shadow-black/20 transition-all group gap-3 h-auto"
                        >
                            Start for free
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Trust text */}
                    <p className="text-white/50 text-xs mt-2">
                        Trusted by 500+ businesses worldwide
                    </p>
                </div>
            </motion.div>
        </section>
    );
};
