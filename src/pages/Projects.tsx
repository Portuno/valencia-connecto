import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { ProjectSubmissionForm } from "@/components/ProjectSubmissionForm";

const ProjectsContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-valencia-blue/10 to-valencia-orange/10 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 animate-fadeIn mb-16">
          <div className="flex justify-center">
            <Package className="h-16 w-16 text-valencia-orange mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Community Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative projects being built by members of our vibrant Valencia community. From tech startups to creative ventures, see what's happening in our ecosystem.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Submit Your Project</h2>
          <ProjectSubmissionForm />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <ProjectsContent />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Projects;