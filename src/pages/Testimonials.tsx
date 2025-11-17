import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Parent - Melbourne High School",
      rating: 5,
      text: "VM Tutoring was instrumental in helping my daughter gain entry to Melbourne High School. The personalised attention and structured approach made all the difference. The tutor understood her learning style and adapted the teaching accordingly. We're so grateful for the support!",
    },
    {
      name: "Michael Patel",
      role: "Student - Mac.Robertson Girls' High School",
      rating: 5,
      text: "I was nervous about the selective exam, but the reasoning techniques and strategies I learned at VM Tutoring helped me think differently about problems. The practice tests really prepared me for the real thing. I felt confident walking into that exam room!",
    },
    {
      name: "Jennifer Wong",
      role: "Parent - Nossal High School",
      rating: 5,
      text: "What sets VM Tutoring apart is the genuine care for each student's success. My son's confidence grew tremendously over the term. The weekly feedback helped us stay on track, and the results speak for themselves—he's now thriving at Nossal!",
    },
    {
      name: "David Kim",
      role: "Student - John Monash Science School",
      rating: 5,
      text: "The small group classes were perfect for me. I could ask questions without feeling embarrassed, and the tutor made sure everyone understood before moving forward. The homework was challenging but manageable, and it really reinforced what we learned.",
    },
    {
      name: "Priya Sharma",
      role: "Parent - Suzanne Cory High School",
      rating: 5,
      text: "As parents, we appreciated the transparency and communication throughout the preparation process. The tutor provided detailed insights into our daughter's progress and areas needing focus. The investment was absolutely worth it!",
    },
    {
      name: "James Liu",
      role: "Student - Melbourne High School",
      rating: 5,
      text: "The exam strategies I learned were game-changers. Time management techniques, how to tackle difficult questions, and staying calm under pressure—all these skills helped me perform my best. I couldn't have done it without VM Tutoring!",
    },
    {
      name: "Amanda Rodriguez",
      role: "Parent - Mac.Robertson Girls' High School",
      rating: 5,
      text: "My daughter struggled with numerical reasoning initially, but the patient, step-by-step approach at VM Tutoring built her skills and confidence. By exam day, it was one of her strongest areas. We're thrilled with her success!",
    },
    {
      name: "Ryan Thompson",
      role: "Student - Nossal High School",
      rating: 5,
      text: "The practice exams under real conditions were so helpful. They taught me how to manage my time and handle the pressure. When I sat the actual exam, it felt familiar and I knew exactly what to do. Best preparation possible!",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">Success Stories</h1>
            <p className="text-xl text-muted-foreground">
              Hear from students and parents who achieved their selective school dreams with VM Tutoring
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Tutored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Join Our Success Stories</h2>
            <p className="text-lg md:text-xl text-white/90">
              Start your child's selective school journey with expert guidance and proven results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-colors"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
