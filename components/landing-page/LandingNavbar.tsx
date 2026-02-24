"use client";

import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, memo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Github,
    Star,
    Zap,
    Search,
    ShieldCheck,
    BookOpen,
    MessageSquare,
    PlayCircle,
    Building2,
    Users,
    BarChart3,
    Bot,
    ArrowRight,
    Store,
    Truck,
    ShoppingBag,
    Globe,
    Cpu,
    FileText,
    GraduationCap,
    HeadphonesIcon,
    Sparkles,
    Menu,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ────────────── Data ────────────── */

const featuresData = {
    heading: "Everything you need to sell smarter",
    sub: "Our AI platform automates your entire B2B workflow from product listings to multi-channel sync.",
    cta: { label: "Explore all features", href: "#" },
    groups: [
        {
            label: "AI Tools",
            items: [
                { title: "AI Listing Builder", description: "Generate high-converting product listings instantly.", icon: Sparkles, href: "#" },
                { title: "Smart SEO Optimizer", description: "Rank higher with AI-powered keyword optimization.", icon: Search, href: "#" },
                { title: "Fast Sync", description: "Keep multi-store inventory in real-time sync.", icon: Zap, href: "#" },
            ]
        },
        {
            label: "Operations",
            items: [
                { title: "Enterprise Security", description: "Top-tier protection for your B2B data.", icon: ShieldCheck, href: "#" },
                { title: "AI Integrations", description: "Connect your existing tools via our smart API.", icon: Cpu, href: "#" },
                { title: "Analytics Dashboard", description: "Real-time insights for smarter decisions.", icon: BarChart3, href: "#" },
            ]
        }
    ]
};

const solutionsData = {
    heading: "Built for every B2B business",
    sub: "Whether you're a manufacturer, distributor, or retailer — Bravix adapts to your exact workflow.",
    cta: { label: "View all solutions", href: "#" },
    groups: [
        {
            label: "By Industry",
            items: [
                { title: "Manufacturing", description: "Streamline factory-to-store operations.", icon: Building2, href: "/solutions/manufacturing" },
                { title: "Food & Beverage", description: "Manage perishables and multi-outlet distribution.", icon: Store, href: "/solutions/fnb" },
                { title: "Distribution", description: "Automate your supply chain end-to-end.", icon: Truck, href: "#" },
            ]
        },
        {
            label: "By Team",
            items: [
                { title: "For Retailers", description: "Scale retail with AI-powered logistics.", icon: ShoppingBag, href: "#" },
                { title: "For Global Teams", description: "Operate across borders with multi-currency support.", icon: Globe, href: "#" },
                { title: "AI Partnerships", description: "Grow together via our reseller programs.", icon: Bot, href: "#" },
            ]
        }
    ]
};

const resourcesData = {
    heading: "Explore our knowledge hub",
    sub: "Guides, case studies, and tools to help you get the most out of Bravix.",
    cta: { label: "View all resources", href: "#" },
    groups: [
        {
            label: "Resources",
            items: [
                { title: "Documentation", description: "Everything to get started fast.", icon: BookOpen, href: "#" },
                { title: "Blog", description: "Insights, trends and product news.", icon: FileText, href: "#" },
                { title: "Video Tutorials", description: "Step-by-step guides to master the platform.", icon: PlayCircle, href: "#" },
                { title: "Academy", description: "Structured learning paths for your team.", icon: GraduationCap, href: "#" },
            ]
        },
        {
            label: "About",
            items: [
                { title: "Community", description: "Join B2B leaders and experts.", icon: MessageSquare, href: "#" },
                { title: "Support Center", description: "Get help from our expert team.", icon: HeadphonesIcon, href: "#" },
                { title: "Become a Partner", description: "Grow with our reseller program.", icon: Users, href: "#" },
            ]
        }
    ]
};

type NavData = typeof featuresData;

/* ────────────── Logo Component ────────────── */

const Logo = () => (
    <Link href="/" className="flex items-center gap-2.5 group">
        <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            bravix
        </span>
    </Link>
);

/* ────────────── Desktop Mega Dropdown ────────────── */

