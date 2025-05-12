
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser, UserRole } from '../context/UserContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>('guest');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const from = location.state?.from?.pathname || '/dashboard';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, you would validate credentials with a backend
    // This is just for demonstration purposes
    if (email && password) {
      // Simulate a small delay for login
      setTimeout(() => {
        // Simulate successful login
        login({
          id: '1',
          name: email.split('@')[0],
          email,
          role: selectedRole,
        });
        
        toast({
          title: "Erfolgreich angemeldet",
          description: `Willkommen zurück als ${selectedRole}.`,
        });
        
        // Redirect to the page they tried to visit or dashboard
        navigate(from, { replace: true });
        setIsSubmitting(false);
      }, 800);
    } else {
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <Shield className="h-12 w-12 text-primary mb-2" />
          <CardTitle className="text-2xl font-bold">Anmelden</CardTitle>
          <CardDescription>
            Bitte melden Sie sich an, um auf Ihr Konto zuzugreifen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@beispiel.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rolle (Demo)</Label>
              <Select 
                value={selectedRole} 
                onValueChange={(value: UserRole) => setSelectedRole(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Wählen Sie Ihre Rolle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="teacher">Lehrer</SelectItem>
                  <SelectItem value="parent">Eltern</SelectItem>
                  <SelectItem value="student">Schüler</SelectItem>
                  <SelectItem value="guest">Gast</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground mt-1">
                Dies ist nur zu Demonstrationszwecken. In einer echten App würde die Rolle vom Server zugewiesen.
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Wird angemeldet..." : "Anmelden"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
