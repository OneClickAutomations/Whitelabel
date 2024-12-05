import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold gradient-text">
            ElevenSaaS
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            {[
              { Icon: Twitter, href: '#' },
              { Icon: Facebook, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Youtube, href: '#' },
              { Icon: Linkedin, href: '#' }
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <Link to="/signin">
            <Button variant="ghost" className="border border-primary hover:bg-primary/10">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}