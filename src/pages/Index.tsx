import React from 'react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ContentCard from '@/components/ContentCard';
import { Wheat, Flower2, Bug, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    attachment: null
  });
  
  const [loading, setLoading] = React.useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleAttachment = (e) => {
    setFormData(prev => ({
      ...prev,
      attachment: e.target.files?.[0] || null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        attachment: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('contact-attachment') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }, 1500);
  };

  // Updated features array with real images
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
      icon: Flower2,
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

  // Updated featuredGuides array with real images from Unsplash
  const featuredGuides = [
    {
      title: 'Organic Farming Basics',
      description: 'Learn the fundamental principles and practices of organic farming to grow healthy crops without synthetic chemicals.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80',
      link: '/farming-guides/organic-basics',
      category: 'Sustainable Farming'
    },
    {
      title: 'Water Conservation Techniques',
      description: 'Discover effective strategies to conserve water in your farm while maintaining optimal crop growth and yield.',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80',
      link: '/farming-guides/water-conservation',
      category: 'Resource Management'
    },
    {
      title: 'Soil Health Management',
      description: 'Understand the importance of soil health and learn techniques to maintain and improve soil fertility for sustainable farming.',
      image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80',
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
        
        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 bg-agri-cream">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-10">Contact Us</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                          placeholder="john.doe@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={handleSelectChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="farming">Farming Advice</SelectItem>
                          <SelectItem value="pest">Pest Control</SelectItem>
                          <SelectItem value="crops">Crop Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        placeholder="How can we help you?"
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-attachment">Attachment (optional)</Label>
                      <Input 
                        id="contact-attachment" 
                        name="attachment" 
                        type="file" 
                        onChange={handleAttachment} 
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-gray-500">Upload images of issues or documents you'd like to share (Max file size: 5MB)</p>
                    </div>

                    <Button type="submit" className="agri-btn w-full" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
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
