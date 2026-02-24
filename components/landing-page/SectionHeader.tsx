"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

// Standar badge style untuk semua section
interface SectionBadgeProps {
    icon?: LucideIcon;
    children: React.ReactNode;
    variant?: "default" | "light" | "dark";
    className?: string;
}

export const SectionBadge = memo(({
    icon: Icon,
    children,
    variant = "default",
    className
}: SectionBadgeProps) => {
    const variants = {
        default: "bg-primary/10 border-primary/20 text-primary",
        light: "bg-background/10 border-white/20 text-white",
        dark: "bg-foreground/10 border-foreground/20 text-foreground",
    };

    return (
        <div className={cn(
            "inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-sm backdrop-blur-sm",
            variants[variant],
            className
        )}>
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span className="text-[10px] font-black uppercase tracking-widest mt-0.5">
                {children}
            </span>
        </div>
    );
});
SectionBadge.displayName = "SectionBadge";

// Standar title style untuk semua section
interface SectionTitleProps {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3";
    size?: "sm" | "md" | "lg" | "xl";
    align?: "left" | "center";
    className?: string;
    highlight?: string;
}

export const SectionTitle = memo(({
    children,
    as: Component = "h2",
    size = "lg",
    align = "left",
    className,
    highlight
}: SectionTitleProps) => {
    const sizes = {
        sm: "text-2xl md:text-3xl",
        md: "text-3xl md:text-4xl",
        lg: "text-3xl md:text-5xl lg:text-6xl",
        xl: "text-4xl md:text-6xl lg:text-7xl",
    };

    const content = highlight ? (
        <>
            {children}
            <br />
            <span className="text-primary">{highlight}</span>
        </>
    ) : (
        children
    );

    return (
        <Component
            className={cn(
                "font-bold tracking-tight leading-[1.1]",
                sizes[size],
                align === "center" && "text-center",
                className
            )}
        >
            {content}
        </Component>
    );
});
SectionTitle.displayName = "SectionTitle";

// Standar description style
interface SectionDescriptionProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    align?: "left" | "center";
    className?: string;
    maxWidth?: boolean;
}

export const SectionDescription = memo(({
    children,
    size = "md",
    align = "left",
    className,
    maxWidth = true
}: SectionDescriptionProps) => {
    const sizes = {
        sm: "text-sm",
        md: "text-base md:text-lg",
        lg: "text-lg md:text-xl",
    };

    return (
        <p className={cn(
            "text-muted-foreground leading-relaxed",
            sizes[size],
            align === "center" && "text-center",
            maxWidth && "max-w-xl",
            className
        )}>
            {children}
        </p>
    );
});
SectionDescription.displayName = "SectionDescription";

// Kombinasi lengkap header section
interface SectionHeaderProps {
    badge?: {
        icon?: LucideIcon;
        text: string;
        variant?: "default" | "light" | "dark";
    };
    title: React.ReactNode;
    highlight?: string;
    description?: string;
    align?: "left" | "center";
    titleSize?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export const SectionHeader = memo(({
    badge,
    title,
    highlight,
    description,
    align = "left",
    titleSize = "lg",
    className
}: SectionHeaderProps) => {
    return (
        <div className={cn(
            "space-y-4",
            align === "center" && "text-center flex flex-col items-center",
            className
        )}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={cn(align === "center" && "mx-auto")}
                >
                    <SectionBadge
                        icon={badge.icon}
                        variant={badge.variant}
                    >
                        {badge.text}
                    </SectionBadge>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
            >
                <SectionTitle
                    size={titleSize}
                    align={align}
                    highlight={highlight}
                >
                    {title}
                </SectionTitle>
            </motion.div>

            {description && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2 }}
                    className={cn(align === "center" && "mx-auto")}
                >
                    <SectionDescription align={align}>
                        {description}
                    </SectionDescription>
                </motion.div>
            )}
        </div>
    );
});
SectionHeader.displayName = "SectionHeader";
