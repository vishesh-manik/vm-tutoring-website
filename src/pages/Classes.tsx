import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";

const Classes = () => {
  const programs = [
    {
      name: "Group Classes",
      description: "Small group learning with maximum 6 students",
      features: [
        "3.5-hour weekly online sessions",
        "Maximum 6 students per class",
        "Comprehensive exam preparation",
        "All study materials included",
        "Weekly progress reports",
        "Homework assignments",
        "Practice tests provided",
      ],
    },
    {
      name: "Selective School Prep",
      description: "Complete Selective School exam preparation program",
      features: [
        "12-week structured program",
        "All exam components covered",
        "3.5-hour weekly online sessions",
        "Full-length practice exams",
        "Exam technique workshops",
        "Parent information sessions",
        "Comprehensive study materials",
        "Free trial lesson included",
      ],
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Our Classes</h1>
            <p className="text-xl text-muted-foreground">
              3.5-hour weekly online classes designed to fit your child's needs and schedule
            </p>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`p-8 relative hover:shadow-2xl transition-all duration-300 ${
                  program.popular ? "border-2 border-primary shadow-xl" : "border-2 border-transparent"
                }`}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>

                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      program.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary text-primary hover:bg-secondary/80"
                    }`}
                  >
                    <NavLink to="/contact">Get Started</NavLink>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
              <p className="text-lg text-muted-foreground">
                All our programs include comprehensive support and materials
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-3">Study Materials</h3>
                <p className="text-muted-foreground">
                  All students receive comprehensive study guides, practice worksheets, and access to our resource library covering mathematics, English, and reasoning.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-3">Practice Exams</h3>
                <p className="text-muted-foreground">
                  Regular practice tests under exam conditions help students build familiarity and confidence with the Selective School exam format.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Weekly reports keep parents informed about their child's development, highlighting strengths and areas requiring additional focus.
                </p>
              </Card>

              <Card className="p-6 bg-white">
                <h3 className="font-bold text-lg mb-3">Online Convenience</h3>
                <p className="text-muted-foreground">
                  All classes are conducted online, providing flexibility and convenience while maintaining high-quality interactive learning experiences.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-12 text-center bg-gradient-to-br from-primary to-primary/80 text-white border-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with a Free Trial</h2>
            <p className="text-lg mb-8 text-white/90">
              Experience our teaching approach with a complimentary trial lesson. No commitment required.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8">
              <NavLink to="/contact">Book Your Free Trial</NavLink>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Classes;
