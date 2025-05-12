
import React, { useState } from 'react';
import { BookOpen, Bell, Calendar, Users, CheckCircle2, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AttendanceTracker from './classbook/AttendanceTracker';
import AssignmentManager from './classbook/AssignmentManager';
import StudentPerformance from './classbook/StudentPerformance';
import ClassCalendar from './classbook/ClassCalendar';

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

const ClassbookTab = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
      
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
          <div className="bg-secondary p-4 text-white flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="font-semibold">Virtuelles Klassenbuch</span>
            </div>
            <Calendar className="h-5 w-5" />
          </div>
          
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 p-0 h-auto">
              <TabsTrigger value="overview" className="text-xs py-2">Übersicht</TabsTrigger>
              <TabsTrigger value="attendance" className="text-xs py-2">Anwesenheit</TabsTrigger>
              <TabsTrigger value="assignments" className="text-xs py-2">Aufgaben</TabsTrigger>
              <TabsTrigger value="performance" className="text-xs py-2">Leistung</TabsTrigger>
            </TabsList>
            
            <div className="p-4">
              <TabsContent value="overview">
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
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">85% Anwesenheit</span>
                    </div>
                    <p className="text-sm mt-1">Themen: Goethes Gedichte</p>
                    <div className="flex items-center mt-2 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                      <span>Aufsatzabgabe nächsten Dienstag</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="attendance">
                <AttendanceTracker />
              </TabsContent>
              
              <TabsContent value="assignments">
                <AssignmentManager />
              </TabsContent>
              
              <TabsContent value="performance">
                <StudentPerformance />
              </TabsContent>
            </div>
          </Tabs>
          
          <div className="border-t p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">Klassenkalender anzeigen</span>
              <button className="text-secondary text-sm font-medium">
                Öffnen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassbookTab;
