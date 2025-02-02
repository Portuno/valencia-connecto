import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold text-valencia-orange cursor-pointer"
            >
              Terreta Hub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('/'); }} 
              className="text-gray-600 hover:text-valencia-orange transition-colors"
            >
              {t("nav.home")}
            </a>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-gray-600 hover:text-valencia-orange transition-colors"
                    onClick={() => navigate('/events')}
                  >
                    {t("nav.events")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <div className="w-48 p-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => navigate('/events/upcoming')}
                      >
                        Upcoming Events
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => navigate('/events/previous')}
                      >
                        Previous Events
                      </Button>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="text-gray-600 hover:text-valencia-orange transition-colors"
                    onClick={() => navigate('/resources')}
                  >
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <div className="w-48 p-2">
                      {[
                        { path: '/verticals/tech', label: 'Technology' },
                        { path: '/verticals/law', label: 'Law' },
                        { path: '/verticals/audiovisual', label: 'Audiovisual' },
                        { path: '/verticals/business', label: 'Business' },
                        { path: '/verticals/health', label: 'Health & Wellness' },
                        { path: '/verticals/hospitality', label: 'Community' },
                      ].map((item) => (
                        <Button
                          key={item.path}
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => navigate(item.path)}
                        >
                          {item.label}
                        </Button>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('/feedback'); }}
              className="text-gray-600 hover:text-valencia-orange transition-colors"
            >
              {t("nav.feedback")}
            </a>

            <Button
              variant="ghost"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="text-valencia-blue hover:text-valencia-orange"
            >
              {language === "en" ? "ES" : "EN"}
            </Button>
            <Button 
              onClick={() => navigate('/register')}
              className="bg-valencia-orange hover:bg-valencia-terracotta text-white"
            >
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
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false); }}
                className="text-gray-600 hover:text-valencia-orange transition-colors"
              >
                {t("nav.home")}
              </a>
              <div className="space-y-2 pl-4">
                <p className="text-sm font-semibold text-gray-500">Events</p>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigate('/events/upcoming'); setIsMenuOpen(false); }}
                  className="block text-gray-600 hover:text-valencia-orange transition-colors"
                >
                  Upcoming Events
                </a>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); navigate('/events/previous'); setIsMenuOpen(false); }}
                  className="block text-gray-600 hover:text-valencia-orange transition-colors"
                >
                  Previous Events
                </a>
              </div>
              <div className="space-y-2 pl-4">
                <p className="text-sm font-semibold text-gray-500">Resources</p>
                {[
                  { path: '/verticals/tech', label: 'Technology' },
                  { path: '/verticals/law', label: 'Law' },
                  { path: '/verticals/audiovisual', label: 'Audiovisual' },
                  { path: '/verticals/business', label: 'Business' },
                  { path: '/verticals/health', label: 'Health & Wellness' },
                  { path: '/verticals/hospitality', label: 'Community' },
                ].map((item) => (
                  <a
                    key={item.path}
                    href="#"
                    onClick={(e) => { e.preventDefault(); navigate(item.path); setIsMenuOpen(false); }}
                    className="block text-gray-600 hover:text-valencia-orange transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/feedback'); setIsMenuOpen(false); }}
                className="text-gray-600 hover:text-valencia-orange transition-colors"
              >
                {t("nav.feedback")}
              </a>
              <Button
                variant="ghost"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
                className="justify-start"
              >
                {language === "en" ? "Español" : "English"}
              </Button>
              <Button 
                onClick={() => { navigate('/register'); setIsMenuOpen(false); }}
                className="bg-valencia-orange hover:bg-valencia-terracotta text-white w-full"
              >
                {t("nav.signup")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}