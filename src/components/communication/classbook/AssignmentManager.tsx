
import React, { useState } from 'react';
import { Check, Clock, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Assignment {
  id: number;
  title: string;
  subject: string;
  dueDate: string;
  status: 'active' | 'submitted' | 'graded';
}

const initialAssignments = [
  {
    id: 1,
    title: "Mathe Arbeitsblatt - Quadratische Funktionen",
    subject: "Mathematik",
    dueDate: "15.05.2025",
    status: "active" as const
  },
  {
    id: 2,
    title: "Aufsatz über Goethes 'Faust'",
    subject: "Deutsch",
    dueDate: "20.05.2025",
    status: "active" as const
  },
  {
    id: 3,
    title: "Experiment Dokumentation - Photosynthese",
    subject: "Biologie",
    dueDate: "18.05.2025",
    status: "submitted" as const
  }
];

const AssignmentManager = () => {
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    subject: '',
    dueDate: '',
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const { toast } = useToast();

  const handleStatusChange = (id: number, newStatus: 'active' | 'submitted' | 'graded') => {
    const updatedAssignments = assignments.map(assignment => 
      assignment.id === id ? { ...assignment, status: newStatus } : assignment
    );
    
    setAssignments(updatedAssignments);
    
    toast({
      title: "Aufgabenstatus aktualisiert",
      description: `Der Status der Aufgabe wurde auf ${getStatusLabel(newStatus)} geändert.`,
    });
  };

  const handleAddAssignment = () => {
    if (!newAssignment.title || !newAssignment.subject || !newAssignment.dueDate) {
      toast({
        title: "Eingabefehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive"
      });
      return;
    }

    const newItem: Assignment = {
      id: assignments.length + 1,
      title: newAssignment.title,
      subject: newAssignment.subject,
      dueDate: newAssignment.dueDate,
      status: 'active'
    };

    setAssignments([...assignments, newItem]);
    setNewAssignment({ title: '', subject: '', dueDate: '' });
    setShowAddForm(false);
    
    toast({
      title: "Aufgabe hinzugefügt",
      description: "Die neue Aufgabe wurde erfolgreich erstellt und die Eltern wurden benachrichtigt.",
    });
  };

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'active': return 'Aktiv';
      case 'submitted': return 'Eingereicht';
      case 'graded': return 'Bewertet';
      default: return status;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'active':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"><Clock className="h-3 w-3 mr-1" /> Aktiv</span>;
      case 'submitted':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"><FileText className="h-3 w-3 mr-1" /> Eingereicht</span>;
      case 'graded':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><Check className="h-3 w-3 mr-1" /> Bewertet</span>;
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Aufgaben</h4>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-sm bg-secondary text-white px-2 py-1 rounded-md hover:bg-secondary/90"
        >
          {showAddForm ? 'Abbrechen' : 'Neue Aufgabe'}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-gray-50 p-3 rounded-lg space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Titel</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fach</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={newAssignment.subject}
              onChange={(e) => setNewAssignment({...newAssignment, subject: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Abgabedatum</label>
            <input 
              type="text" 
              placeholder="DD.MM.YYYY" 
              className="w-full p-2 border border-gray-300 rounded-md" 
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
            />
          </div>
          <button 
            onClick={handleAddAssignment}
            className="w-full py-2 bg-secondary text-white rounded-md hover:bg-secondary/90"
          >
            Aufgabe erstellen & Benachrichtigen
          </button>
        </div>
      )}

      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between">
              <h5 className="font-medium">{assignment.title}</h5>
              {getStatusBadge(assignment.status)}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Fach: {assignment.subject}</span>
              <span>Fällig am: {assignment.dueDate}</span>
            </div>
            <div className="mt-3 flex space-x-2">
              <button 
                onClick={() => handleStatusChange(assignment.id, 'active')}
                className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200"
              >
                Aktiv
              </button>
              <button 
                onClick={() => handleStatusChange(assignment.id, 'submitted')}
                className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200"
              >
                Eingereicht
              </button>
              <button 
                onClick={() => handleStatusChange(assignment.id, 'graded')}
                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-md hover:bg-green-200"
              >
                Bewertet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentManager;
