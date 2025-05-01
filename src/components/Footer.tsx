
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-agri-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-agri-gold mr-2" />
              <span className="font-bold text-xl">AgriInfo Hub</span>
            </div>
            <p className="text-gray-200 text-sm max-w-xs">
              Your comprehensive resource for farming guides, crop information, pest control strategies, and agricultural expertise.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-agri-green-light pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-agri-gold transition-colors">Home</Link></li>
              <li><Link to="/farming-guides" className="text-gray-200 hover:text-agri-gold transition-colors">Farming Guides</Link></li>
              <li><Link to="/crops" className="text-gray-200 hover:text-agri-gold transition-colors">Crop Details</Link></li>
              <li><Link to="/pest-control" className="text-gray-200 hover:text-agri-gold transition-colors">Pest Control</Link></li>
              <li><Link to="/contact" className="text-gray-200 hover:text-agri-gold transition-colors">Contact Experts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-agri-green-light pb-2">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-agri-gold transition-colors">Seasonal Planting Calendar</a></li>
              <li><a href="#" className="text-gray-200 hover:text-agri-gold transition-colors">Agricultural News</a></li>
              <li><a href="#" className="text-gray-200 hover:text-agri-gold transition-colors">Research Publications</a></li>
              <li><a href="#" className="text-gray-200 hover:text-agri-gold transition-colors">Community Forum</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 border-b border-agri-green-light pb-2">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-agri-gold" />
                <span>123 Farm Road, Agricity, AC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-agri-gold" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-agri-gold" />
                <span>info@agriinfohub.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-agri-green-light mt-12 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} AgriInfo Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
