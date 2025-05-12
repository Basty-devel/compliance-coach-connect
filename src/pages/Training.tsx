
import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrainingModules from '@/components/training/TrainingModules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Helmet } from 'react-helmet';

const Training = () => {
  const [activeTab, setActiveTab] = useState('modules');
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>Compliance Training | Compliance Coach</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Compliance Training</h1>
            <p className="text-muted-foreground mt-2">
              Interactive modules for compliance training and certification
            </p>
          </div>

          <Tabs defaultValue="modules" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="modules">Module Library</TabsTrigger>
              <TabsTrigger value="progress">My Progress</TabsTrigger>
              <TabsTrigger value="certificates">Certificates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="modules" className="space-y-4">
              <TrainingModules />
            </TabsContent>
            
            <TabsContent value="progress" className="space-y-4">
              <div className="bg-card rounded-lg border p-6 text-center">
                <p>Your training progress will be displayed here.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="space-y-4">
              <div className="bg-card rounded-lg border p-6 text-center">
                <p>Your earned certificates will be displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;
