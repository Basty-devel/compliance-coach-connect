
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-lg text-primary">Compliance Coach</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-xs">
              A comprehensive compliance management platform with integrated educational tools
              focused on data privacy and security.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Security', 'Communication', 'Pricing', 'Demo'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Guides', 'API', 'Support', 'Community'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Compliance Coach. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            {['Terms', 'Privacy', 'Cookies', 'Security'].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-sm hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
