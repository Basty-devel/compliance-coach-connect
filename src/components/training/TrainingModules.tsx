
import React, { useState } from 'react';
import { 
  Book, 
  Shield, 
  Database, 
  Globe, 
  Search, 
  Filter 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

// Define module categories
const categories = [
  { id: 'gdpr', name: 'GDPR' },
  { id: 'iso27001', name: 'ISO 27001' },
  { id: 'nis2', name: 'NIS2' },
  { id: 'internal', name: 'Internal Policies' },
  { id: 'security', name: 'Security' },
];

// Define difficulty levels
const difficultyLevels = [
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
];

// Define training modules
const trainingModules = [
  {
    id: 1,
    title: 'GDPR Fundamentals',
    description: 'Learn the basics of GDPR and how it affects your organization',
    category: 'gdpr',
    categoryName: 'GDPR',
    duration: '45 min',
    difficulty: 'beginner',
    progress: 0,
    modules: 5,
    icon: Globe,
    format: ['video', 'quiz', 'interactive']
  },
  {
    id: 2,
    title: 'Data Breach Management',
    description: 'How to handle and report data breaches according to regulations',
    category: 'gdpr',
    categoryName: 'GDPR',
    duration: '30 min',
    difficulty: 'intermediate',
    progress: 25,
    modules: 4,
    icon: Database,
    format: ['video', 'scenario']
  },
  {
    id: 3,
    title: 'ISO 27001 Overview',
    description: 'Information security management system principles',
    category: 'iso27001',
    categoryName: 'ISO 27001',
    duration: '60 min',
    difficulty: 'advanced',
    progress: 75,
    modules: 6,
    icon: Shield,
    format: ['video', 'documentation', 'quiz']
  },
  {
    id: 4,
    title: 'NIS2 Compliance',
    description: 'Network and information systems security requirements',
    category: 'nis2',
    categoryName: 'NIS2',
    duration: '40 min',
    difficulty: 'intermediate',
    progress: 0,
    modules: 5,
    icon: Shield,
    format: ['video', 'interactive']
  },
  {
    id: 5,
    title: 'Internal Data Protection',
    description: 'Company-specific policies for protecting sensitive data',
    category: 'internal',
    categoryName: 'Internal Policies',
    duration: '25 min',
    difficulty: 'beginner',
    progress: 10,
    modules: 3,
    icon: Book,
    format: ['documentation', 'quiz']
  },
  {
    id: 6,
    title: 'Security Best Practices',
    description: 'Essential security measures every employee should know',
    category: 'security',
    categoryName: 'Security',
    duration: '35 min',
    difficulty: 'beginner',
    progress: 100,
    modules: 4,
    icon: Shield,
    format: ['video', 'quiz', 'scenario']
  },
];

const TrainingModules = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  
  // Filter modules based on search and filters
  const filteredModules = trainingModules.filter(module => {
    // Search filter
    const matchesSearch = 
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      module.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = 
      selectedCategories.length === 0 || 
      selectedCategories.includes(module.category);
    
    // Difficulty filter
    const matchesDifficulty = 
      !selectedDifficulty || 
      module.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleStartModule = (moduleId: number) => {
    navigate(`/training/module/${moduleId}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and filter section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search training modules..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Collapsible
          open={filtersOpen}
          onOpenChange={setFiltersOpen}
          className="w-full md:w-auto"
        >
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="bg-card mt-2 p-4 rounded-md border shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category.id}`} 
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                      />
                      <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Difficulty</h3>
                <RadioGroup 
                  value={selectedDifficulty} 
                  onValueChange={setSelectedDifficulty}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="" id="difficulty-all" />
                    <Label htmlFor="difficulty-all">All levels</Label>
                  </div>
                  {difficultyLevels.map(level => (
                    <div key={level.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={level.id} id={`difficulty-${level.id}`} />
                      <Label htmlFor={`difficulty-${level.id}`}>{level.name}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>

      {/* Display filtered modules */}
      {filteredModules.length === 0 ? (
        <div className="bg-card rounded-lg border p-6 text-center">
          <p>No training modules match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredModules.map(module => (
            <Card key={module.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="mb-2">
                    {module.categoryName}
                  </Badge>
                  <Badge
                    variant={
                      module.difficulty === 'beginner' ? 'secondary' : 
                      module.difficulty === 'intermediate' ? 'default' : 
                      'destructive'
                    }
                    className="capitalize"
                  >
                    {module.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <div className="flex items-center">
                    <module.icon className="h-4 w-4 mr-1" />
                    <span>{module.modules} sections</span>
                  </div>
                  <span>{module.duration}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{module.progress}% complete</span>
                    {module.progress === 100 && (
                      <Badge variant="success" className="bg-green-500 text-white">Completed</Badge>
                    )}
                  </div>
                  <Progress value={module.progress} />
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {module.format.map(format => (
                    <Badge key={format} variant="outline" className="capitalize">
                      {format}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  onClick={() => handleStartModule(module.id)}
                  className="w-full"
                >
                  {module.progress > 0 && module.progress < 100 
                    ? 'Continue' 
                    : module.progress === 100 
                      ? 'Review' 
                      : 'Start'
                  }
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainingModules;
