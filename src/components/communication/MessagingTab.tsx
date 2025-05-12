
import { Bell, MessageCircle, User, CheckCircle2 } from 'lucide-react';

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

const MessagePreview = ({ 
  title, 
  message, 
  time, 
  sender 
}: { 
  title: string; 
  message: string; 
  time: string; 
  sender: string;
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="flex justify-between items-start">
        <h5 className="font-semibold text-gray-900">{title}</h5>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      <p className="text-gray-700 text-sm mt-1">{message}</p>
      <div className="mt-2 text-xs text-right text-gray-500">Von: {sender}</div>
    </div>
  );
};

const MessagingTab = () => {
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
  ];

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
            {messages.map((message, i) => (
              <MessagePreview
                key={i}
                title={message.title}
                message={message.message}
                time={message.time}
                sender={message.sender}
              />
            ))}
            
            <div className="h-10 flex items-center justify-center border-t text-primary text-sm font-medium cursor-pointer">
              Alle Nachrichten anzeigen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagingTab;
