
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Bug, Flower, Leaf, Sprout } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const PestControl = () => {
  const pestCategories = [
    {
      title: 'Insect Pests',
      icon: Bug,
      content: 'Common insect pests include aphids, caterpillars, beetles, and grasshoppers. These pests can damage crops by feeding on leaves, stems, roots, or fruits.',
      strategies: [
        {
          title: 'Cultural Controls',
          description: 'Crop rotation, trap crops, companion planting, and proper sanitation to reduce pest populations naturally.'
        },
        {
          title: 'Mechanical Controls',
          description: 'Handpicking, traps, barriers, and row covers to physically prevent pests from reaching crops.'
        },
        {
          title: 'Biological Controls',
          description: 'Introducing or encouraging natural predators like ladybugs, beneficial nematodes, and predatory mites.'
        },
        {
          title: 'Organic Pesticides',
          description: 'Neem oil, insecticidal soaps, diatomaceous earth, and botanical extracts as a last resort.'
        }
      ]
    },
    {
      title: 'Plant Diseases',
      icon: Leaf,
      content: 'Plant diseases can be caused by fungi, bacteria, viruses, or nematodes. Common symptoms include spots on leaves, wilting, stunted growth, and fruit rot.',
      strategies: [
        {
          title: 'Prevention',
          description: 'Use disease-resistant varieties, proper plant spacing, and avoid overhead watering to reduce humidity.'
        },
        {
          title: 'Cultural Practices',
          description: 'Crop rotation, proper sanitation, removing infected plants, and managing irrigation to prevent disease spread.'
        },
        {
          title: 'Organic Treatments',
          description: 'Copper fungicides, sulfur sprays, baking soda solutions, and compost teas to manage diseases.'
        },
        {
          title: 'Environmental Management',
          description: 'Ensure proper air circulation, adequate sunlight, and optimal growing conditions to prevent disease development.'
        }
      ]
    },
    {
      title: 'Weeds',
      icon: Sprout,
      content: 'Weeds compete with crops for water, nutrients, and sunlight. They can reduce crop yields and harbor pests and diseases.',
      strategies: [
        {
          title: 'Prevention',
          description: 'Use cover crops, mulch, and clean equipment to prevent weed establishment and spread.'
        },
        {
          title: 'Manual Control',
          description: 'Hand pulling, hoeing, and mechanical cultivation to remove weeds before they seed.'
        },
        {
          title: 'Mulching',
          description: 'Organic mulches like straw, leaves, or wood chips to suppress weed growth and conserve soil moisture.'
        },
        {
          title: 'Organic Herbicides',
          description: 'Vinegar-based solutions, corn gluten meal, and other natural herbicides as a last resort.'
        }
      ]
    },
    {
      title: 'Vertebrate Pests',
      icon: Flower,
      content: 'Vertebrate pests include rodents, birds, deer, and rabbits. They can damage crops by feeding on plants or fruits and disrupting growing areas.',
      strategies: [
        {
          title: 'Physical Barriers',
          description: 'Fencing, netting, row covers, and plant collars to protect crops from animals.'
        },
        {
          title: 'Scare Tactics',
          description: 'Scarecrows, reflective tape, predator decoys, and noise devices to deter animals.'
        },
        {
          title: 'Habitat Modification',
          description: 'Remove hiding places, food sources, and water sources to make the area less attractive to pests.'
        },
        {
          title: 'Repellents',
          description: 'Natural repellents like garlic, hot pepper, predator urine, and commercial organic repellents.'
        }
      ]
    }
  ];

  const ipmSteps = [
    {
      title: "Prevention",
      description: "Use resistant varieties, proper cultural practices, and sanitation to prevent pest problems before they start."
    },
    {
      title: "Monitoring",
      description: "Regularly inspect crops for signs of pests, diseases, and beneficial insects to make informed decisions."
    },
    {
      title: "Identification",
      description: "Correctly identify pests and beneficial organisms to implement appropriate management strategies."
    },
    {
      title: "Threshold Setting",
      description: "Establish acceptable pest levels that can be tolerated without significant crop damage or economic loss."
    },
    {
      title: "Management",
      description: "Use multiple control methods in a coordinated approach, starting with the least toxic options."
    },
    {
      title: "Evaluation",
      description: "Assess the effectiveness of strategies used and adjust the approach as needed for continuous improvement."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Pest Control Strategies" 
          subtitle="Learn effective, sustainable approaches to manage pests and diseases in your crops while minimizing environmental impact."
          showButton={false}
        />

        {/* IPM Introduction Section */}
        <section className="py-12 md:py-16 bg-agri-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-agri-green mb-4">Integrated Pest Management (IPM)</h2>
              <p className="text-lg text-gray-700">
                IPM is a sustainable approach to managing pests that combines biological, cultural, physical, and chemical tools to minimize economic, 
                health, and environmental risks. By following these steps, you can effectively control pests while reducing reliance on pesticides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ipmSteps.map((step, index) => (
                <Card key={index} className="bg-white hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-agri-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-agri-green">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pest Categories and Strategies */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Pest Categories & Management Strategies</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pestCategories.map((category, index) => {
                const Icon = category.icon;
                
                return (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-agri-green p-6 flex items-center">
                      <Icon className="h-8 w-8 text-white mr-4" />
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-6">{category.content}</p>
                      
                      <Accordion type="single" collapsible className="border-t border-gray-200">
                        {category.strategies.map((strategy, idx) => (
                          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-200">
                            <AccordionTrigger className="py-4 text-left font-medium text-agri-green hover:text-agri-green-dark">
                              {strategy.title}
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 text-gray-600">
                              {strategy.description}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 md:py-16 bg-agri-brown text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help With Pest Management?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our agricultural experts can provide personalized pest management strategies for your specific crop and situation.
            </p>
            <a href="/contact" className="inline-block bg-white text-agri-brown hover:bg-agri-cream transition-colors duration-300 font-medium py-3 px-8 rounded-md text-lg">
              Get Expert Advice
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PestControl;
