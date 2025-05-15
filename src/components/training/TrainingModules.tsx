import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { BookOpenCheck } from 'lucide-react';

const TrainingModules = () => {
  // Mock training modules data - replace with actual data fetching later
  const modules = [
    {
      id: 1,
      title: 'GDPR Fundamentals',
      description: 'Master the essentials of GDPR compliance and understand how it impacts your organization',
      progress: 60,
      completed: false,
      category: 'gdpr',
      difficulty: 'beginner'
    },
    {
      id: 2,
      title: 'Cybersecurity Awareness',
      description: 'Learn to identify and prevent common cyber threats to protect your data and systems',
      progress: 90,
      completed: true,
      category: 'cybersecurity',
      difficulty: 'intermediate'
    },
    {
      id: 3,
      title: 'Anti-Money Laundering (AML)',
      description: 'Understand the regulations and best practices for preventing money laundering activities',
      progress: 30,
      completed: false,
      category: 'aml',
      difficulty: 'advanced'
    },
    {
      id: 4,
      title: 'Data Privacy',
      description: 'Understand the regulations and best practices for Data Privacy activities',
      progress: 80,
      completed: false,
      category: 'data privacy',
      difficulty: 'beginner'
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules.map((module) => (
        <Card key={module.id} className="bg-card shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold tracking-tight">{module.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">{module.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress: {module.progress}%</span>
              <span className="text-muted-foreground">{module.difficulty}</span>
            </div>
            <div className="flex justify-between">
              <Link to={`/training/module/${module.id}`}>
                <Button>
                  {module.completed ? 'Review Module' : 'Start Training'}
                </Button>
              </Link>
              {module.completed && (
                <Button variant="secondary" size="icon">
                  <BookOpenCheck className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrainingModules;
