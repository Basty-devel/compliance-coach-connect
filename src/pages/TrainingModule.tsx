
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Video, 
  FileText, 
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import ModuleContent from '@/components/training/ModuleContent';
import ModuleQuiz from '@/components/training/ModuleQuiz';
import { Helmet } from 'react-helmet';
import { useToast } from '@/hooks/use-toast';

const TrainingModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(1);
  const [moduleData, setModuleData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Mock module data - in a real app, this would be fetched from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock module data based on moduleId
      const mockModule = {
        id: parseInt(moduleId || '1'),
        title: 'GDPR Fundamentals',
        description: 'Master the essentials of GDPR compliance and understand how it impacts your organization',
        sections: [
          {
            id: 1,
            title: 'Introduction to GDPR',
            type: 'video',
            completed: true,
            content: {
              videoUrl: 'https://example.com/gdpr-intro',
              description: 'This section covers the basics of GDPR, its history and why it matters.',
              duration: '8:30'
            }
          },
          {
            id: 2,
            title: 'Key GDPR Principles',
            type: 'content',
            completed: true,
            content: {
              text: 'The seven key principles of GDPR are: lawfulness, fairness and transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality; and accountability.',
              bulletPoints: [
                'Lawfulness, Fairness, and Transparency',
                'Purpose Limitation', 
                'Data Minimization',
                'Accuracy',
                'Storage Limitation',
                'Integrity and Confidentiality',
                'Accountability'
              ]
            }
          },
          {
            id: 3,
            title: 'Data Subject Rights',
            type: 'interactive',
            completed: false,
            content: {
              scenario: 'A customer emails your company requesting all data you hold about them. What steps should you take?',
              options: [
                'Ignore the request as it\'s not formal enough',
                'Ask them to fill out a specific form before proceeding',
                'Acknowledge the request and begin the process of collecting their data',
                'Forward the email to your legal department only'
              ],
              correctAnswer: 2
            }
          },
          {
            id: 4,
            title: 'Data Breach Protocols',
            type: 'content',
            completed: false,
            content: {
              text: 'Under GDPR, organizations must report certain types of data breaches to the relevant supervisory authority within 72 hours of becoming aware of the breach.',
              steps: [
                'Identify and contain the breach',
                'Assess the risk to individuals',
                'Notify the supervisory authority if required',
                'Notify affected individuals if high risk',
                'Document the breach and response'
              ]
            }
          },
          {
            id: 5,
            title: 'GDPR Knowledge Check',
            type: 'quiz',
            completed: false,
            content: {
              questions: [
                {
                  id: 1,
                  text: 'What is the maximum time allowed to report a data breach to authorities?',
                  options: ['24 hours', '48 hours', '72 hours', '7 days'],
                  correctAnswer: 2
                },
                {
                  id: 2,
                  text: 'Which of these is NOT a data subject right under GDPR?',
                  options: [
                    'Right to access', 
                    'Right to be forgotten', 
                    'Right to compensation without proof of damage', 
                    'Right to data portability'
                  ],
                  correctAnswer: 2
                },
                {
                  id: 3,
                  text: 'What does the principle of "data minimization" require?',
                  options: [
                    'Deleting all data after processing', 
                    'Collecting only data that is necessary', 
                    'Anonymizing all personal data', 
                    'Minimizing the number of data subjects'
                  ],
                  correctAnswer: 1
                }
              ]
            }
          }
        ],
        totalSections: 5,
        completedSections: 2,
        category: 'gdpr',
        difficulty: 'beginner'
      };
      
      setModuleData(mockModule);
      setLoading(false);
    }, 1000);
  }, [moduleId]);

  const handleSectionComplete = () => {
    if (!moduleData) return;
    
    // Update the current section's completion status
    const updatedSections = moduleData.sections.map((section: any) => 
      section.id === currentSection ? { ...section, completed: true } : section
    );
    
    // Update module data with the new sections
    setModuleData({
      ...moduleData,
      sections: updatedSections,
      completedSections: moduleData.completedSections + 
        (moduleData.sections.find((s: any) => s.id === currentSection)?.completed ? 0 : 1)
    });
    
    // If there's a next section, navigate to it
    if (currentSection < moduleData.totalSections) {
      setCurrentSection(currentSection + 1);
    } else {
      // Module completed
      toast({
        title: "Module Completed!",
        description: "Congratulations on completing this training module.",
      });
    }
  };

  const navigateToSection = (sectionId: number) => {
    setCurrentSection(sectionId);
  };

  const handleReturnToLibrary = () => {
    navigate('/training');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 flex justify-center items-center">
          <p>Loading module content...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!moduleData) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Button variant="outline" onClick={handleReturnToLibrary}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Training Library
          </Button>
          <div className="mt-8 text-center">
            <p>Module not found. Please try a different module.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const currentSectionData = moduleData.sections.find((s: any) => s.id === currentSection);
  const progressPercentage = (moduleData.completedSections / moduleData.totalSections) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{moduleData.title} | Compliance Coach</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button and progress */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
            <Button variant="outline" onClick={handleReturnToLibrary}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Training Library
            </Button>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                Progress: {moduleData.completedSections}/{moduleData.totalSections} sections
              </span>
              <div className="w-40">
                <Progress value={progressPercentage} />
              </div>
            </div>
          </div>
          
          {/* Module header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge variant="outline">{moduleData.category.toUpperCase()}</Badge>
              <Badge 
                variant={
                  moduleData.difficulty === 'beginner' ? 'secondary' : 
                  moduleData.difficulty === 'intermediate' ? 'default' : 
                  'destructive'
                }
                className="capitalize"
              >
                {moduleData.difficulty}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{moduleData.title}</h1>
            <p className="text-muted-foreground mt-2">{moduleData.description}</p>
          </div>
          
          {/* Module content layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Section navigation sidebar */}
            <div className="md:w-64 flex-shrink-0">
              <h2 className="text-lg font-medium mb-4">Module Sections</h2>
              <ScrollArea className="h-[calc(100vh-350px)]">
                <div className="pr-4 space-y-1">
                  {moduleData.sections.map((section: any) => (
                    <Button 
                      key={section.id} 
                      variant={currentSection === section.id ? "default" : "ghost"} 
                      onClick={() => navigateToSection(section.id)}
                      className="w-full justify-start text-left"
                    >
                      <div className="flex items-center gap-2 w-full">
                        {section.completed && (
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        )}
                        {!section.completed && section.type === 'video' && (
                          <Video className="h-4 w-4 flex-shrink-0" />
                        )}
                        {!section.completed && section.type === 'content' && (
                          <FileText className="h-4 w-4 flex-shrink-0" />
                        )}
                        {!section.completed && (section.type === 'quiz' || section.type === 'interactive') && (
                          <HelpCircle className="h-4 w-4 flex-shrink-0" />
                        )}
                        <span className="truncate">{section.title}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
            {/* Current section content */}
            <div className="flex-grow border rounded-lg p-6 bg-card">
              <h2 className="text-xl font-semibold mb-4">
                {currentSectionData?.title}
              </h2>
              
              {/* Section content based on type */}
              {currentSectionData?.type === 'quiz' ? (
                <ModuleQuiz 
                  quizData={currentSectionData.content} 
                  onComplete={handleSectionComplete}
                />
              ) : (
                <ModuleContent 
                  sectionData={currentSectionData}
                  onComplete={handleSectionComplete} 
                />
              )}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => navigateToSection(Math.max(1, currentSection - 1))}
                  disabled={currentSection === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                <Button 
                  onClick={() => navigateToSection(Math.min(moduleData.totalSections, currentSection + 1))}
                  disabled={currentSection === moduleData.totalSections}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainingModule;
