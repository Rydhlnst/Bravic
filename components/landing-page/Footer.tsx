"use client";

import React, { memo } from "react";
import Link from "next/link";
import { Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "#" },
        ],
    },
    {
        title: "Sales",
        links: [
            { label: "AI Automation", href: "#" },
            { label: "B2B Marketplace", href: "#" },
            { label: "Multi-Store", href: "#" },
        ],
    },
    {
        title: "Industries",
        links: [
            { label: "Wholesale", href: "#" },
            { label: "Manufacturing", href: "#" },
            { label: "Distribution", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
];

// Memoized link column
const LinkColumn = memo(({ col }: { col: typeof footerLinks[0] }) => (
    <div>
        <h4 className="font-bold text-[10px] mb-5 text-background/40 uppercase tracking-[0.15em]">
            {col.title}
        </h4>
        <ul className="space-y-3.5">
            {col.links.map((link) => (
                <li key={link.label}>
                    <Link
                        href={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors duration-200 flex items-center gap-1"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
));
LinkColumn.displayName = "LinkColumn";

export const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 pb-6 bg-background antialiased">
            <div
                className="max-w-7xl mx-auto bg-foreground text-background rounded-[2.5rem] py-14 px-8 sm:px-14 shadow-2xl overflow-hidden relative"
            >
                {/* Subtle decorative glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16 relative z-10">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2.5 group w-fit">
                            <span className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                                bravix
                            </span>
                        </Link>
                        <div className="flex flex-row md:flex-col justify-between items-end md:items-start gap-4 md:gap-6 w-full">
                            <p className="text-background/50 text-sm leading-relaxed max-w-[200px]">
                                AI-powered B2B platform for modern businesses.
                            </p>
                            {/* Social links */}
                            <div className="flex items-center gap-3">
                                {[
                                    { Icon: Linkedin, label: "LinkedIn" },
                                    { Icon: Facebook, label: "Facebook" },
                                ].map(({ Icon, label }) => (
                                    <Link
                                        key={label}
                                        href="#"
                                        aria-label={label}
                                        className="w-8 h-8 rounded-lg bg-background/10 hover:bg-background/20 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200"
                                    >
                                        <Icon className="w-3.5 h-3.5 text-background/60 hover:text-background transition-colors" />
                                    </Link>
                                ))}
                                <Link
                                    href="#"
                                    aria-label="X (Twitter)"
                                    className="w-8 h-8 rounded-lg bg-background/10 hover:bg-background/20 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-200"
                                >
                                    <span className="text-xs font-bold text-background/60 hover:text-background transition-colors leading-none">𝕏</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((col) => (
                        <LinkColumn key={col.title} col={col} />
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                    <p className="text-xs text-background/40 font-medium">
                        © 2026 Bravix, Inc. All rights reserved.
                    </p>
                    <Link
                        href="#"
                        className="flex items-center gap-1.5 text-xs font-semibold text-background/50 hover:text-background transition-colors duration-200 group"
                    >
                        Start for free
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};
