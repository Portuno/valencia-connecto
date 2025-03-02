
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  variant?: "ghost" | "default";
  className?: string;
  mobile?: boolean;
}

export const LanguageToggle = ({ 
  variant = "ghost",
  className = "text-valencia-blue hover:text-valencia-orange",
  mobile = false
}: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <Button
      variant={variant}
      onClick={() => setLanguage(language === "en" ? "es" : "en")}
      className={className}
    >
      {mobile ? (language === "en" ? "Español" : "English") : (language === "en" ? "ES" : "EN")}
    </Button>
  );
};
