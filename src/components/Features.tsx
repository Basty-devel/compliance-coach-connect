
import { 
  Shield, 
  Bell, 
  FileCheck, 
  AlertCircle,
  BarChart, 
  FileText, 
  GraduationCap, 
  Globe,
  MessageCircle,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const featuresList = [
  {
    title: "End-to-End Encryption",
    description: "All data protected with AES-256 encryption and Two-Factor Authentication for maximum security.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Real-Time Compliance Monitoring",
    description: "Monitor compliance status with GDPR, ISO 27001, and NIS2 with instant alerts for regulatory changes.",
    icon: Bell,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Automated Data Protection Audits",
    description: "AI-driven Audit Chatbot that guides you through creating compliance documents like Privacy Policies.",
    icon: FileCheck,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Risk Assessment Tool",
    description: "Automated risk analysis for third-party tools with real-time scoring and vulnerability visualization.",
    icon: AlertCircle,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Compliance Dashboard",
    description: "Centralized dashboard providing overview of your organization's compliance health and deadlines.",
    icon: BarChart,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Document Management",
    description: "Secure document storage system with built-in digital signature functionality for compliance documents.",
    icon: FileText,
    color: "bg-pink-50 text-pink-600"
  }
];

const educationalFeatures = [
  {
    title: "Interactive Compliance Training",
    description: "Training modules for employees with progress tracking and digital completion certificates.",
    icon: GraduationCap,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Multi-Language Support",
    description: "Compliance training and documentation accessible to users across the globe in multiple languages.",
    icon: Globe,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Push Messaging System",
    description: "Real-time communication between teachers and parents regarding important updates and activities.",
    icon: MessageCircle,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Virtual Classbook",
    description: "Digital tracking of attendance, assignments, grades and student performance with real-time updates.",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-600"
  }
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Compliance Management
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Simplify your compliance journey with our complete suite of tools designed for data protection and privacy requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Educational Tools & Communication
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance the learning experience with integrated tools for classroom management and parent communication.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationalFeatures.map((feature, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
