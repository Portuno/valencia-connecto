import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-valencia-orange">Valencia Connect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
              {t("nav.home")}
            </a>
            <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
              {t("nav.events")}
            </a>
            <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
              {t("nav.groups")}
            </a>
            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="text-valencia-blue hover:text-valencia-orange"
            >
              {language === "en" ? "ES" : "EN"}
            </Button>
            <Button variant="ghost">{t("nav.login")}</Button>
            <Button className="bg-valencia-orange hover:bg-valencia-terracotta text-white">
              {t("nav.signup")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
                {t("nav.home")}
              </a>
              <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
                {t("nav.events")}
              </a>
              <a href="#" className="text-gray-600 hover:text-valencia-orange transition-colors">
                {t("nav.groups")}
              </a>
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="justify-start"
              >
                {language === "en" ? "Español" : "English"}
              </Button>
              <Button variant="ghost" className="justify-start">
                {t("nav.login")}
              </Button>
              <Button className="bg-valencia-orange hover:bg-valencia-terracotta text-white w-full">
                {t("nav.signup")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}