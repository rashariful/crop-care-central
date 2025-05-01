
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from 'lucide-react';

const Crops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    { id: "all", label: "All Crops" },
    { id: "grains", label: "Grains" },
    { id: "vegetables", label: "Vegetables" },
    { id: "fruits", label: "Fruits" },
    { id: "cash-crops", label: "Cash Crops" },
  ];

  const crops = [
    {
      name: "Wheat",
      description: "A staple grain crop grown worldwide for flour production and animal feed.",
      image: "/images/wheat.jpg",
      category: "grains",
      growingSeason: "Fall to Summer",
      soilRequirements: "Well-drained loamy soil, pH 6.0-7.5",
      waterNeeds: "Moderate",
      harvestTime: "Summer"
    },
    {
      name: "Corn (Maize)",
      description: "Versatile grain used for human consumption, livestock feed, and industrial products.",
      image: "/images/corn.jpg",
      category: "grains",
      growingSeason: "Spring to Fall",
      soilRequirements: "Fertile, well-drained soil, pH 5.8-7.0",
      waterNeeds: "High",
      harvestTime: "Fall"
    },
    {
      name: "Rice",
      description: "Major food crop that feeds more than half of the global population.",
      image: "/images/rice.jpg",
      category: "grains",
      growingSeason: "Spring to Fall",
      soilRequirements: "Heavy clay soil, pH 5.5-6.5",
      waterNeeds: "Very High",
      harvestTime: "Fall"
    },
    {
      name: "Tomatoes",
      description: "Popular fruit commonly used as a vegetable in cooking.",
      image: "/images/tomatoes.jpg",
      category: "vegetables",
      growingSeason: "Spring to Fall",
      soilRequirements: "Well-drained soil rich in organic matter, pH 6.0-6.8",
      waterNeeds: "Moderate to High",
      harvestTime: "Summer to Fall"
    },
    {
      name: "Potatoes",
      description: "Starchy tuber crop that is a major food staple worldwide.",
      image: "/images/potatoes.jpg",
      category: "vegetables",
      growingSeason: "Spring to Fall",
      soilRequirements: "Loose, well-drained soil, pH 5.8-6.5",
      waterNeeds: "Moderate",
      harvestTime: "Summer to Fall"
    },
    {
      name: "Carrots",
      description: "Root vegetable known for its high nutritional value and versatility.",
      image: "/images/carrots.jpg",
      category: "vegetables",
      growingSeason: "Spring to Fall",
      soilRequirements: "Sandy, well-drained soil, pH 6.0-7.0",
      waterNeeds: "Moderate",
      harvestTime: "Summer to Fall"
    },
    {
      name: "Apples",
      description: "One of the most widely cultivated tree fruits known for its sweetness and versatility.",
      image: "/images/apples.jpg",
      category: "fruits",
      growingSeason: "Year-round (tree)",
      soilRequirements: "Well-drained loamy soil, pH 6.0-7.0",
      waterNeeds: "Moderate",
      harvestTime: "Fall"
    },
    {
      name: "Strawberries",
      description: "Sweet, red, heart-shaped fruits popular in desserts, jams, and fresh consumption.",
      image: "/images/strawberries.jpg",
      category: "fruits",
      growingSeason: "Spring to Summer",
      soilRequirements: "Well-drained soil rich in organic matter, pH 5.5-6.5",
      waterNeeds: "Moderate",
      harvestTime: "Spring to Summer"
    },
    {
      name: "Cotton",
      description: "Major cash crop grown for its fiber used in textile production.",
      image: "/images/cotton.jpg",
      category: "cash-crops",
      growingSeason: "Spring to Fall",
      soilRequirements: "Well-drained soil, pH 5.8-8.0",
      waterNeeds: "Moderate to High",
      harvestTime: "Fall"
    },
  ];

  const filterCrops = (category, searchTerm) => {
    return crops.filter(crop => 
      (category === "all" || crop.category === category) && 
      (crop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       crop.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Crop Information" 
          subtitle="Detailed information on various crops including growing requirements, harvesting techniques, and nutritional value."
          showButton={false}
        />
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search crops by name or description..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

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
                  {filterCrops(category.id, searchTerm).length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filterCrops(category.id, searchTerm).map((crop, index) => (
                        <Card key={index} className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={crop.image} 
                              alt={crop.name} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="text-agri-green">{crop.name}</CardTitle>
                            <CardDescription>{crop.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-sm">
                              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                                <span className="font-medium text-gray-700">Growing Season:</span>
                                <span>{crop.growingSeason}</span>
                                
                                <span className="font-medium text-gray-700">Soil Requirements:</span>
                                <span>{crop.soilRequirements}</span>
                                
                                <span className="font-medium text-gray-700">Water Needs:</span>
                                <span>{crop.waterNeeds}</span>
                                
                                <span className="font-medium text-gray-700">Harvest Time:</span>
                                <span>{crop.harvestTime}</span>
                              </div>
                            </div>
                            
                            <Button variant="outline" className="mt-4 w-full agri-btn-outline">
                              View Full Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <h3 className="text-xl font-medium text-gray-600">No crops found</h3>
                      <p className="text-gray-500 mt-2">Try adjusting your search term or selecting a different category.</p>
                    </div>
                  )}
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

export default Crops;
