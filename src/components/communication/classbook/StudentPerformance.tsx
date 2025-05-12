
import React, { useState } from 'react';
import { Star, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Student {
  id: number;
  name: string;
  performanceMetrics: {
    participation: number;
    homework: number;
    tests: number;
    behavior: number;
  };
  notes: string;
}

const initialStudents: Student[] = [
  {
    id: 1,
    name: "Emma Schmidt",
    performanceMetrics: {
      participation: 4,
      homework: 5,
      tests: 4,
      behavior: 5
    },
    notes: "Sehr engagierte Schülerin, zeigt großes Interesse am Unterricht."
  },
  {
    id: 2,
    name: "Max Müller",
    performanceMetrics: {
      participation: 3,
      homework: 2,
      tests: 3,
      behavior: 4
    },
    notes: "Braucht manchmal zusätzliche Unterstützung bei Hausaufgaben."
  },
  {
    id: 3,
    name: "Sophie Weber",
    performanceMetrics: {
      participation: 5,
      homework: 4,
      tests: 4,
      behavior: 5
    },
    notes: "Ausgezeichnete mündliche Beteiligung, hilft anderen Schülern."
  }
];

const StudentPerformance = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(initialStudents[0]);
  const [notes, setNotes] = useState(selectedStudent?.notes || '');
  const { toast } = useToast();

  const handleStudentChange = (studentId: number) => {
    const student = students.find(s => s.id === studentId) || null;
    setSelectedStudent(student);
    if (student) setNotes(student.notes);
  };

  const handleSaveNotes = () => {
    if (!selectedStudent) return;
    
    const updatedStudents = students.map(student => 
      student.id === selectedStudent.id ? { ...student, notes } : student
    );
    
    setStudents(updatedStudents);
    
    toast({
      title: "Notizen aktualisiert",
      description: `Die Notizen für ${selectedStudent.name} wurden gespeichert und die Eltern benachrichtigt.`,
    });
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-4">
      <h4 className="font-semibold">Schülerleistung</h4>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Schüler/in auswählen</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={selectedStudent?.id || ''}
          onChange={(e) => handleStudentChange(Number(e.target.value))}
        >
          {students.map(student => (
            <option key={student.id} value={student.id}>{student.name}</option>
          ))}
        </select>
      </div>
      
      {selectedStudent && (
        <>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gray-100 rounded-full h-16 w-16 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-600" />
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div>
              <h5 className="font-medium mb-2">Leistungsbewertung</h5>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Mitarbeit</span>
                      <div className="flex">
                        {renderStars(selectedStudent.performanceMetrics.participation)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Hausaufgaben</span>
                      <div className="flex">
                        {renderStars(selectedStudent.performanceMetrics.homework)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Tests</span>
                      <div className="flex">
                        {renderStars(selectedStudent.performanceMetrics.tests)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span>Verhalten</span>
                      <div className="flex">
                        {renderStars(selectedStudent.performanceMetrics.behavior)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Notizen & Feedback</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md h-24"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleSaveNotes}
            className="w-full py-2 bg-secondary text-white rounded-md hover:bg-secondary/90"
          >
            Speichern & Eltern benachrichtigen
          </button>
        </>
      )}
    </div>
  );
};

export default StudentPerformance;
