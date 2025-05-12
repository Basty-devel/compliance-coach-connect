
import React, { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from '@/hooks/use-toast';

const NotificationSettings = () => {
  const [academicUpdates, setAcademicUpdates] = useState(true);
  const [attendanceAlerts, setAttendanceAlerts] = useState(true);
  const [eventNotifications, setEventNotifications] = useState(true);
  const [urgentAlerts, setUrgentAlerts] = useState(true);
  const [academicFrequency, setAcademicFrequency] = useState('daily');
  const [attendanceFrequency, setAttendanceFrequency] = useState('immediate');
  const [eventFrequency, setEventFrequency] = useState('weekly');
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Einstellungen gespeichert",
      description: "Ihre Benachrichtigungseinstellungen wurden aktualisiert.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-md font-semibold mb-3">Benachrichtigungseinstellungen</h3>
        <p className="text-sm text-gray-600 mb-4">
          Passen Sie an, welche Benachrichtigungen Sie an Eltern senden möchten und mit welcher Häufigkeit.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Akademische Updates</p>
            <p className="text-sm text-gray-600">Noten, Aufgaben, Lernfortschritt</p>
          </div>
          <Switch 
            checked={academicUpdates} 
            onCheckedChange={setAcademicUpdates} 
          />
        </div>
        
        {academicUpdates && (
          <div className="pl-6 border-l-2 border-gray-100">
            <label className="block text-sm text-gray-600 mb-1">Häufigkeit</label>
            <Select value={academicFrequency} onValueChange={setAcademicFrequency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Sofort</SelectItem>
                <SelectItem value="daily">Täglich</SelectItem>
                <SelectItem value="weekly">Wöchentlich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Anwesenheitshinweise</p>
            <p className="text-sm text-gray-600">Abwesenheit, Verspätungen</p>
          </div>
          <Switch 
            checked={attendanceAlerts} 
            onCheckedChange={setAttendanceAlerts} 
          />
        </div>
        
        {attendanceAlerts && (
          <div className="pl-6 border-l-2 border-gray-100">
            <label className="block text-sm text-gray-600 mb-1">Häufigkeit</label>
            <Select value={attendanceFrequency} onValueChange={setAttendanceFrequency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Sofort</SelectItem>
                <SelectItem value="daily">Täglich</SelectItem>
                <SelectItem value="weekly">Wöchentlich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Schulveranstaltungen</p>
            <p className="text-sm text-gray-600">Ausflüge, Elternabende, Schulaktivitäten</p>
          </div>
          <Switch 
            checked={eventNotifications} 
            onCheckedChange={setEventNotifications} 
          />
        </div>
        
        {eventNotifications && (
          <div className="pl-6 border-l-2 border-gray-100">
            <label className="block text-sm text-gray-600 mb-1">Häufigkeit</label>
            <Select value={eventFrequency} onValueChange={setEventFrequency}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Sofort</SelectItem>
                <SelectItem value="daily">Täglich</SelectItem>
                <SelectItem value="weekly">Wöchentlich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dringende Benachrichtigungen</p>
            <p className="text-sm text-gray-600">Notfälle, wichtige Mitteilungen</p>
          </div>
          <Switch 
            checked={urgentAlerts} 
            onCheckedChange={setUrgentAlerts}
            disabled={true}
          />
        </div>
        
        {urgentAlerts && (
          <div className="pl-6 border-l-2 border-gray-100">
            <p className="text-sm text-gray-600">
              Dringende Benachrichtigungen werden immer sofort gesendet und können nicht deaktiviert werden.
            </p>
          </div>
        )}
      </div>

      <Button onClick={handleSaveSettings} className="w-full">
        Einstellungen speichern
      </Button>
    </div>
  );
};

export default NotificationSettings;
