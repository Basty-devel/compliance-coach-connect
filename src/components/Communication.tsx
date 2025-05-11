
import { MessageCircle, Bell, BookOpen, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Communication = () => {
  return (
    <div id="communication" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Nahtlose Kommunikation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Verbindung zwischen Lehrern und Eltern
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Verbessern Sie das Bildungserlebnis mit Tools, die zur Verbesserung der Kommunikation und des Klassenmanagements entwickelt wurden.
          </p>
        </div>

        <Tabs defaultValue="messaging" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="messaging">Push-Nachrichten</TabsTrigger>
              <TabsTrigger value="classbook">Virtuelles Klassenbuch</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="messaging" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-gray-900">
                  Echtzeit-Messaging, das verbindet
                </h3>
                <p className="text-lg text-gray-600">
                  Unser Push-Messaging-System schafft einen direkten Kommunikationskanal zwischen Lehrern und Eltern 
                  und stellt sicher, dass wichtige Updates sofort übermittelt werden.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    {
                      icon: Bell,
                      title: "Sofortige Benachrichtigungen",
                      description: "Senden Sie Echtzeitwarnungen zu Anwesenheit, Noten und Schulaktivitäten."
                    },
                    {
                      icon: User,
                      title: "Personalisierte Kommunikation",
                      description: "Übermitteln Sie gezielte Nachrichten direkt an bestimmte Eltern bezüglich ihres Kindes."
                    },
                    {
                      icon: CheckCircle2,
                      title: "Zustellbestätigung",
                      description: "Überprüfen Sie, wann Nachrichten von Eltern empfangen und gelesen wurden."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
                  <div className="bg-primary p-4 text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Schulupdates</span>
                    </div>
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="p-4 space-y-4">
                    {[
                      {
                        title: "Mathe-Test morgen",
                        message: "Bitte erinnern Sie Emma daran, ihren Taschenrechner für den morgigen Mathetest mitzubringen, der die Kapitel 5-7 abdeckt.",
                        time: "10:30 Uhr",
                        sender: "Herr Schmidt"
                      },
                      {
                        title: "Genehmigung für Ausflug",
                        message: "Der Erlaubnisschein für den Ausflug zum Wissenschaftsmuseum muss bis Freitag eingereicht werden. Bitte unterschreiben und mit Emma zurücksenden.",
                        time: "Gestern",
                        sender: "Schulverwaltung"
                      }
                    ].map((message, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <h5 className="font-semibold text-gray-900">{message.title}</h5>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm mt-1">{message.message}</p>
                        <div className="mt-2 text-xs text-right text-gray-500">Von: {message.sender}</div>
                      </div>
                    ))}
                    
                    <div className="h-10 flex items-center justify-center border-t text-primary text-sm font-medium cursor-pointer">
                      Alle Nachrichten anzeigen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="classbook" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
                  <div className="bg-secondary p-4 text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Virtuelles Klassenbuch</span>
                    </div>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-3">Klasse 7B - Wochenübersicht</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">Mathematik</span>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">92% Anwesenheit</span>
                        </div>
                        <p className="text-sm mt-1">Themen: Quadratische Gleichungen, Wahrscheinlichkeit</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                          <span>Hausaufgabe fällig am Freitag</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">Naturwissenschaft</span>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">96% Anwesenheit</span>
                        </div>
                        <p className="text-sm mt-1">Themen: Photosynthese, Zellteilung</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                          <span>Test am Montag</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between">
                          <span className="font-medium">Deutsche Literatur</span>
                          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">85% Anwesenheit</span>
                        </div>
                        <p className="text-sm mt-1">Themen: Goethes Gedichte</p>
                        <div className="flex items-center mt-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                          <span>Aufsatzabgabe nächsten Dienstag</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Digitales Klassenbuch immer griffbereit
                </h3>
                <p className="text-lg text-gray-600">
                  Unser virtuelles Klassenbuch vereinfacht das Klassenmanagement durch Digitalisierung von Anwesenheit, 
                  Aufgaben, Noten und Schülerleistungsverfolgung.
                </p>
                
                <div className="space-y-4 mt-6">
                  {[
                    {
                      icon: BookOpen,
                      title: "Umfassende Nachverfolgung",
                      description: "Verfolgen Sie Anwesenheit, Aufgaben, Noten und Schülerleistung an einem Ort."
                    },
                    {
                      icon: Bell,
                      title: "Echtzeit-Updates",
                      description: "Eltern erhalten sofortige Updates über die Leistung und Anwesenheit ihres Kindes."
                    },
                    {
                      icon: Calendar,
                      title: "Integrierte Planung",
                      description: "Planen Sie Unterricht, Aufgaben und Elterngespräche mit unserem integrierten Kalender."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center mr-4">
                        <item.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;
