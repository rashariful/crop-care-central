
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    attachment: null
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAttachment = (e) => {
    setFormData(prev => ({
      ...prev,
      attachment: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted Successfully",
        description: "We've received your inquiry and will get back to you soon.",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: null
      });
      
      // Reset file input
      const fileInput = document.getElementById('attachment');
      if (fileInput) fileInput.value = '';
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      info: '123 Farm Road, Agricity, AC 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      info: '(123) 456-7890',
      link: 'tel:(123) 456-7890'
    },
    {
      icon: Mail,
      title: 'Email Address',
      info: 'info@agriinfohub.com',
      link: 'mailto:info@agriinfohub.com'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 9am-5pm',
      link: null
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero 
          title="Contact Our Agricultural Experts" 
          subtitle="Get personalized advice, share your farming challenges, or connect with our team of agricultural specialists."
          showButton={false}
        />
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-2xl md:text-3xl font-bold text-agri-green mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about farming practices, crop information, or pest control? Our team of agricultural experts is here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="bg-agri-cream rounded-full p-3 mr-4">
                          <Icon className="h-5 w-5 text-agri-green" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.title}</h3>
                          {item.link ? (
                            <a href={item.link} className="text-agri-green hover:text-agri-green-dark transition-colors">
                              {item.info}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.info}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-agri-green mb-6">Send Us a Message</h2>
                    
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
                          <Input 
                            id="subject" 
                            name="subject" 
                            value={formData.subject} 
                            onChange={handleChange} 
                            required 
                            placeholder="How can we help you?"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Your Message <span className="text-red-500">*</span></Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message} 
                          onChange={handleChange} 
                          required 
                          placeholder="Please describe your inquiry or issue in detail..."
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="attachment">Attachment (optional)</Label>
                        <Input 
                          id="attachment" 
                          name="attachment" 
                          type="file" 
                          onChange={handleAttachment} 
                          className="cursor-pointer"
                        />
                        <p className="text-xs text-gray-500">Upload images of issues or documents you'd like to share (Max file size: 5MB)</p>
                      </div>

                      <Button type="submit" className="agri-btn w-full" disabled={loading}>
                        {loading ? "Sending..." : "Submit Inquiry"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-agri-cream">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "How quickly will I receive a response to my inquiry?",
                  a: "We typically respond to inquiries within 1-2 business days. For urgent matters, please call our office directly."
                },
                {
                  q: "What types of agricultural issues can your experts help with?",
                  a: "Our experts can assist with crop selection, pest management, soil health, irrigation, sustainable farming practices, and many other agricultural topics."
                },
                {
                  q: "Do you offer on-site consultations?",
                  a: "Yes, in certain areas we offer on-site consultations. Please mention this in your inquiry form and we'll provide details about availability and fees."
                },
                {
                  q: "Is there a fee for consulting with your agricultural experts?",
                  a: "Initial consultations via email or phone are free. For extended or specialized consultations, fees may apply. We'll always discuss this with you before proceeding."
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-agri-green mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
