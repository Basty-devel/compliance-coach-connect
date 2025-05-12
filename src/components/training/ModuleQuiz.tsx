
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface ModuleQuizProps {
  quizData: {
    questions: Question[];
  };
  onComplete: () => void;
}

const ModuleQuiz: React.FC<ModuleQuizProps> = ({ quizData, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    return <p>Quiz data is missing</p>;
  }
  
  const questions = quizData.questions;
  const currentQuestion = questions[currentQuestionIndex];
  
  // Calculate progress
  const progress = quizStarted 
    ? ((currentQuestionIndex + (showResults ? 1 : 0)) / questions.length) * 100 
    : 0;
  
  // Calculate score
  const calculateScore = () => {
    let correctAnswers = 0;
    
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    return {
      score: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
  };
  
  const handleSelectAnswer = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: answerIndex
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleCompleteQuiz = () => {
    onComplete();
  };
  
  // Quiz welcome screen
  if (!quizStarted) {
    return (
      <Card className="p-6 text-center bg-muted/50">
        <h3 className="text-xl font-medium">Knowledge Check</h3>
        <p className="mt-4 mb-6">
          This quiz contains {questions.length} questions to test your understanding of the module.
          You need to answer all questions to complete this section.
        </p>
        <Button onClick={handleStartQuiz}>Start Quiz</Button>
      </Card>
    );
  }
  
  // Quiz results screen
  if (showResults) {
    const { score, total, percentage } = calculateScore();
    const passed = percentage >= 70; // 70% is passing grade
    
    return (
      <Card className="p-6 text-center bg-muted/50">
        <h3 className="text-xl font-medium">Quiz Results</h3>
        
        <div className="my-6 flex flex-col items-center">
          <div className={`rounded-full p-4 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed 
              ? <CheckCircle2 className="h-12 w-12 text-green-500" /> 
              : <XCircle className="h-12 w-12 text-red-500" />
            }
          </div>
          
          <p className="text-2xl font-bold my-4">
            {score}/{total} Correct ({percentage}%)
          </p>
          
          <Progress value={percentage} className="w-full max-w-xs" />
          
          <p className="mt-6 text-lg">
            {passed 
              ? 'Congratulations! You have passed the quiz.' 
              : 'You did not pass. Review the material and try again.'
            }
          </p>
        </div>
        
        {passed ? (
          <Button onClick={handleCompleteQuiz}>Complete Module</Button>
        ) : (
          <div className="space-x-4">
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedAnswers({});
                setCurrentQuestionIndex(0);
                setShowResults(false);
              }}
            >
              Retry Quiz
            </Button>
            <Button onClick={handleCompleteQuiz}>Continue Anyway</Button>
          </div>
        )}
      </Card>
    );
  }
  
  // Quiz question screen
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
        <Progress value={progress} className="w-40" />
      </div>
      
      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-medium mb-4">{currentQuestion.text}</h3>
        
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`p-3 border rounded-md cursor-pointer transition-colors ${
                selectedAnswers[currentQuestion.id] === index 
                  ? 'bg-primary/10 border-primary' 
                  : 'hover:bg-muted'
              }`}
              onClick={() => handleSelectAnswer(index)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleNextQuestion}
            disabled={selectedAnswers[currentQuestion.id] === undefined}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ModuleQuiz;
