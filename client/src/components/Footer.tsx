
import { Code, Database, Workflow, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/22af2fd9-7390-4312-8b89-2db9122e4680.png" 
                alt="Automation Architect" 
                className="w-6 h-6"
              />
              <h3 className="text-xl font-medium text-gray-900">Automation Architect</h3>
            </div>
            <div className="group mb-6">
              <p className="text-gray-500 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Transforming businesses through intelligent automation, LLM applications, 
                and seamless system integrations. Let's build the future together.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                <Workflow className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-500">LLM Applications</li>
              <li className="text-gray-500">Data Pipelines</li>
              <li className="text-gray-500">Web Scrapers</li>
              <li className="text-gray-500">System Workflows</li>
              <li className="text-gray-500">API Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Automation Architect. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="mailto:hello@automationarchitech.com"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex items-center gap-2 text-sm"
              >
                hello@automationarchitech.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
