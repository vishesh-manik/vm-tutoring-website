import { NavLink } from "@/components/NavLink";
import { Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const YouTubePage = () => {
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

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <Youtube className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Free YouTube Resources</h1>
          <p className="text-lg text-muted-foreground">
            Access free tips, strategies, and practice materials on our YouTube channel
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
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
          <Button asChild size="lg" className="rounded-full bg-red-600 hover:bg-red-700">
            <a
              href="https://www.youtube.com/@vmstudyguides22"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Our YouTube Channel
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YouTubePage;
