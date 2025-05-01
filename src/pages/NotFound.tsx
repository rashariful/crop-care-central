
import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="h-16 w-16 text-agri-green mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-agri-green mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link to="/">
            <Button className="agri-btn text-lg px-6 py-2">
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
