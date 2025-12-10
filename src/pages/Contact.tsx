import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    {
      question: "When should my child start preparing for the selective exam?",
      answer: "We recommend starting preparation at least 6-12 months before the exam date. This allows sufficient time to build strong foundations and develop exam techniques without overwhelming pressure.",
    },
    {
      question: "What is included in the free trial lesson?",
      answer: "The free trial lesson is a full-length session where your child will experience our teaching style, complete a diagnostic assessment, and receive personalised feedback. You'll also have the opportunity to discuss your child's needs and goals.",
    },
    {
      question: "How often are classes held?",
      answer: "Group classes run weekly, typically for 2 hours per session. One-on-one tutoring offers flexible scheduling based on your availability. We also provide makeup sessions for any missed classes.",
    },
    {
      question: "What materials do students need?",
      answer: "All study materials, practice worksheets, and resources are provided. Students just need to bring a pencil case with writing materials and a positive attitude to learn!",
    },
    {
      question: "How do you track student progress?",
      answer: "We provide weekly progress reports via email, conduct regular practice tests, and hold parent-teacher meetings each term. You'll always know exactly how your child is progressing.",
    },
    {
      question: "What is your success rate?",
      answer: "Over 95% of our students who complete our full selective school preparation program successfully gain entry to their preferred selective schools. Our structured approach and personalised support deliver consistent results.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your child's selective school journey? Contact us today for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div id="send-message">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Parent/Guardian Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your child's year level, goals, and any specific needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+61491749259" className="text-muted-foreground hover:text-primary transition-colors">
                          0491 749 259
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a
                          href="mailto:vmtutoring23@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          vmtutoring23@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                </div>
              </div>

              <Card className="p-6 bg-primary text-white border-none mt-6 flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-3">Free Trial Lesson</h3>
                <p className="mb-4">
                  Interested in a free trial lesson? Mention it in your message and we'll set one up for you!
                </p>
                <p className="font-semibold">Available spots are limited!</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our tutoring programs
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
