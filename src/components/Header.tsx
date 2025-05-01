
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Leaf className="h-8 w-8 text-agri-green mr-2" />
            <span className="font-bold text-xl text-agri-green">AgriInfo Hub</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-agri-green transition-colors">Home</Link>
            <Link to="/farming-guides" className="text-gray-700 hover:text-agri-green transition-colors">Farming Guides</Link>
            <Link to="/crops" className="text-gray-700 hover:text-agri-green transition-colors">Crop Details</Link>
            <Link to="/pest-control" className="text-gray-700 hover:text-agri-green transition-colors">Pest Control</Link>
            <Link to="/contact" className="agri-btn">Contact Experts</Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-agri-cream hover:text-agri-green"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/farming-guides" 
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-agri-cream hover:text-agri-green"
                onClick={closeMenu}
              >
                Farming Guides
              </Link>
              <Link 
                to="/crops" 
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-agri-cream hover:text-agri-green"
                onClick={closeMenu}
              >
                Crop Details
              </Link>
              <Link 
                to="/pest-control" 
                className="px-4 py-2 rounded-md text-gray-700 hover:bg-agri-cream hover:text-agri-green"
                onClick={closeMenu}
              >
                Pest Control
              </Link>
              <Link 
                to="/contact" 
                className="mx-4 agri-btn text-center"
                onClick={closeMenu}
              >
                Contact Experts
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
