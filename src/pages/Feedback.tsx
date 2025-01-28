import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useLanguage, LanguageProvider } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare } from "lucide-react";

const FeedbackContent = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log("Feedback submitted:", feedback);
    
    toast({
      title: t("feedback.success"),
      description: new Date().toLocaleDateString(),
    });
    
    setFeedback("");
  };

  return (
    <div className="container mx-auto px-4 pt-24">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-6 w-6 text-valencia-orange" />
          <h1 className="text-4xl font-bold text-gray-900">{t("feedback.title")}</h1>
        </div>
        <p className="text-xl text-gray-600 mb-8">{t("feedback.subtitle")}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t("feedback.placeholder")}
            className="min-h-[200px]"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-valencia-orange hover:bg-valencia-terracotta text-white"
          >
            {t("feedback.submit")}
          </Button>
        </form>
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <FeedbackContent />
      </div>
    </LanguageProvider>
  );
};

export default Feedback;