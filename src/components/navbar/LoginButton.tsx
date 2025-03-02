
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface LoginButtonProps {
  fullWidth?: boolean;
  onClick?: () => void;
}

export const LoginButton = ({ fullWidth = false, onClick }: LoginButtonProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/auth');
    }
  };
  
  return (
    <Button 
      onClick={handleClick}
      className={`bg-valencia-orange hover:bg-valencia-terracotta text-white ${fullWidth ? 'w-full' : ''}`}
    >
      Login
    </Button>
  );
};
