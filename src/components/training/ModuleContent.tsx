
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ModuleContentProps {
  sectionData: {
    type: string;
    completed: boolean;
    content: any;
  };
  onComplete: () => void;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ sectionData, onComplete }) => {
  const [userSelection, setUserSelection] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  if (!sectionData) return <p>Section data is missing</p>;

  const handleVideoComplete = () => {
    // In a real implementation, you would track video completion
    onComplete();
  };
  
  const handleInteractiveSubmit = () => {
    if (userSelection === null) return;
    
    const correct = userSelection === sectionData.content.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };
  
  const handleContinue = () => {
    onComplete();
  };

  // Render video content
  if (sectionData.type === 'video') {
    return (
      <div className="space-y-6">
        <div className="relative bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
          {/* This would be a real video player in production */}
          <div className="text-center">
            <Play className="mx-auto h-12 w-12 text-primary" />
            <p className="mt-2 font-medium">Video: {sectionData.content.description}</p>
            <p className="text-sm text-muted-foreground">Duration: {sectionData.content.duration}</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <p>{sectionData.content.description}</p>
        </div>
        
        {!sectionData.completed && (
          <div className="flex justify-end">
            <Button onClick={handleVideoComplete}>
              Mark as Watched
            </Button>
          </div>
        )}
        
        {sectionData.completed && (
          <div className="flex items-center justify-end">
            <Badge variant="outline" className="bg-green-100">
              <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
              Completed
            </Badge>
          </div>
        )}
      </div>
    );
  }
  
  // Render text content
  if (sectionData.type === 'content') {
    return (
      <div className="space-y-6">
        <div className="prose max-w-none">
          <p>{sectionData.content.text}</p>
          
          {sectionData.content.bulletPoints && (
            <ul>
              {sectionData.content.bulletPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          
          {sectionData.content.steps && (
            <ol>
              {sectionData.content.steps.map((step: string, index: number) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          )}
        </div>
        
        {!sectionData.completed && (
          <div className="flex justify-end">
            <Button onClick={onComplete}>
              Mark as Read
            </Button>
          </div>
        )}
        
        {sectionData.completed && (
          <div className="flex items-center justify-end">
            <Badge variant="outline" className="bg-green-100">
              <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
              Completed
            </Badge>
          </div>
        )}
      </div>
    );
  }
  
  // Render interactive content
  if (sectionData.type === 'interactive') {
    return (
      <div className="space-y-6">
        <Card className="p-6 bg-muted/50">
          <h3 className="text-lg font-medium mb-4">Scenario</h3>
          <p className="mb-6">{sectionData.content.scenario}</p>
          
          <div className="space-y-3">
            {sectionData.content.options.map((option: string, index: number) => (
              <div
                key={index}
                className={`p-3 border rounded-md cursor-pointer transition-colors ${
                  userSelection === index 
                    ? 'bg-primary/10 border-primary' 
                    : 'hover:bg-muted'
                }`}
                onClick={() => !showFeedback && setUserSelection(index)}
              >
                <p>{option}</p>
              </div>
            ))}
          </div>
          
          {!sectionData.completed && !showFeedback && (
            <div className="mt-6 flex justify-end">
              <Button 
                onClick={handleInteractiveSubmit}
                disabled={userSelection === null}
              >
                Submit Answer
              </Button>
            </div>
          )}
          
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-md ${
              isCorrect ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <p className="font-medium">
                {isCorrect 
                  ? 'Correct! That is the right approach.' 
                  : 'That\'s not quite right. The correct approach is:'}
              </p>
              {!isCorrect && (
                <p className="mt-2">
                  {sectionData.content.options[sectionData.content.correctAnswer]}
                </p>
              )}
              <div className="mt-4 flex justify-end">
                <Button onClick={handleContinue}>Continue</Button>
              </div>
            </div>
          )}
          
          {sectionData.completed && !showFeedback && (
            <div className="mt-6 flex items-center justify-end">
              <Badge variant="outline" className="bg-green-100">
                <CheckCircle2 className="mr-1 h-4 w-4 text-green-500" />
                Completed
              </Badge>
            </div>
          )}
        </Card>
      </div>
    );
  }
  
  return <p>Unsupported content type</p>;
};

export default ModuleContent;
