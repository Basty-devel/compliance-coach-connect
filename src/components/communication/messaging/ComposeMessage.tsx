
import React, { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const STUDENTS = [
  "Emma Schmidt",
  "Max Müller",
  "Sophie Weber",
  "Leon Fischer",
  "Hannah Meyer",
  "Felix Wagner",
  "Alle Schüler"
];

const CATEGORIES = [
  { value: "academic", label: "Akademisches Update", badge: "bg-blue-100 text-blue-800" },
  { value: "attendance", label: "Anwesenheitshinweis", badge: "bg-yellow-100 text-yellow-800" },
  { value: "event", label: "Schulveranstaltung", badge: "bg-purple-100 text-purple-800" },
  { value: "urgent", label: "Dringend", badge: "bg-red-100 text-red-800" }
];

const PRIORITIES = [
  { value: "normal", label: "Normal" },
  { value: "high", label: "Wichtig" },
  { value: "urgent", label: "Dringend" }
];

interface ComposeMessageProps {
  onSend: (messageData: any) => void;
}

const ComposeMessage = ({ onSend }: ComposeMessageProps) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [student, setStudent] = useState('');
  const [category, setCategory] = useState('academic');
  const [priority, setPriority] = useState('normal');
  const [sendSMS, setSendSMS] = useState(false);
  const [sendEmail, setSendEmail] = useState(true);
  const [sendApp, setSendApp] = useState(true);

  const handleSend = () => {
    if (!title || !message || !student) {
      return;
    }

    onSend({
      title,
      message,
      student,
      category,
      priority,
      channels: {
        sms: sendSMS,
        email: sendEmail,
        app: sendApp
      }
    });

    // Reset form
    setTitle('');
    setMessage('');
  };

  const getCategoryBadge = (categoryValue: string) => {
    const selectedCategory = CATEGORIES.find(cat => cat.value === categoryValue);
    return selectedCategory ? selectedCategory.badge : "";
  };

  const getPriorityClass = (priorityValue: string) => {
    switch(priorityValue) {
      case 'urgent':
        return 'text-red-600 font-medium flex items-center';
      case 'high':
        return 'text-orange-600 font-medium';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="student" className="block text-sm font-medium text-gray-700 mb-1">
          Empfänger (Schüler/Eltern)
        </label>
        <Select value={student} onValueChange={setStudent}>
          <SelectTrigger id="student">
            <SelectValue placeholder="Schüler auswählen" />
          </SelectTrigger>
          <SelectContent>
            {STUDENTS.map((name) => (
              <SelectItem key={name} value={name}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="messageTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Betreff
        </label>
        <Input 
          id="messageTitle" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Betreff eingeben" 
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Kategorie
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <div className="flex items-center">
                    <span className={`inline-block w-3 h-3 rounded-full ${cat.badge.split(' ')[0]} mr-2`}></span>
                    {cat.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priorität
          </label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger id="priority">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PRIORITIES.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  <span className={getPriorityClass(p.value)}>
                    {p.value === 'urgent' && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {p.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label htmlFor="messageContent" className="block text-sm font-medium text-gray-700 mb-1">
          Nachricht
        </label>
        <Textarea
          id="messageContent"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Nachrichtentext eingeben..."
          rows={5}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sendeoptionen
        </label>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox 
              id="sendApp" 
              checked={sendApp}
              onCheckedChange={(checked) => setSendApp(checked as boolean)}
            />
            <label htmlFor="sendApp" className="ml-2 text-sm text-gray-600">
              In-App Benachrichtigung
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox 
              id="sendEmail" 
              checked={sendEmail}
              onCheckedChange={(checked) => setSendEmail(checked as boolean)}
            />
            <label htmlFor="sendEmail" className="ml-2 text-sm text-gray-600">
              E-Mail senden
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox 
              id="sendSMS" 
              checked={sendSMS}
              onCheckedChange={(checked) => setSendSMS(checked as boolean)}
            />
            <label htmlFor="sendSMS" className="ml-2 text-sm text-gray-600">
              SMS senden
            </label>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <Button 
          onClick={handleSend}
          disabled={!title || !message || !student} 
          className="w-full"
        >
          Nachricht senden
        </Button>
      </div>
    </div>
  );
};

export default ComposeMessage;
