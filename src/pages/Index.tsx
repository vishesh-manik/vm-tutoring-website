import { NavLink } from "@/components/NavLink";
import { BookOpen, Users, TrendingUp, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const offerings = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Selective School Mastery",
      description: "Targeted exam preparation with proven strategies, timed practice, and weekly mock tests.",
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
              Expert preparation for Victorian selective school exams. Personalised teaching, small groups, and proven strategies to help your child succeed.
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
              Comprehensive tutoring programs designed to prepare students for selective school success
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
                Proven methods and personalised attention for selective school success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{reason}</span>
                </div>
              ))}
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
              Hear from parents and students who achieved their selective school goals
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
              Book a free consultation to discuss your child's selective school preparation journey
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
