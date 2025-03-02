
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const EventsMenu = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  return (
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
                Próximos Eventos
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate('/events/previous')}
              >
                Eventos Anteriores
              </Button>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
