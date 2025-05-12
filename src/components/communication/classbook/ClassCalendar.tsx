
import React, { useState } from 'react';
import { Calendar as CalendarUI } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Clock, FileText, User, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Event {
  id: number;
  title: string;
  date: Date;
  type: 'lesson' | 'homework' | 'test' | 'meeting';
  description: string;
}

const ClassCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Mathematikunterricht - Quadratische Funktionen",
      date: new Date(2025, 4, 15),
      type: "lesson",
      description: "Einführung in quadratische Funktionen und ihre Graphen."
    },
    {
      id: 2,
      title: "Deutsch Test - Gedichtanalyse",
      date: new Date(2025, 4, 20),
      type: "test",
      description: "Test über die Analyse romantischer Gedichte."
    },
    {
      id: 3,
      title: "Elternsprechtag",
      date: new Date(2025, 4, 25),
      type: "meeting",
      description: "Halbjährlicher Elternsprechtag für alle Fächer."
    }
  ]);
  
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: new Date(),
    type: "lesson",
    description: ""
  });
  
  const { toast } = useToast();

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.description) {
      toast({
        title: "Eingabefehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    const event = {
      id: events.length + 1,
      title: newEvent.title,
      date: newEvent.date,
      type: newEvent.type as 'lesson' | 'homework' | 'test' | 'meeting',
      description: newEvent.description
    };

    setEvents([...events, event]);
    setShowAddForm(false);
    setNewEvent({
      title: "",
      date: new Date(),
      type: "lesson",
      description: ""
    });
    
    toast({
      title: "Termin hinzugefügt",
      description: "Der neue Termin wurde erfolgreich erstellt und die Eltern wurden benachrichtigt.",
    });
  };

  const todaysEvents = events.filter(
    event => event.date.toDateString() === date.toDateString()
  );

  const getEventIcon = (type: string) => {
    switch(type) {
      case 'lesson':
        return <Clock className="h-4 w-4" />;
      case 'homework':
        return <FileText className="h-4 w-4" />;
      case 'test':
        return <FileText className="h-4 w-4" />;
      case 'meeting':
        return <Users className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };
  
  const getEventTypeLabel = (type: string) => {
    switch(type) {
      case 'lesson': return 'Unterricht';
      case 'homework': return 'Hausaufgabe';
      case 'test': return 'Test';
      case 'meeting': return 'Besprechung';
      default: return type;
    }
  };
  
  const getEventTypeBadge = (type: string) => {
    switch(type) {
      case 'lesson':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Unterricht</span>;
      case 'homework':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Hausaufgabe</span>;
      case 'test':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">Test</span>;
      case 'meeting':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Besprechung</span>;
      default:
        return <span>{type}</span>;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Klassenkalender</h4>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-sm bg-secondary text-white px-2 py-1 rounded-md hover:bg-secondary/90"
        >
          {showAddForm ? 'Abbrechen' : 'Termin hinzufügen'}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <CalendarUI
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="border rounded-md"
          />
        </div>
        
        <div className="space-y-3">
          <h5 className="font-medium">Termine am {date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</h5>
          
          {todaysEvents.length === 0 ? (
            <p className="text-sm text-gray-500">Keine Termine für diesen Tag.</p>
          ) : (
            todaysEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <div className="flex">
                    <div className="mr-3 mt-1">
                      {getEventIcon(event.type)}
                    </div>
                    <div>
                      <h6 className="font-medium">{event.title}</h6>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div>
                    {getEventTypeBadge(event.type)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showAddForm && (
        <div className="bg-gray-50 p-3 rounded-lg space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={newEvent.title}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Datum</label>
            <input 
              type="date" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={newEvent.date.toISOString().split('T')[0]}
              onChange={(e) => setNewEvent({...newEvent, date: new Date(e.target.value)})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Typ</label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newEvent.type}
              onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
            >
              <option value="lesson">Unterricht</option>
              <option value="homework">Hausaufgabe</option>
              <option value="test">Test</option>
              <option value="meeting">Besprechung</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Beschreibung</label>
            <textarea 
              className="w-full p-2 border border-gray-300 rounded-md h-20" 
              value={newEvent.description}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            />
          </div>
          <button 
            onClick={handleAddEvent}
            className="w-full py-2 bg-secondary text-white rounded-md hover:bg-secondary/90"
          >
            Termin erstellen & Benachrichtigen
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassCalendar;
