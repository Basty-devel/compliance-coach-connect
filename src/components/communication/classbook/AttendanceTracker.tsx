
import React, { useState } from 'react';
import { Calendar, Users, Check, X } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { useToast } from '@/hooks/use-toast';

const students = [
  { id: 1, name: "Emma Schmidt", status: "present" },
  { id: 2, name: "Max Müller", status: "absent" },
  { id: 3, name: "Sophie Weber", status: "present" },
  { id: 4, name: "Leon Fischer", status: "late" },
  { id: 5, name: "Hannah Meyer", status: "present" }
];

const AttendanceTracker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [attendanceData, setAttendanceData] = useState(students);
  const { toast } = useToast();

  const handleStatusChange = (studentId: number, newStatus: string) => {
    const updatedAttendance = attendanceData.map(student => 
      student.id === studentId ? { ...student, status: newStatus } : student
    );
    
    setAttendanceData(updatedAttendance);
    
    const student = students.find(s => s.id === studentId);
    
    toast({
      title: "Anwesenheit aktualisiert",
      description: `Status für ${student?.name} wurde auf ${getStatusLabel(newStatus)} geändert.`,
    });
  };
  
  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'present': return 'Anwesend';
      case 'absent': return 'Abwesend';
      case 'late': return 'Verspätet';
      default: return status;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'present':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><Check className="h-3 w-3 mr-1" /> Anwesend</span>;
      case 'absent':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"><X className="h-3 w-3 mr-1" /> Abwesend</span>;
      case 'late':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Verspätet</span>;
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Anwesenheit</h4>
        <div className="text-sm text-gray-500 flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {date?.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </div>
      </div>
      
      <div className="hidden sm:block">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="border rounded-md"
        />
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Schüler/in</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Aktionen</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceData.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{getStatusBadge(student.status)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleStatusChange(student.id, 'present')}
                    className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-md hover:bg-green-200"
                  >
                    Anwesend
                  </button>
                  <button 
                    onClick={() => handleStatusChange(student.id, 'absent')}
                    className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-md hover:bg-red-200"
                  >
                    Abwesend
                  </button>
                  <button 
                    onClick={() => handleStatusChange(student.id, 'late')}
                    className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-md hover:bg-yellow-200"
                  >
                    Verspätet
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <button 
        onClick={() => {
          toast({
            title: "Anwesenheitsdaten gespeichert",
            description: "Alle Eltern wurden über den Anwesenheitsstatus informiert.",
          });
        }}
        className="w-full py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
      >
        Speichern & Benachrichtigungen senden
      </button>
    </div>
  );
};

export default AttendanceTracker;