const MegaDropdown = memo(({ data, isOpen, parentRef }: { data: NavData; isOpen: boolean; parentRef: React.RefObject<HTMLDivElement | null> }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    const updatePosition = useCallback(() => {
        if (!isOpen || !containerRef.current || !parentRef.current) return;

        const container = containerRef.current;
        const parent = parentRef.current;
        const parentRect = parent.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const padding = 20;
        const menuWidth = 720; // fixed width of the menu

        // The menu is centered at the parent's horizontal center
        const parentCenter = parentRect.left + parentRect.width / 2;
        const idealLeft = parentCenter - menuWidth / 2;
        const idealRight = parentCenter + menuWidth / 2;

        let shift = 0;
        if (idealRight > viewportWidth - padding) {
            shift = viewportWidth - padding - idealRight;
        } else if (idealLeft < padding) {
            shift = padding - idealLeft;
        }

        setOffset(shift);
    }, [isOpen, parentRef]);

    useLayoutEffect(() => {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [updatePosition]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        x: `calc(-50% + ${offset}px)`
                    }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                    style={{ left: "50%" }}
                    className="hidden md:block absolute top-full mt-3 w-[720px] max-w-[95vw] rounded-2xl bg-white border border-border/50 shadow-2xl shadow-black/5 overflow-hidden z-50"
                >
                    <div className="flex">
                        {/* Left panel */}
                        <div className="w-56 shrink-0 bg-muted/30 p-6 flex flex-col justify-between gap-6 border-r border-border/30">
                            <div className="space-y-3">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-wider">Bravix</p>
                                <h3 className="text-sm font-semibold text-foreground leading-snug">{data.heading}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">{data.sub}</p>
                            </div>
                            <Link
                                href={data.cta.href}
                                className="group/link flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                            >
                                {data.cta.label}
                                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right columns */}
                        <div className="flex flex-1 divide-x divide-border/30">
                            {data.groups.map((group) => (
                                <div key={group.label} className="flex-1 p-5 flex flex-col gap-1">
                                    <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider px-2 mb-3">{group.label}</p>
                                    {group.items.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-muted/60 transition-colors group/item"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-foreground leading-tight group-hover/item:text-primary transition-colors">{item.title}</p>
                                                <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">{item.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
MegaDropdown.displayName = "MegaDropdown";

/* ────────────── Desktop Nav Item ────────────── */

type NavItemProps = {
    label: string;
    data?: NavData;
    openItem: string | null;
    setOpenItem: (v: string | null) => void;
    href?: string;
};

const NavItem = memo(({ label, data, openItem, setOpenItem, href }: NavItemProps) => {
    const isOpen = openItem === label;
    const hasDropdown = !!data;
    const itemRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = useCallback(() => {
        if (hasDropdown) setOpenItem(label);
    }, [hasDropdown, label, setOpenItem]);

    const handleMouseLeave = useCallback(() => {
        if (hasDropdown) setOpenItem(null);
    }, [hasDropdown, setOpenItem]);

    const handleClick = useCallback(() => {
        if (hasDropdown) setOpenItem(isOpen ? null : label);
    }, [hasDropdown, isOpen, label, setOpenItem]);

    const content = (
        <button
            onClick={handleClick}
            className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isOpen
                    ? "text-foreground bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
        >
            {label}
            {hasDropdown && (
                <ChevronDown
                    className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")}
                />
            )}
        </button>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="hidden md:flex items-center px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            >
                {label}
            </Link>
        );
    }

    return (
        <div
            ref={itemRef}
            className="hidden md:block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {content}
            {data && <MegaDropdown data={data} isOpen={isOpen} parentRef={itemRef} />}
        </div>
    );
});
NavItem.displayName = "NavItem";

/* ────────────── Social Proof Button ────────────── */

const GithubStars = memo(() => (
    <Link
        href="https://github.com/bravix/bravix"
        target="_blank"
        className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 hover:border-border transition-all duration-200 group"
    >
        <Github className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-foreground">2.4k</span>
        </div>
    </Link>
));
GithubStars.displayName = "GithubStars";

/* ────────────── Mobile Menu Components ────────────── */

const MobileMenuItem = memo(({
    label,
    data,
    isOpen,
    onToggle,
    href
}: {
    label: string;
    data?: NavData;
    isOpen: boolean;
    onToggle: () => void;
    href?: string;
}) => {
    if (href) {
        return (
            <Link
                href={href}
                className="flex items-center justify-between py-3 px-4 text-base font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
                {label}
            </Link>
        );
    }

    return (
        <div className="border-b border-border/50 last:border-0">
            <button
                onClick={onToggle}
                className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
                {label}
                {data && (
                    <ChevronDown
                        className={cn("w-5 h-5 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")}
                    />
                )}
            </button>

            <AnimatePresence>
                {isOpen && data && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 space-y-4">
                            {/* Mobile: Show heading and CTA */}
                            <div className="bg-muted/30 rounded-xl p-4">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Bravix</p>
                                <h3 className="text-sm font-semibold text-foreground mb-1">{data.heading}</h3>
                                <p className="text-xs text-muted-foreground mb-3">{data.sub}</p>
                                <Link
                                    href={data.cta.href}
                                    className="group/link flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                                >
                                    {data.cta.label}
                                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Groups */}
                            <div className="space-y-4">
                                {data.groups.map((group) => (
                                    <div key={group.label}>
                                        <p className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-wider px-2 mb-2">
                                            {group.label}
                                        </p>
                                        <div className="space-y-1">
                                            {group.items.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-muted/50 transition-colors group/item"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-colors">
                                                        <item.icon className="w-4 h-4 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-foreground leading-tight group-hover/item:text-primary transition-colors">
                                                            {item.title}
                                                        </p>
                                                        <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});
MobileMenuItem.displayName = "MobileMenuItem";

const MobileMenu = memo(({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    // Close all accordions when menu closes
    useEffect(() => {
        if (!isOpen) setOpenItem(null);
    }, [isOpen]);

    const handleToggle = (label: string) => {
        setOpenItem(openItem === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 md:hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between h-16 px-4 border-b border-border/50">
                            <Logo />
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
                            <MobileMenuItem
                                label="Products"
                                data={featuresData}
                                isOpen={openItem === "Products"}
                                onToggle={() => handleToggle("Products")}
                            />
                            <MobileMenuItem
                                label="Playground"
                                href="#demo"
                                isOpen={false}
                                onToggle={() => { }}
                            />
                            <MobileMenuItem
                                label="Docs"
                                href="#docs"
                                isOpen={false}
                                onToggle={() => { }}
                            />
                            <MobileMenuItem
                                label="Pricing"
                                href="#pricing"
                                isOpen={false}
                                onToggle={() => { }}
                            />
                            <MobileMenuItem
                                label="Blog"
                                href="#blog"
                                isOpen={false}
                                onToggle={() => { }}
                            />
                            <MobileMenuItem
                                label="Solutions"
                                data={solutionsData}
                                isOpen={openItem === "Solutions"}
                                onToggle={() => handleToggle("Solutions")}
                            />
                            <MobileMenuItem
                                label="Resources"
                                data={resourcesData}
                                isOpen={openItem === "Resources"}
                                onToggle={() => handleToggle("Resources")}
                            />

                            {/* Mobile CTA */}
                            <div className="mt-6 px-4 space-y-3">
                                <Link
                                    href="https://github.com/bravix/bravix"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                    <span className="text-sm font-semibold">2.4k stars</span>
                                </Link>
                                <Button
                                    className="w-full rounded-lg py-5 font-semibold text-sm shadow-lg shadow-primary/20"
                                >
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
});
MobileMenu.displayName = "MobileMenu";

/* ────────────── Main Navbar ────────────── */

export const LandingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openItem, setOpenItem] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest("[data-navbar]")) setOpenItem(null);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className={cn(
                    "fixed left-0 right-0 z-50 transition-all duration-300",
                    scrolled ? "top-0" : "top-0"
                )}
            >
                <nav
                    data-navbar
                    className={cn(
                        "mx-auto transition-all duration-300 border-b",
                        scrolled
                            ? "bg-background/95 backdrop-blur-xl border-border/50 shadow-sm"
                            : "bg-background border-transparent"
                    )}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-16 md:h-18">
                            {/* Logo */}
                            <Logo />

                            {/* Desktop Nav */}
                            <div className="hidden md:flex items-center gap-0.5">
                                <NavItem label="Products" data={featuresData} openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Playground" href="#demo" openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Docs" href="#docs" openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Pricing" href="#pricing" openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Blog" href="#blog" openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Solutions" data={solutionsData} openItem={openItem} setOpenItem={setOpenItem} />
                                <NavItem label="Resources" data={resourcesData} openItem={openItem} setOpenItem={setOpenItem} />
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-3">
                                <GithubStars />

                                <Button
                                    size="sm"
                                    className="hidden md:inline-flex rounded-lg px-5 font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
                                >
                                    Sign up
                                </Button>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
        </>
    );
};
