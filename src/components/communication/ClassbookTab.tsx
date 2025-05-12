
import { BookOpen, Bell, Calendar } from 'lucide-react';

const ClassbookFeatureItem = ({ 
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
      <div className="flex-shrink-0 h-10 w-10 rounded-md bg-secondary/10 flex items-center justify-center mr-4">
        <Icon className="h-5 w-5 text-secondary" />
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-900">{title}</h4>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ClassSubject = ({ 
  subject, 
  attendance, 
  topics, 
  alert, 
  alertColor 
}: { 
  subject: string; 
  attendance: string; 
  topics: string; 
  alert: string; 
  alertColor: string;
}) => {
  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="flex justify-between">
        <span className="font-medium">{subject}</span>
        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">{attendance}</span>
      </div>
      <p className="text-sm mt-1">Themen: {topics}</p>
      <div className="flex items-center mt-2 text-sm text-gray-600">
        <div className={`w-2 h-2 bg-${alertColor}-500 rounded-full mr-1`}></div>
        <span>{alert}</span>
      </div>
    </div>
  );
};

const ClassbookTab = () => {
  const classbookFeatures = [
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
  ];

  const subjects = [
    {
      subject: "Mathematik",
      attendance: "92% Anwesenheit",
      topics: "Quadratische Gleichungen, Wahrscheinlichkeit",
      alert: "Hausaufgabe fällig am Freitag",
      alertColor: "yellow"
    },
    {
      subject: "Naturwissenschaft",
      attendance: "96% Anwesenheit",
      topics: "Photosynthese, Zellteilung",
      alert: "Test am Montag",
      alertColor: "red"
    },
    {
      subject: "Deutsche Literatur",
      attendance: "85% Anwesenheit",
      topics: "Goethes Gedichte",
      alert: "Aufsatzabgabe nächsten Dienstag",
      alertColor: "blue"
    }
  ];

  return (
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
              {subjects.map((subject, index) => (
                <ClassSubject
                  key={index}
                  subject={subject.subject}
                  attendance={subject.attendance}
                  topics={subject.topics}
                  alert={subject.alert}
                  alertColor={subject.alertColor}
                />
              ))}
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
          {classbookFeatures.map((item, i) => (
            <ClassbookFeatureItem
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassbookTab;
