
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const FeatureCard = ({ title, description, icon: Icon, link }: FeatureCardProps) => {
  return (
    <Link to={link} className="block">
      <div className="feature-card-hover h-full flex flex-col">
        <div className="bg-agri-cream rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-agri-green" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-agri-green">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 text-agri-green font-medium flex items-center">
          <span>Learn more</span>
          <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
