
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContentCard from '@/components/ContentCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FarmingGuides = () => {
  const categories = [
    { id: "all", label: "All Guides" },
    { id: "sustainable", label: "Sustainable Farming" },
    { id: "seasonal", label: "Seasonal Planting" },
    { id: "techniques", label: "Farming Techniques" },
    { id: "management", label: "Resource Management" },
  ];

  const guides = [
    {
      title: "Organic Farming Basics",
      description: "Learn the fundamental principles and practices of organic farming to grow healthy crops without synthetic chemicals.",
      image: "/images/organic-farming.jpg",
      link: "/farming-guides/organic-basics",
      category: "sustainable"
    },
    {
      title: "Water Conservation Techniques",
      description: "Discover effective strategies to conserve water in your farm while maintaining optimal crop growth and yield.",
      image: "/images/water-conservation.jpg",
      link: "/farming-guides/water-conservation",
      category: "management"
    },
    {
      title: "Soil Health Management",
      description: "Understand the importance of soil health and learn techniques to maintain and improve soil fertility for sustainable farming.",
      image: "/images/soil-health.jpg",
      link: "/farming-guides/soil-health",
      category: "management"
    },
    {
      title: "Spring Planting Guide",
      description: "Get ready for the spring growing season with this comprehensive guide on what, when, and how to plant.",
      image: "/images/spring-planting.jpg",
      link: "/farming-guides/spring-planting",
      category: "seasonal"
    },
    {
      title: "No-Till Farming Methods",
      description: "Explore the benefits and techniques of no-till farming to improve soil structure and reduce erosion.",
      image: "/images/no-till-farming.jpg",
      link: "/farming-guides/no-till-farming",
      category: "techniques"
    },
    {
      title: "Crop Rotation Strategies",
      description: "Learn how to implement effective crop rotation to improve soil health, reduce pests, and increase yields.",
      image: "/images/crop-rotation.jpg",
      link: "/farming-guides/crop-rotation",
      category: "techniques"
    },
    {
      title: "Winter Preparation for Farms",
      description: "Prepare your farm for winter with these essential tasks to protect your soil, equipment, and infrastructure.",
      image: "/images/winter-farm-prep.jpg",
      link: "/farming-guides/winter-preparation",
      category: "seasonal"
    },
    {
      title: "Companion Planting Guide",
      description: "Maximize your garden's potential by learning which plants grow well together and support each other.",
      image: "/images/companion-planting.jpg",
      link: "/farming-guides/companion-planting",
      category: "techniques"
    },
    {
      title: "Rainwater Harvesting Systems",
      description: "Set up efficient rainwater harvesting systems to collect and utilize natural precipitation for your farm.",
      image: "/images/rainwater-harvesting.jpg",
      link: "/farming-guides/rainwater-harvesting",
      category: "management"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Farming Guides" 
          subtitle="Comprehensive resources on farming practices, techniques, and methodologies to help you achieve sustainable and productive agriculture."
          showButton={false}
        />
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full">
              <div className="overflow-x-auto pb-4">
                <TabsList className="mb-8 h-auto p-1 flex-wrap bg-agri-cream">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-4 py-2 data-[state=active]:bg-agri-green data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {guides
                      .filter(guide => category.id === "all" || guide.category === category.id)
                      .map((guide, index) => (
                        <ContentCard 
                          key={index}
                          title={guide.title}
                          description={guide.description}
                          image={guide.image}
                          link={guide.link}
                          category={categories.find(cat => cat.id === guide.category)?.label}
                        />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FarmingGuides;
