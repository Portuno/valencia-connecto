
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AsadoButtonProps {
  variant?: "ghost" | "default";
  className?: string;
  onClick?: () => void;
}

export const AsadoButton = ({ 
  variant = "ghost", 
  className = "text-gray-600 hover:text-valencia-orange transition-colors flex items-center gap-1",
  onClick
}: AsadoButtonProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/asado');
    }
  };
  
  return (
    <Button 
      variant={variant}
      onClick={handleClick} 
      className={className}
    >
      <Flame className="h-4 w-4 text-valencia-orange" />
      <span className="font-medium">Asado</span>
    </Button>
  );
};
