import { Play, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground py-20 pt-32">
      <div className="container px-4 mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Unleash the Power of AI: Your White-Label Content Revolution
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Transform your business with ElevenSaaS - The ultimate AI content generation platform
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="gradient-button"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Your Free Trial
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="border border-primary hover:bg-primary/10"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}