import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 grid grid-rows-[auto,auto] gap-8">
          <Hero />
          <div className="container mx-auto px-4 -mt-16">
            <NewsletterForm />
          </div>
        </div>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;