
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 grid grid-rows-[auto,auto] gap-8">
          <Hero />
          <div className="container mx-auto px-4 -mt-16 mb-16">
            <div className="flex flex-col items-center">
              <Button 
                onClick={() => navigate('/asado')}
                className="bg-valencia-orange hover:bg-valencia-terracotta text-white mb-8 py-6 px-8 text-lg flex items-center gap-2"
              >
                <Flame className="h-5 w-5" />
                Unirse al Gran Asado Terreta Hub
              </Button>
              <NewsletterForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
