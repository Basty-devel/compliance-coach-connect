
import React from 'react';
import { useUser } from '../context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, CheckCircle2, User, Users } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useUser();

  // Different dashboard content based on user role
  const renderRoleSpecificContent = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Compliance-Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">94%</p>
                <p className="text-sm text-muted-foreground">DSGVO, ISO 27001, NIS2</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Benutzerübersicht
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">248</p>
                <p className="text-sm text-muted-foreground">Aktive Benutzer</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Sicherheitsaudits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Ausstehende Überprüfungen</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'teacher':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Meine Klassen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Aktive Klassen</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Aufgaben
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-muted-foreground">Unerledigte Aufgaben</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Compliance-Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">85%</p>
                <p className="text-sm text-muted-foreground">Schulungsvollständigkeit</p>
              </CardContent>
            </Card>
          </div>
        );
      case 'parent':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Kind(er)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Registrierte Kinder</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Nachrichten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Ungelesene Nachrichten</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Willkommen bei Compliance Coach</CardTitle>
              <CardDescription>Ihr persönliches Dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Bitte wenden Sie sich an Ihren Administrator, um vollständigen Zugriff zu erhalten.</p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">
            Willkommen, {user?.name} ({user?.role})
          </p>
        </div>
        <Button variant="outline" onClick={logout}>
          Abmelden
        </Button>
      </div>

      {renderRoleSpecificContent()}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Letzte Aktivitäten</h2>
        <div className="space-y-2">
          <p className="p-2 bg-gray-50 rounded-md">Dokument "Datenschutzerklärung" wurde aktualisiert</p>
          <p className="p-2 bg-gray-50 rounded-md">Neues Compliance-Training verfügbar</p>
          <p className="p-2 bg-gray-50 rounded-md">Risikobewertung für "MS Teams" abgeschlossen</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
