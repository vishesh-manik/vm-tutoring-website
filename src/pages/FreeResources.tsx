import { Youtube, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FreeResources = () => {
  const videos = [
    {
      id: "lLmsvKnZ6Dc",
      title: "Selective School Tips",
    },
    {
      id: "4hVvBKzStcQ",
      title: "Study Strategies",
    },
    {
      id: "gwtTubzTAUc",
      title: "Practice Techniques",
    },
    {
      id: "d6qSHI455oI",
      title: "Exam Preparation",
    },
  ];

  const mockExams = [
    {
      title: "Mock Exam 1",
      description: "Full-length practice test",
      link: "#", // Replace with actual link
    },
    {
      title: "Mock Exam 2",
      description: "Timed practice test",
      link: "#", // Replace with actual link
    },
    {
      title: "Mock Exam 3",
      description: "Reading & Writing focus",
      link: "#", // Replace with actual link
    },
    {
      title: "Mock Exam 4",
      description: "Maths & Reasoning focus",
      link: "#", // Replace with actual link
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Free Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access free tips, strategies, practice materials, and mock exams to support your Selective School journey
          </p>
        </div>

        {/* Mock Exams Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">Free Mock Exams</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockExams.map((exam, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
                <a href={exam.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <h3 className="font-bold text-lg mb-2">{exam.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exam.description}</p>
                  <span className="text-primary font-medium text-sm flex items-center gap-1">
                    Access Exam <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* YouTube Videos Section */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="h-8 w-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">YouTube Videos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://www.youtube.com/@vmstudyguides22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="mr-2 h-5 w-5" />
                Visit Our YouTube Channel
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResources;
