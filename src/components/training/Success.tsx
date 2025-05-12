
import React from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SuccessProps {
  title: string;
  message: string;
  score?: {
    value: number;
    total: number;
  };
  certificateAvailable?: boolean;
  onShare?: () => void;
  onDownload?: () => void;
  onContinue: () => void;
}

const Success: React.FC<SuccessProps> = ({
  title,
  message,
  score,
  certificateAvailable = false,
  onShare,
  onDownload,
  onContinue
}) => {
  // Trigger confetti effect on component mount
  React.useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };
    
    const confettiAnimation = () => {
      const timeLeft = animationEnd - Date.now();
      
      if (timeLeft <= 0) {
        return;
      }
      
      const particleCount = 50 * (timeLeft / duration);
      
      // Since particles fall down, start from the top
      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0 }
      });
      
      // Add particles from left and right edges
      if (Math.random() > 0.75) {
        confetti({
          particleCount: 20,
          angle: randomInRange(55, 125),
          spread: 50,
          origin: { x: randomInRange(0, 0.3), y: randomInRange(0.1, 0.3) }
        });
        
        confetti({
          particleCount: 20,
          angle: randomInRange(55, 125),
          spread: 50,
          origin: { x: randomInRange(0.7, 1), y: randomInRange(0.1, 0.3) }
        });
      }
      
      requestAnimationFrame(confettiAnimation);
    };
    
    requestAnimationFrame(confettiAnimation);
    
    return () => {
      // Clean up
    };
  }, []);

  return (
    <Card className="text-center max-w-md mx-auto p-6">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-4">
            <Trophy className="h-16 w-16 text-primary" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground mb-6">{message}</p>
        
        {score && (
          <div className="mb-6 p-3 bg-muted/50 rounded-md">
            <p className="font-medium">Your Score</p>
            <p className="text-3xl font-bold">
              {score.value}/{score.total} 
              <span className="text-base font-normal text-muted-foreground ml-2">
                ({Math.round((score.value / score.total) * 100)}%)
              </span>
            </p>
          </div>
        )}
        
        {certificateAvailable && (
          <div className="space-y-3 mb-6">
            <Button 
              variant="outline" 
              className="w-full flex justify-center gap-2"
              onClick={onDownload}
            >
              <Download className="h-4 w-4" />
              Download Certificate
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full flex justify-center gap-2"
              onClick={onShare}
            >
              <Share2 className="h-4 w-4" />
              Share Achievement
            </Button>
          </div>
        )}
        
        <Button className="w-full" onClick={onContinue}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};

export default Success;
