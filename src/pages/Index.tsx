
import React from 'react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ContentCard from '@/components/ContentCard';
import { Wheat, Plant, Bug, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      title: 'Farming Guides',
      description: 'Comprehensive guides on farming techniques, seasonal planting, and sustainable practices for various crop types.',
      icon: Wheat,
      link: '/farming-guides'
    },
    {
      title: 'Crop Information',
      description: 'Detailed information on crop varieties, growth requirements, nutritional values, and harvesting techniques.',
      icon: Plant,
      link: '/crops'
    },
    {
      title: 'Pest Control',
      description: 'Integrated pest management strategies to help you identify, prevent, and control common agricultural pests.',
      icon: Bug,
      link: '/pest-control'
    },
    {
      title: 'Expert Advice',
      description: 'Connect with agricultural experts for personalized advice on your specific farming challenges and questions.',
      icon: Sprout,
      link: '/contact'
    }
  ];

  const featuredGuides = [
    {
      title: 'Organic Farming Basics',
      description: 'Learn the fundamental principles and practices of organic farming to grow healthy crops without synthetic chemicals.',
      image: '/images/organic-farming.jpg',
      link: '/farming-guides/organic-basics',
      category: 'Sustainable Farming'
    },
    {
      title: 'Water Conservation Techniques',
      description: 'Discover effective strategies to conserve water in your farm while maintaining optimal crop growth and yield.',
      image: '/images/water-conservation.jpg',
      link: '/farming-guides/water-conservation',
      category: 'Resource Management'
    },
    {
      title: 'Soil Health Management',
      description: 'Understand the importance of soil health and learn techniques to maintain and improve soil fertility for sustainable farming.',
      image: '/images/soil-health.jpg',
      link: '/farming-guides/soil-health',
      category: 'Soil Management'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Your Complete Agricultural Information Resource" 
          subtitle="Access comprehensive farming guides, crop details, pest control strategies, and expert advice to improve your agricultural practices."
        />

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-agri-cream">
          <div className="container mx-auto px-4">
            <h2 className="section-title">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-agri-green">Featured Farming Guides</h2>
              <Link to="/farming-guides">
                <Button variant="outline" className="agri-btn-outline mt-4 md:mt-0">
                  View All Guides
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGuides.map((guide, index) => (
                <ContentCard 
                  key={index}
                  title={guide.title}
                  description={guide.description}
                  image={guide.image}
                  link={guide.link}
                  category={guide.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-agri-green text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Agricultural Advice?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with our agricultural experts to get customized solutions for your farming challenges.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-agri-green hover:bg-agri-cream transition-colors duration-300 font-medium text-lg px-8 py-3">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
