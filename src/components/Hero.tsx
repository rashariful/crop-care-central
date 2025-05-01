
import React from 'react';
import { Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  showButton?: boolean;
}

const Hero = ({ title, subtitle, showButton = true }: HeroProps) => {
  return (
    <div className="hero-section">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="flex justify-center mb-6">
          <Sprout className="h-16 w-16 text-agri-green" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agri-green mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        {showButton && (
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/farming-guides">
              <Button className="agri-btn text-lg px-6 py-5">Explore Farming Guides</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="agri-btn-outline text-lg px-6 py-5">Contact Experts</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
