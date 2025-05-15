
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Menu, X, User } from 'lucide-react';
import { Link, useNavigate, UNSAFE_NavigationContext } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useToast } from '@/hooks/use-toast';

// Safe useNavigate hook: returns a noop if not in router context
function useSafeNavigate() {
  const context = React.useContext(UNSAFE_NavigationContext);
  try {
    // If context is present, we're inside a Router
    if (context) {
      return useNavigate();
    }
    // eslint-disable-next-line no-empty
  } catch {}
  // Fallback: return a dummy function
  return () => {};
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isAuthenticated, user, logout } = useUser();
  const navigate = useSafeNavigate();
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Erfolgreich abgemeldet",
      description: "Vielen Dank für Ihren Besuch.",
    });
    navigate('/');
    toggleMobileMenu();
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md py-4 sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl text-primary">Compliance Coach</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Funktionen</a>
          <a href="#security" className="text-gray-700 hover:text-primary transition-colors">Sicherheit</a>
          <a href="#communication" className="text-gray-700 hover:text-primary transition-colors">Kommunikation</a>
          <Link to="/training" className="text-gray-700 hover:text-primary transition-colors">Training</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{user?.role}</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Abmelden
                </Button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button size="sm">Anmelden</Button>
            </Link>
          )}
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
            <Link 
              to="/training" 
              className="text-gray-700 hover:text-primary transition-colors py-2"
              onClick={toggleMobileMenu}
            >
              Training
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  Dashboard
                </Link>
                <Button className="w-full mt-2" variant="outline" onClick={handleLogout}>
                  Abmelden
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={toggleMobileMenu}>
                <Button className="w-full mt-2">Anmelden</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

