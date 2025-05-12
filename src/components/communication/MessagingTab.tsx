import React, { useState } from 'react';
import { Bell, MessageCircle, User, CheckCircle2, Send, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ComposeMessage from './messaging/ComposeMessage';
import MessagePreview from './messaging/MessagePreview';
import NotificationSettings from './messaging/NotificationSettings';
import { useUser } from '@/context/UserContext';

const MessagingFeatureItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-accent/10 flex items-center justify-center mr-4">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MessagingTab = () => {
  const [activeTab, setActiveTab] = useState('inbox');
  const { toast } = useToast();
  const { hasRole } = useUser();
  
  const messagingFeatures = [
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
  ];

  const messages = [
    {
      id: 1,
      title: "Mathe-Test morgen",
      message: "Bitte erinnern Sie Emma daran, ihren Taschenrechner für den morgigen Mathetest mitzubringen, der die Kapitel 5-7 abdeckt.",
      time: "10:30 Uhr",
      sender: "Herr Schmidt",
      category: "academic",
      priority: "normal" as "normal",
      status: "sent"
    },
    {
      id: 2,
      title: "Genehmigung für Ausflug",
      message: "Der Erlaubnisschein für den Ausflug zum Wissenschaftsmuseum muss bis Freitag eingereicht werden. Bitte unterschreiben und mit Emma zurücksenden.",
      time: "Gestern",
      sender: "Schulverwaltung",
      category: "event",
      priority: "high" as "high",
      status: "read"
    },
    {
      id: 3,
      title: "Fehlende Hausaufgabe",
      message: "Emma hat die Mathematik-Hausaufgabe von gestern nicht eingereicht. Bitte stellen Sie sicher, dass sie diese morgen abgibt.",
      time: "Vor 2 Tagen",
      sender: "Frau Müller",
      category: "academic",
      priority: "urgent" as "urgent",
      status: "unread"
    }
  ];

  const handleSendMessage = (messageData: any) => {
    toast({
      title: "Nachricht gesendet",
      description: `Ihre Nachricht wurde an die Eltern von ${messageData.student} gesendet.`,
    });
  };

  return (
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
          {messagingFeatures.map((item, i) => (
            <MessagingFeatureItem
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {hasRole(['teacher', 'admin']) && (
          <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/10">
            <h4 className="font-medium text-accent mb-2">Schnellzugriff für Lehrer</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="flex items-center justify-start"
                onClick={() => setActiveTab('compose')}
              >
                <Send className="h-4 w-4 mr-2" />
                Nachricht verfassen
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center justify-start"
                onClick={() => setActiveTab('settings')}
              >
                <Bell className="h-4 w-4 mr-2" />
                Benachrichtigungen
              </Button>
            </div>
          </div>
        )}
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
          
          {hasRole(['teacher', 'admin']) ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 p-2 mx-4 mt-2">
                <TabsTrigger value="inbox">Eingang</TabsTrigger>
                <TabsTrigger value="compose">Verfassen</TabsTrigger>
                <TabsTrigger value="settings">Einstellungen</TabsTrigger>
              </TabsList>
              
              <div className="p-4">
                <TabsContent value="inbox" className="space-y-4">
                  {messages.map((message) => (
                    <MessagePreview
                      key={message.id}
                      title={message.title}
                      message={message.message}
                      time={message.time}
                      sender={message.sender}
                      priority={message.priority}
                      category={message.category}
                    />
                  ))}
                  
                  <div className="h-10 flex items-center justify-center border-t text-primary text-sm font-medium cursor-pointer">
                    Alle Nachrichten anzeigen
                  </div>
                </TabsContent>
                
                <TabsContent value="compose">
                  <ComposeMessage onSend={handleSendMessage} />
                </TabsContent>
                
                <TabsContent value="settings">
                  <NotificationSettings />
                </TabsContent>
              </div>
            </Tabs>
          ) : (
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <MessagePreview
                  key={message.id}
                  title={message.title}
                  message={message.message}
                  time={message.time}
                  sender={message.sender}
                  priority={message.priority}
                  category={message.category}
                />
              ))}
              
              <div className="h-10 flex items-center justify-center border-t text-primary text-sm font-medium cursor-pointer">
                Alle Nachrichten anzeigen
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagingTab;
