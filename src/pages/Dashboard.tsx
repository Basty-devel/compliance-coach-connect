import React from 'react';
import { useUser } from '../context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Lock, CheckCircle2, User, Users, BookOpen, Trash, Edit, Plus, AlertTriangle, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { mockUsers, mockFrameworks, mockAlerts, mockTasks } from "@/mocks/complianceMockData";
import type { User as MockUser, ComplianceTask } from "@/types/complianceModels";

const Dashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Erfolgreich abgemeldet",
      description: "Vielen Dank für Ihren Besuch.",
    });
    navigate('/');
  };

  // Mock admin-table actions (demo only!)
  const handleMockEdit = (u: MockUser) => {
    toast({ title: "Demo-Aktion", description: `${u.name} (Rolle: ${u.role}) bearbeiten (Demo)`, });
  };
  const handleMockDelete = (u: MockUser) => {
    toast({ title: "Demo-Aktion", description: `${u.name} wurde entfernt (nur Demo!)`, variant: "destructive" });
  };
  const handleMockAssignTask = (task: ComplianceTask) => {
    toast({ title: "Demo-Aufgabe zugewiesen", description: `"${task.title}" (nur Demo!)` });
  };

  // Different dashboard content based on user role
  const renderRoleSpecificContent = () => {
    switch (user?.role) {
      case 'admin':
        return (
          <>
            {/* Admin Quick Stats */}
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

            {/* Admin: User Management */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Benutzerverwaltung (Demo)
                  <span className="ml-2 text-xs text-muted-foreground font-normal">(keine echten Aktionen)</span>
                </CardTitle>
                <CardDescription>Verwalten Sie alle Demo-Benutzer im System.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>E-Mail</TableHead>
                        <TableHead>Rolle</TableHead>
                        <TableHead>Aktionen</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockUsers.map((u) => (
                        <TableRow key={u.id}>
                          <TableCell>{u.name}</TableCell>
                          <TableCell>{u.email}</TableCell>
                          <TableCell className="capitalize">{u.role}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => handleMockEdit(u)}>
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => handleMockDelete(u)}>
                              <Trash className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-2 flex justify-end">
                  <Button variant="secondary" size="sm">
                    <Plus className="w-4 h-4 mr-1" /> Benutzer hinzufügen (Demo)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Admin: Compliance Alerts */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />
                  Compliance-Warnungen (Demo)
                </CardTitle>
                <CardDescription>Aktuelle Warnungen und Meldungen im System</CardDescription>
              </CardHeader>
              <CardContent>
                {mockAlerts.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Keine aktuellen Warnungen.</p>
                ) : (
                  <ul className="space-y-2">
                    {mockAlerts.map((alert) => (
                      <li key={alert.id} className={`p-3 rounded-md flex items-start gap-3 ${alert.type === "critical" ? "bg-red-50" : alert.type === "warning" ? "bg-yellow-50" : "bg-blue-50"}`}>
                        {alert.type === "critical" ? (
                          <AlertTriangle className="text-red-500" />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="text-yellow-500" />
                        ) : (
                          <Info className="text-blue-500" />
                        )}
                        <div>
                          <div className="font-medium">{alert.message}</div>
                          <div className="text-xs text-gray-500">{new Date(alert.time).toLocaleString()} • {alert.framework}</div>
                          {alert.resolved && (
                            <span className="inline-block text-xs rounded px-2 ml-2 bg-green-100 text-green-700">Behoben</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>

            {/* Admin: Compliance Frameworks */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Compliance-Frameworks (Demo)
                  <span className="ml-1 text-xs text-muted-foreground">(nur Anzeige)</span>
                </CardTitle>
                <CardDescription>Verfügbare Frameworks im System.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex gap-6 flex-wrap">
                  {mockFrameworks.map(fw => (
                    <li key={fw} className="bg-gray-100 rounded px-4 py-2 font-medium shadow-sm">{fw}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Admin: Task Assignment */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Aufgabenverwaltung (Demo)
                </CardTitle>
                <CardDescription>Bestehende Compliance-Aufgaben und scheindemo Zuweisen.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Aufgabe</TableHead>
                        <TableHead>Beschreibung</TableHead>
                        <TableHead>Framework</TableHead>
                        <TableHead>Beteiligter</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Aktionen</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockTasks.map(task => (
                        <TableRow key={task.id}>
                          <TableCell>{task.title}</TableCell>
                          <TableCell>{task.description}</TableCell>
                          <TableCell>{task.framework}</TableCell>
                          <TableCell>
                            {mockUsers.find(u => u.id === task.assignedTo)?.name || "Niemand"}
                          </TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              task.status === "completed" ? "bg-green-100 text-green-800" :
                              task.status === "in-progress" ? "bg-yellow-100 text-yellow-700" :
                              task.status === "overdue" ? "bg-red-100 text-red-700" :
                              "bg-gray-100 text-gray-600"
                            }`}>
                              {task.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => handleMockAssignTask(task)}>
                              <Plus className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
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
      case 'student':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Hausaufgaben
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Offene Hausaufgaben</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Noten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2,3</p>
                <p className="text-sm text-muted-foreground">Notendurchschnitt</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Anwesenheit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">Anwesenheitsrate</p>
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
        <Button variant="outline" onClick={handleLogout}>
          Abmelden
        </Button>
      </div>

      {renderRoleSpecificContent()}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Letzte Aktivitäten</h2>
        <div className="space-y-2">
          {user?.role === 'student' ? (
            <>
              <p className="p-2 bg-gray-50 rounded-md">Neue Hausaufgabe in Mathematik wurde zugewiesen</p>
              <p className="p-2 bg-gray-50 rounded-md">Klassenarbeit in Deutsch am Freitag</p>
              <p className="p-2 bg-gray-50 rounded-md">Neue Nachricht vom Klassenlehrer</p>
            </>
          ) : (
            <>
              <p className="p-2 bg-gray-50 rounded-md">Dokument "Datenschutzerklärung" wurde aktualisiert</p>
              <p className="p-2 bg-gray-50 rounded-md">Neues Compliance-Training verfügbar</p>
              <p className="p-2 bg-gray-50 rounded-md">Risikobewertung für "MS Teams" abgeschlossen</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
