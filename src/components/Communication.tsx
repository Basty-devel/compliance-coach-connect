
import { MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MessagingTab from './communication/MessagingTab';
import ClassbookTab from './communication/ClassbookTab';

const Communication = () => {
  return (
    <div id="communication" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Nahtlose Kommunikation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Verbindung zwischen Lehrern und Eltern
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Verbessern Sie das Bildungserlebnis mit Tools, die zur Verbesserung der Kommunikation und des Klassenmanagements entwickelt wurden.
          </p>
        </div>

        <Tabs defaultValue="messaging" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="messaging">Push-Nachrichten</TabsTrigger>
              <TabsTrigger value="classbook">Virtuelles Klassenbuch</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="messaging" className="space-y-6">
            <MessagingTab />
          </TabsContent>
          
          <TabsContent value="classbook" className="space-y-6">
            <ClassbookTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Communication;
