
import { useNavigate } from "react-router-dom";

export const NavbarLogo = () => {
  const navigate = useNavigate();
  
  return (
    <span 
      onClick={() => navigate('/')} 
      className="text-2xl font-bold text-valencia-orange cursor-pointer"
    >
      Terreta Hub
    </span>
  );
};
