import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedApps } from '@/components/FeaturedApps';
import { Benefits } from '@/components/Benefits';
import { Features } from '@/components/Features';
import { Reviews } from '@/components/Reviews';
import { PricingSection } from '@/components/PricingSection';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

export function Landing() {
  return (
    <div className="min-h-screen w-full bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedApps />
        <Benefits />
        <Features />
        <Reviews />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}