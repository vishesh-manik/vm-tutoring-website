import { Award, Target, Heart, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import tutorPhoto from "@/assets/tutor-photo.jpg";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in ACER-based Selective School exam preparation.",
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
              Empowering Victorian students to achieve their Selective School dreams through expert ACER-based guidance and personalised teaching
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
                VM Tutoring was founded with a simple yet powerful mission: to help Victorian students unlock their full potential and gain entry to their dream Selective Schools. With years of experience in education and a deep understanding of the ACER-based Selective School entrance process, we've developed a proven approach that combines academic excellence with personalised support.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our tutoring methodology is built on three core pillars: comprehensive subject mastery, strategic ACER exam techniques, and confidence building. We believe that success in Selective School exams comes not just from knowing the content, but from understanding how to apply knowledge effectively under exam conditions.
              </p>
              
              <p className="text-lg leading-relaxed">
                Over the years, we've helped hundreds of students achieve their Selective School goals, with many gaining entry to prestigious schools including Melbourne High, Mac.Robertson Girls' High School, and Nossal High School. Our track record speaks to our commitment to excellence and our students' dedication to their academic journeys.
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
                  <strong className="text-foreground">Structured ACER Preparation:</strong> Our curriculum follows a carefully structured program that covers all aspects of the ACER Selective School exam—mathematics, reading comprehension, numerical reasoning, and verbal reasoning. We systematically build skills from foundational concepts to advanced problem-solving.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Regular Feedback:</strong> Parents receive weekly updates on their child's progress, including strengths, areas for improvement, and homework completion. This transparent communication ensures everyone is aligned on the student's learning journey.
                </p>
                
                <p className="text-lg leading-relaxed">
                  <strong className="text-foreground">Exam Strategy:</strong> Beyond content knowledge, we teach proven strategies for time management, question analysis, and stress reduction. Students learn how to approach different ACER question types efficiently and confidently.
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

      {/* Meet Your Tutor */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Meet Your Tutor</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              {/* Image Side */}
              <div className="flex justify-center">
                <div className="text-center">
                  <img 
                    src={tutorPhoto} 
                    alt="Vishesh Manik - Selective School Tutor"
                    className="w-80 h-80 object-cover object-top rounded-2xl shadow-2xl"
                  />
                  <p className="mt-4 text-2xl font-bold text-primary-foreground">Vishesh Manik</p>
                </div>
              </div>

              {/* Description Side */}
              <div className="flex justify-center">
                <Card className="p-8 shadow-xl bg-background/95 backdrop-blur max-w-md">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Vishesh Manik</span> brings over three years of dedicated experience in Selective School preparation, having helped 50+ students achieve their academic dreams. His teaching approach combines proven ACER exam strategies with personalised attention, ensuring each student reaches their full potential. Through his YouTube channel with 2,000+ subscribers, he shares free resources and tips to support students on their Selective School journey.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;