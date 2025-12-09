import { NavLink } from "@/components/NavLink";
import { BookOpen, Users, TrendingUp, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import tutorPhoto from "@/assets/tutor-photo.jpg";

const Index = () => {
  const offerings = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Selective School Mastery",
      description: "ACER-based exam preparation with proven strategies, timed practice, and weekly mock tests.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Ability Test Training",
      description: "Focused development in mathematics, reading comprehension, verbal ability and quantitative ability.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Writing Excellence Program",
      description: "High-impact lessons building top-tier persuasive and creative writing for selective exams.",
    },
  ];

  const whyChoose = [
    "Small Group Classes",
    "Convenient Online Lessons",
    "Expert Selective School Tutor",
    "Free 1:1 Consultations",
    "Weekly Practice Tests",
    "Comprehensive Writing Support",
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Parent",
      text: "VM Tutoring helped my daughter gain entry to Melbourne High. The personalised attention and structured approach made all the difference.",
    },
    {
      name: "Michael Patel",
      role: "Student",
      text: "The reasoning techniques I learned helped me think differently about problems. I felt so prepared for the exam!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Selective School Tutoring
              <span className="block text-primary mt-2">That Gets Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert ACER-based preparation for Victorian Selective School Exams. Personalised teaching, small groups, and proven strategies to help your child succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                <NavLink to="/contact">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2">
                <NavLink to="/classes">View Our Classes</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive tutoring programs designed to prepare students for Selective School success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-primary mb-4">{offering.icon}</div>
                <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Why Choose VM Tutoring</h2>
              <p className="text-lg text-muted-foreground">
                Proven methods and personalised attention for Selective School success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Tutor */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Meet Your Tutor</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Image Side with Stats */}
              <div className="relative flex justify-center">
                <div className="relative inline-block">
                  <div className="text-center">
                    <img 
                      src={tutorPhoto} 
                      alt="Vishesh Manik - Selective School Tutor"
                      className="w-80 h-80 object-cover object-top rounded-2xl shadow-2xl"
                    />
                    <p className="mt-4 text-2xl font-bold text-primary-foreground">Vishesh Manik</p>
                  </div>
                  
                  {/* Stats Bubbles around image */}
                  <div className="absolute -left-20 top-6 animate-fade-in hidden lg:block" style={{ animationDelay: "0ms" }}>
                    <div className="bg-background rounded-full p-4 shadow-lg border border-primary/20 hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">3+</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Years Exp.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -right-20 top-20 animate-fade-in hidden lg:block" style={{ animationDelay: "150ms" }}>
                    <div className="bg-background rounded-full p-4 shadow-lg border border-primary/20 hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">50+</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">Students</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-20 bottom-16 animate-fade-in hidden lg:block" style={{ animationDelay: "300ms" }}>
                    <div className="bg-background rounded-full p-4 shadow-lg border border-primary/20 hover:shadow-xl transition-shadow">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">2K+</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap">YouTube Subs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Side */}
              <div className="flex justify-center">
                <Card className="p-8 shadow-xl bg-background/95 backdrop-blur">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Vishesh Manik</span> brings over three years of dedicated experience in Selective School preparation, having helped 50+ students achieve their academic dreams. His teaching approach combines proven exam strategies with personalised attention, ensuring each student reaches their full potential. Through his YouTube channel with 2,000+ subscribers, he shares free resources and tips to support students on their Selective School journey.
                  </p>
                </Card>
                
                {/* Mobile Stats - shown below on mobile */}
                <div className="grid grid-cols-3 gap-4 lg:hidden">
                  <div className="bg-background rounded-2xl p-4 shadow-md border border-primary/20 text-center">
                    <p className="text-xl font-bold text-primary">3+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="bg-background rounded-2xl p-4 shadow-md border border-primary/20 text-center">
                    <p className="text-xl font-bold text-primary">50+</p>
                    <p className="text-xs text-muted-foreground">Students Tutored</p>
                  </div>
                  <div className="bg-background rounded-2xl p-4 shadow-md border border-primary/20 text-center">
                    <p className="text-xl font-bold text-primary">2K+</p>
                    <p className="text-xs text-muted-foreground">YouTube Subscribers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from parents and students who achieved their Selective School goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <NavLink to="/testimonials">Read More Testimonials</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl text-white/90">
              Book a free consultation to discuss your child's Selective School preparation journey
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full shadow-xl">
              <NavLink to="/contact">Book Your Free Consultation</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
