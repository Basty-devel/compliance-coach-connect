
import { Lock, Shield, CheckSquare, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Security = () => {
  return (
    <div id="security" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Lock className="h-4 w-4 mr-2" />
              Industry-Leading Security
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Your Data, Protected by Multiple Layers of Security
            </h2>
            
            <p className="text-xl text-gray-600">
              We take security seriously, implementing the highest standards to ensure your sensitive data 
              remains protected at all times.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                {
                  icon: Shield,
                  title: "AES-256 Encryption",
                  description: "All sensitive data is secured with military-grade encryption both in transit and at rest."
                },
                {
                  icon: CheckSquare,
                  title: "Two-Factor Authentication",
                  description: "An additional security layer requiring two verification methods to access your account."
                },
                {
                  icon: Server,
                  title: "GDPR-Compliant Infrastructure",
                  description: "Our infrastructure is designed from the ground up to meet strict EU data protection standards."
                }
              ].map((item, i) => (
                <div key={i} className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mr-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-200/50 rounded-3xl transform -rotate-2"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/20 rounded-3xl transform rotate-2"></div>
            <Card className="relative bg-white border-0 shadow-xl overflow-hidden rounded-2xl">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center w-full h-48 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute inset-4 bg-primary/20 rounded-full animate-ping opacity-75" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
                      <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center">
                        <Lock className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-center">Data Protection Layers</h3>
                    <div className="mt-4 space-y-2">
                      {[
                        "Application Level Encryption",
                        "Transport Layer Security",
                        "Database Encryption",
                        "Physical Security Measures",
                        "Regular Security Audits"
                      ].map((layer, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-lg flex items-center">
                          <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                          <span className="font-medium text-gray-700">{layer}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
