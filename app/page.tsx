import dynamic from "next/dynamic";
import { LandingNavbar } from "@/components/landing-page/LandingNavbar";
import { HeroSection } from "@/components/landing-page/HeroSection";

// Lazy load below-the-fold components to reduce initial JS payload and memory usage
const PainPoints = dynamic(() => import("@/components/landing-page/PainPoints").then(mod => mod.PainPoints));
const HowItWorks = dynamic(() => import("@/components/landing-page/HowItWorks").then(mod => mod.HowItWorks));
const ImpactSection = dynamic(() => import("@/components/landing-page/ImpactSection").then(mod => mod.ImpactSection));
const ValueProposition = dynamic(() => import("@/components/landing-page/ValueProposition").then(mod => mod.ValueProposition));
const FinalCTA = dynamic(() => import("@/components/landing-page/FinalCTA").then(mod => mod.FinalCTA));
const Footer = dynamic(() => import("@/components/landing-page/Footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingNavbar />
      <HeroSection />
      <PainPoints />
      <HowItWorks />
      <ImpactSection />
      <ValueProposition />
      <FinalCTA />
      <Footer />
    </main>
  );
}

