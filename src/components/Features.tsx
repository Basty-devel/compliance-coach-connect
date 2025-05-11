
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
    title: "Ende-zu-Ende-Verschlüsselung",
    description: "Alle Daten geschützt mit AES-256-Verschlüsselung und Zwei-Faktor-Authentifizierung für maximale Sicherheit.",
    icon: Shield,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Echtzeit-Compliance-Überwachung",
    description: "Überwachen Sie den Compliance-Status mit DSGVO, ISO 27001 und NIS2 mit sofortigen Warnungen bei regulatorischen Änderungen.",
    icon: Bell,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Automatisierte Datenschutz-Audits",
    description: "KI-gesteuerter Audit-Chatbot, der Sie durch die Erstellung von Compliance-Dokumenten wie Datenschutzerklärungen führt.",
    icon: FileCheck,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Risikobewertungstool",
    description: "Automatisierte Risikoanalyse für Tools von Drittanbietern mit Echtzeit-Bewertung und Visualisierung von Schwachstellen.",
    icon: AlertCircle,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Compliance-Dashboard",
    description: "Zentralisiertes Dashboard mit Überblick über die Compliance-Gesundheit Ihrer Organisation und wichtige Fristen.",
    icon: BarChart,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Dokumentenverwaltung",
    description: "Sicheres Dokumentenspeichersystem mit integrierter digitaler Signaturfunktion für Compliance-Dokumente.",
    icon: FileText,
    color: "bg-pink-50 text-pink-600"
  }
];

const educationalFeatures = [
  {
    title: "Interaktive Compliance-Schulung",
    description: "Schulungsmodule für Mitarbeiter mit Fortschrittsverfolgung und digitalen Abschlusszertifikaten.",
    icon: GraduationCap,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Mehrsprachige Unterstützung",
    description: "Compliance-Schulungen und -Dokumentation für Benutzer weltweit in mehreren Sprachen zugänglich.",
    icon: Globe,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Push-Nachrichtensystem",
    description: "Echtzeitkommunikation zwischen Lehrern und Eltern bezüglich wichtiger Updates und Aktivitäten.",
    icon: MessageCircle,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Virtuelles Klassenbuch",
    description: "Digitale Erfassung von Anwesenheit, Aufgaben, Noten und Schülerleistungen mit Echtzeit-Updates.",
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
            Umfassendes Compliance-Management
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Vereinfachen Sie Ihren Compliance-Prozess mit unserer kompletten Palette von Tools für Datenschutz- und Datensicherheitsanforderungen.
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
            Bildungstools & Kommunikation
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Verbessern Sie das Lernerlebnis mit integrierten Tools für Klassenraummanagement und Elternkommunikation.
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
