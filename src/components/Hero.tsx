
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              GDPR · ISO 27001 · NIS2 Compliant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Streamline Your 
              <span className="text-primary"> Compliance</span> 
              <br />Management
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              A comprehensive compliance management platform with integrated educational tools. 
              Ensuring data privacy, simplifying compliance, and enhancing teacher-parent communication.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
            
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                {[
                  'End-to-End Encryption', 
                  'Real-time Monitoring', 
                  'Virtual Classbook'
                ].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl transform rotate-3 animate-pulse-slow"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-200 animate-float">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Compliance Dashboard</h3>
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'GDPR', status: 'Compliant', color: 'compliance.green' },
                    { name: 'ISO 27001', status: 'In Progress', color: 'compliance.yellow' },
                    { name: 'NIS2', status: 'Compliant', color: 'compliance.green' },
                    { name: 'AES 256 Encryption', status: 'Active', color: 'compliance.blue' }
                  ].map((item) => (
                    <div 
                      key={item.name} 
                      className="p-3 bg-white rounded-lg border border-gray-100 shadow-sm"
                    >
                      <p className="text-sm font-medium">{item.name}</p>
                      <p 
                        className={`text-sm font-semibold text-${item.color.split('.')[1]}-600 mt-1`}
                      >
                        {item.status}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium">Next Compliance Audit</p>
                  <p className="text-lg font-semibold mt-1">June 15, 2025</p>
                  <div className="h-2 bg-gray-200 rounded-full mt-2">
                    <div className="h-2 bg-primary rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
