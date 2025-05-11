
import { Button } from '@/components/ui/button';
import { Server, Lock, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  return (
    <div className="py-16 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Compliance Management?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            Join thousands of organizations that trust Compliance Coach to simplify 
            compliance and enhance educational communication.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-primary">
              Contact Sales
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                text: "GDPR, ISO 27001 & NIS2 Compliant"
              },
              {
                icon: Lock,
                text: "AES-256 End-to-End Encryption"
              },
              {
                icon: CheckCircle2,
                text: "99.9% Uptime Guarantee"
              }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center">
                <item.icon className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
