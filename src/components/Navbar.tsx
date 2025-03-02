
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavbarLogo } from "./navbar/NavbarLogo";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNavMenu } from "./navbar/MobileNavMenu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavbarLogo />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavMenu isOpen={isMenuOpen} onLinkClick={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
}
