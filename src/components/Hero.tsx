import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-valencia-blue/10 to-valencia-orange/10 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="pt-4">
            <Button className="bg-valencia-orange hover:bg-valencia-terracotta text-white text-lg px-8 py-6 h-auto">
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}