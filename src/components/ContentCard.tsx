
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  category?: string;
}

const ContentCard = ({ title, description, image, link, category }: ContentCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        {category && (
          <span className="text-xs font-medium bg-agri-cream text-agri-green px-2 py-1 rounded-full inline-block mb-2 w-fit">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link to={link}>
          <Button variant="outline" className="w-full agri-btn-outline">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
