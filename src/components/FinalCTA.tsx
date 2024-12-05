import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/80 to-background">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
          Ready to Revolutionize Your Content Creation?
        </h2>
        <Button
          size="lg"
          className="gradient-button"
        >
          <Rocket className="mr-2 h-5 w-5" />
          Start Your Free Trial Now
        </Button>
      </div>
    </section>
  );
}