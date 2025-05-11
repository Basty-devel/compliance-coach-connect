
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Unauthorized = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGoBack = () => {
    toast({
      title: "Navigation",
      description: "Zurück zur vorherigen Seite.",
    });
    navigate(-1);
  };

  const handleGoHome = () => {
    toast({
      title: "Navigation",
      description: "Zurück zur Startseite.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Shield className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Nicht autorisiert</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sie haben nicht die erforderlichen Berechtigungen, um auf diese Seite zuzugreifen.
      </p>
      <div className="flex space-x-4">
        <Button onClick={handleGoHome}>Zurück zur Startseite</Button>
        <Button variant="outline" onClick={handleGoBack}>Zurück zur vorherigen Seite</Button>
      </div>
    </div>
  );
};

export default Unauthorized;
