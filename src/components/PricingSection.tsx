import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const features = [
  'Unlimited AI content generation',
  'White-label dashboard',
  'Custom branding',
  'API access',
  'Priority support',
  'Team collaboration',
  'Advanced analytics',
  'Custom domain integration',
  'Multilingual support',
  'Bulk processing capabilities',
  'Regular AI model updates',
  'Export & backup tools'
];

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Limited Time Offer
        </h2>
        <div className="max-w-lg mx-auto">
          <Card className="p-8 card-gradient border-primary/20">
            <div className="text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">White Label Enterprise</h3>
                <div className="flex flex-col items-center gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through">$97</span>
                    <span className="text-4xl font-bold text-white">$47</span>
                    <span className="text-lg text-gray-400">one-time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through">$30</span>
                    <span className="text-2xl font-bold text-white">$15</span>
                    <span className="text-base text-gray-400">/month</span>
                  </div>
                  <span className="text-primary font-semibold">50% OFF Everything!</span>
                </div>
              </div>

              {timeLeft > 0 && (
                <div className="mb-8">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-400">This is a no bullsh*t timer.</p>
                    <div className="bg-gray-900/50 rounded-lg px-6 py-3 border border-primary/20">
                      <span className="font-mono text-3xl text-white">
                        {formatTime(minutes)}:{formatTime(seconds)}
                      </span>
                    </div>
                    <p className="text-sm text-yellow-400">
                      Price goes back to full price when timer ends
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 mb-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full gradient-button"
              >
                Get Started Now
              </Button>

              <p className="text-sm text-gray-400 mt-4">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}