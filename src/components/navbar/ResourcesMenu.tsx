
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const ResourcesMenu = () => {
  const navigate = useNavigate();
  
  const resourceCategories = [
    { path: '/verticals/tech', label: 'Tecnología' },
    { path: '/verticals/law', label: 'Legal' },
    { path: '/verticals/audiovisual', label: 'Audiovisual' },
    { path: '/verticals/business', label: 'Negocios' },
    { path: '/verticals/health', label: 'Salud & Bienestar' },
    { path: '/verticals/hospitality', label: 'Comunidad' },
  ];
  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className="text-gray-600 hover:text-valencia-orange transition-colors"
            onClick={() => navigate('/resources')}
          >
            Recursos
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white">
            <div className="w-48 p-2">
              {resourceCategories.map((item) => (
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
  );
};
