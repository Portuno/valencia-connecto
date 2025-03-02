
import { useNavigate } from "react-router-dom";
import { AsadoButton } from "./AsadoButton";
import { EventsMenu } from "./EventsMenu";
import { ResourcesMenu } from "./ResourcesMenu";
import { LanguageToggle } from "./LanguageToggle";
import { LoginButton } from "./LoginButton";
import { useLanguage } from "@/contexts/LanguageContext";

export const DesktopNav = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
    <div className="hidden md:flex items-center space-x-8">
      <AsadoButton />
      <EventsMenu />
      <ResourcesMenu />
      
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); navigate('/feedback'); }}
        className="text-gray-600 hover:text-valencia-orange transition-colors"
      >
        {t("nav.feedback")}
      </a>
      
      <LanguageToggle />
      <LoginButton />
    </div>
  );
};
