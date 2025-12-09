import { Award, Target, Heart, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in selective school exam preparation.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalised Approach",
      description: "Every student receives tailored support based on their unique learning needs.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Student Success",
      description: "Your child's achievement and confidence are at the heart of everything we do.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-secondary/30 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">About VM Tutoring</h1>
            <p className="text-xl text-muted-foreground">
              Empowering Victorian students to achieve their selective school dreams through expert guidance and personalised teaching
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-10 w-10 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                VM Tutoring was founded with a simple yet powerful mission: to help Victorian students unlock their full potential and gain entry to their dream selective schools. With years of experience in education and a deep understanding of the selective school entrance process, we've developed a proven approach that combines academic excellence with personalised support.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our tutoring methodology is built on three core pillars: comprehensive subject mastery, strategic exam techniques, and confidence building. We believe that success in selective school exams comes not just from knowing the content, but from understanding how to apply knowledge effectively under exam conditions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Over the years, we've helped hundreds of students achieve their selective school goals, with many gaining entry to prestigious schools including Melbourne High, Mac.Robertson Girls' High School, and Nossal High School. Our track record speaks to our commitment to excellence and our students' dedication to their academic journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Teaching Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                We believe in nurturing not just academic skills, but confident, independent learners
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-white">
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Small Group Learning:</strong> We maintain small class sizes to ensure every child receives individual attention and can actively participate in lessons. This approach allows us to identify and address each student's unique challenges while fostering collaborative learning.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Structured Preparation:</strong> Our curriculum follows a carefully structured program that covers all aspects of the selective school exam—mathematics, reading comprehension, numerical reasoning, and verbal reasoning. We systematically build skills from foundational concepts to advanced problem-solving.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Regular Feedback:</strong> Parents receive weekly updates on their child's progress, including strengths, areas for improvement, and homework completion. This transparent communication ensures everyone is aligned on the student's learning journey.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Exam Strategy:</strong> Beyond content knowledge, we teach proven strategies for time management, question analysis, and stress reduction. Students learn how to approach different question types efficiently and confidently.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide our teaching and student relationships
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Tutor */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Meet Your Tutor</h2>
            </div>

            <Card className="p-8 md:p-12 bg-white">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Experienced Education Specialist</h3>
                  <p className="text-primary font-medium">Selective School Exam Expert</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    With extensive experience in preparing students for Victorian selective school entrance exams, I bring a deep understanding of both the academic content and the exam psychology that leads to success.
                  </p>
                  
                  <p className="leading-relaxed">
                    My approach combines rigorous academic preparation with emotional support, helping students develop not just the knowledge but also the confidence and resilience needed for competitive entrance exams.
                  </p>
                  
                  <p className="leading-relaxed">
                    I hold advanced qualifications in education and regularly update my teaching methods to reflect the latest exam trends and educational research. Most importantly, I'm passionate about seeing students achieve their dreams and reach their full potential.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
