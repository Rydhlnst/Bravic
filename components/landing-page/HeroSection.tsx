"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Package, Zap, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { memo } from "react";
import { ShopifyLogo, StripeLogo, NotionLogo, FigmaLogo, GitHubLogo } from "@/components/ui/company-logos";
import Image from "next/image";

const trustedBy = [
    { name: "Shopify", Logo: ShopifyLogo },
    { name: "Stripe", Logo: StripeLogo },
    { name: "Notion", Logo: NotionLogo },
    { name: "Figma", Logo: FigmaLogo },
    { name: "GitHub", Logo: GitHubLogo },
];

// Real user avatars from Unsplash
const userAvatars = [
    {
        name: "Sarah Chen",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Michael Park",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Emily Johnson",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
];

// Simple fade in variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

// Optimized Dashboard Preview dengan memo
const DashboardPreview = memo(() => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Main card */}
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        >
            {/* Top bar */}
            <div className="bg-muted/40 px-4 py-3 flex items-center gap-3 border-b border-border">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="flex-1 bg-background/60 rounded-md py-0.5 px-3 border border-border/50 text-[10px] text-muted-foreground font-mono">
                    bravix.ai/dashboard
                </div>
            </div>
            {/* Stats row */}
            <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
                {[
                    { label: "Revenue", value: "$84.2k", icon: TrendingUp, up: true },
                    { label: "Orders", value: "1,240", icon: Package, up: true },
                    { label: "Stores", value: "14", icon: BarChart3, up: false },
                ].map((stat) => (
                    <div key={stat.label} className="p-4 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                            <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</span>
                            <stat.icon className={cn("w-3 h-3", stat.up ? "text-green-500" : "text-primary")} />
                        </div>
                        <p className="text-base font-black tracking-tight text-foreground">{stat.value}</p>
                        <p className="text-[9px] text-green-500 font-bold">↑ 12.4%</p>
                    </div>
                ))}
            </div>
            {/* Product list - sederhana tanpa motion per item */}
            <div className="p-4 space-y-2.5">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Recent Syncs</p>
                {[
                    { name: "Eco Water Bottle", stores: 3, status: "Synced" },
                    { name: "Carbon Fiber Bag", stores: 5, status: "Synced" },
                    { name: "Solar Power Bank", stores: 2, status: "Pending" },
                ].map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-muted/20 border border-border/30 hover:border-primary/20 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                                <Package className="w-2.5 h-2.5 text-primary" />
                            </div>
                            <span className="text-[10px] font-semibold text-foreground/80">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] text-muted-foreground">{item.stores} stores</span>
                            <span className={cn(
                                "text-[8px] font-bold px-1.5 py-0.5 rounded-full border",
                                item.status === "Synced"
                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                    : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            )}>
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Floating AI badge - sederhana */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute -top-4 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
        >
            <Zap className="w-3 h-3 fill-current" />
            AI Syncing...
        </motion.div>

        {/* Floating metric - sederhana */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="absolute -bottom-3 -left-4 bg-background border border-border rounded-xl px-3 py-2 shadow-xl"
        >
            <p className="text-[8px] text-muted-foreground font-bold uppercase tracking-widest">Sales Growth</p>
            <p className="text-sm font-black text-foreground">+42% <span className="text-green-500 text-[10px]">this month</span></p>
        </motion.div>
    </div>
));
DashboardPreview.displayName = "DashboardPreview";

export function HeroSection() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground flex flex-col justify-between relative overflow-hidden">

            <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-32 pb-20 flex-1">
                {/* Left Content Area */}
                <div className="flex-1 flex flex-col items-start gap-7 z-10 w-full">
                    {/* Badge - Standar */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-muted/70 border border-border cursor-pointer group transition-colors hover:border-primary/30"
                    >
                        <Badge className="bg-foreground text-background hover:bg-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-[10px] gap-1 px-2.5">
                            <Zap className="w-3 h-3 fill-current" />
                            New
                        </Badge>
                        <span className="text-muted-foreground font-medium text-sm">Custom Commission Plans</span>
                        <ChevronRight size={12} className="text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </motion.div>

                    {/* Headline - Standar */}
                    <motion.h1
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-heading leading-[1.1]"
                    >
                        Transform Your<br />
                        <span className="text-primary">B2B Business</span><br />
                        with AI
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
                    >
                        Automatically create product listings, optimize SEO, and manage multi-store operations — all in one smart platform.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
                    >
                        <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30">
                            Try for Free
                        </Button>
                        <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold border-border text-foreground hover:bg-accent transition-all hover:-translate-y-0.5">
                            See Demo
                        </Button>
                    </motion.div>

                    {/* Social proof dengan avatar real */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                        <div className="flex -space-x-2">
                            {userAvatars.map((user, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-background overflow-hidden relative"
                                    title={user.name}
                                >
                                    <Image
                                        src={user.image}
                                        alt={user.name}
                                        fill
                                        className="object-cover"
                                        sizes="32px"
                                    />
                                </div>
                            ))}
                        </div>
                        <span><strong className="text-foreground">500+</strong> businesses trust Bravix</span>
                    </motion.div>
                </div>

                {/* Right: Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 w-full relative min-h-[320px] sm:min-h-[420px] lg:min-h-[480px] flex items-center justify-center px-4 sm:px-8"
                >
                    <DashboardPreview />
                </motion.div>
            </main>

            {/* Trust bar dengan logo nyata */}
            <div className="border-t border-border bg-background/60 backdrop-blur-sm w-full py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center gap-8">
                    <div className="flex flex-col gap-0.5 shrink-0">
                        <p className="font-semibold text-foreground text-sm">Trusted by fast-growing businesses</p>
                        <p className="text-muted-foreground text-xs">Empowering the next generation of B2B leaders</p>
                    </div>
                    <div className="h-px w-px bg-border shrink-0 hidden sm:block self-stretch" />
                    <div className="flex flex-row flex-wrap items-center gap-x-8 gap-y-3 opacity-50 hover:opacity-80 transition-opacity duration-500">
                        {trustedBy.map((company) => (
                            <div
                                key={company.name}
                                className="flex items-center gap-2 text-foreground"
                                title={company.name}
                            >
                                <company.Logo className="w-5 h-5" />
                                <span className="font-semibold text-sm tracking-tight">{company.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
