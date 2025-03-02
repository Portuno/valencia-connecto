
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { AsadoButton } from "./AsadoButton";
import { LanguageToggle } from "./LanguageToggle";
import { LoginButton } from "./LoginButton";

interface MobileNavMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export const MobileNavMenu = ({ isOpen, onLinkClick }: MobileNavMenuProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const resourceCategories = [
    { path: '/verticals/tech', label: 'Tecnología' },
    { path: '/verticals/law', label: 'Legal' },
    { path: '/verticals/audiovisual', label: 'Audiovisual' },
    { path: '/verticals/business', label: 'Negocios' },
    { path: '/verticals/health', label: 'Salud & Bienestar' },
    { path: '/verticals/hospitality', label: 'Comunidad' },
  ];
  
  const handleNavigation = (path: string) => {
    navigate(path);
    onLinkClick();
  };
  
  return (
    <div className="md:hidden pb-4">
      <div className="flex flex-col space-y-4">
        <AsadoButton onClick={() => handleNavigation('/asado')} />
        
        <div className="space-y-2 pl-4">
          <p className="text-sm font-semibold text-gray-500">Eventos</p>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('/events/upcoming'); }}
            className="block text-gray-600 hover:text-valencia-orange transition-colors"
          >
            Próximos Eventos
          </a>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavigation('/events/previous'); }}
            className="block text-gray-600 hover:text-valencia-orange transition-colors"
          >
            Eventos Anteriores
          </a>
        </div>
        
        <div className="space-y-2 pl-4">
          <p className="text-sm font-semibold text-gray-500">Recursos</p>
          {resourceCategories.map((item) => (
            <a
              key={item.path}
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavigation(item.path); }}
              className="block text-gray-600 hover:text-valencia-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNavigation('/feedback'); }}
          className="text-gray-600 hover:text-valencia-orange transition-colors"
        >
          {t("nav.feedback")}
        </a>
        
        <LanguageToggle mobile={true} className="justify-start" />
        
        <LoginButton fullWidth={true} onClick={() => handleNavigation('/auth')} />
      </div>
    </div>
  );
};
