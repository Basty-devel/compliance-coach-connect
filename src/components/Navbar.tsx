
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-primary mr-2" />
          <span className="font-bold text-xl text-primary">Compliance Coach</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Funktionen</a>
          <a href="#security" className="text-gray-700 hover:text-primary transition-colors">Sicherheit</a>
          <a href="#communication" className="text-gray-700 hover:text-primary transition-colors">Kommunikation</a>
          <Button size="sm">Jetzt Starten</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pt-2 pb-4 bg-white border-t">
          <div className="flex flex-col space-y-3">
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Funktionen
            </a>
            <a 
              href="#security" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Sicherheit
            </a>
            <a 
              href="#communication" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Kommunikation
            </a>
            <Button className="w-full mt-2">Jetzt Starten</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
