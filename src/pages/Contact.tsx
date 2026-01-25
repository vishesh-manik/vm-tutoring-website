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
    hearAboutUs: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScQR2N3BXTe6s1RfMcfo77LUn9h23dyKJ3kra4YqthR9yH1_A/formResponse";
      
      const formDataToSend = new FormData();
      formDataToSend.append("entry.2005620554", formData.name);
      formDataToSend.append("entry.1045781291", formData.email);
      formDataToSend.append("entry.967765721", formData.phone);
      formDataToSend.append("entry.107001782", formData.hearAboutUs);
      formDataToSend.append("entry.839337160", formData.message);

      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", hearAboutUs: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "When should my child start preparing for the Selective School exam?",
      answer: "We recommend starting preparation at least 6-12 months before the exam date. This allows sufficient time to build strong foundations and develop exam techniques without overwhelming pressure.",
    },
    {
      question: "What programs do you offer?",
      answer: "We offer three main programs: our Selective School Program (3.5-hour weekly online sessions with ACER-based preparation), Scholarship Exam Preparation (2-hour lessons), and 1:1 Personalised Tutoring for specialised maths and English support. All programs are delivered online in small group settings.",
    },
    {
      question: "What does the Selective School Program cover?",
      answer: "Our ACER-based program covers mathematics, reading comprehension, verbal and quantitative ability, as well as persuasive and creative writing for Selective School exams. Students receive weekly mock tests, timed practice, and proven strategies for exam success.",
    },
    {
      question: "Are all classes conducted online?",
      answer: "Yes, VM Tutoring operates exclusively online. All classes are delivered remotely, making it convenient for families across Victoria. Our online format ensures flexible, accessible learning from the comfort of your home.",
    },
    {
      question: "Who is the tutor?",
      answer: "Classes are led by Vishesh Manik, an experienced Selective School tutor with over 3 years of experience, having tutored 50+ students, and a YouTube channel with 2K+ subscribers dedicated to helping students succeed.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer free 1:1 consultations to discuss your child's needs, goals, and how our programs can help. Simply send us a message through the contact form to book your consultation.",
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
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div id="send-message">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
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
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 000 000"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="hearAboutUs" className="block text-sm font-medium mb-2">
                      Where did you hear about us?
                    </label>
                    <Input
                      id="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                      placeholder="e.g. Google, Facebook, Friend referral..."
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
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full" size="lg" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col">
              <div>
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
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
                <p className="mb-2">
                  Experience our ACER-based Selective School preparation firsthand! Your child will join a real class session to see our teaching style in action.
                </p>
                <p className="mb-4 text-white/90">
                  Mention "free trial" in your message and we'll set one up for you.
                </p>
                <p className="font-semibold text-white/95">Available spots are limited — book yours today!</p>
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
