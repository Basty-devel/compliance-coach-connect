
import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface MessagePreviewProps {
  title: string;
  message: string;
  time: string;
  sender: string;
  priority?: 'normal' | 'high' | 'urgent';
  category?: string;
}

const MessagePreview = ({ 
  title, 
  message, 
  time, 
  sender,
  priority = 'normal',
  category = 'academic'
}: MessagePreviewProps) => {

  const getCategoryBadge = () => {
    switch(category) {
      case 'academic':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Akademisch</Badge>;
      case 'attendance':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Anwesenheit</Badge>;
      case 'event':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-300">Veranstaltung</Badge>;
      case 'urgent':
        return <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">Dringend</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
      <div className="flex justify-between items-start">
        <div className="flex items-start space-x-1">
          <h5 className="font-semibold text-gray-900">{title}</h5>
          {priority === 'urgent' && (
            <AlertTriangle className="h-4 w-4 text-red-500" />
          )}
        </div>
        <span className="text-sm text-gray-500">{time}</span>
      </div>
      
      <div className="mt-1">
        {getCategoryBadge()}
      </div>
      
      <p className="text-gray-700 text-sm mt-2">{message}</p>
      <div className="mt-2 text-xs text-right text-gray-500">Von: {sender}</div>
    </div>
  );
};

export default MessagePreview;
