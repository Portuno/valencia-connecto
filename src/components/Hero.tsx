import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-valencia-cream/30 to-valencia-sage/20 pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-valencia-brown leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-valencia-brown/80 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="pt-4">
            <Button 
              onClick={() => navigate('/register')}
              className="bg-valencia-orange hover:bg-valencia-terracotta text-white text-lg px-8 py-6 h-auto"
            >
              {t("nav.signup")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}