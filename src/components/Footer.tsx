
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
    <footer className="bg-agency-gray-900 border-t border-agency-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Automation Architect</h3>
            <p className="text-agency-gray-300 mb-6 leading-relaxed">
              Transforming businesses through intelligent automation, LLM applications, 
              and seamless system integrations. Let's build the future together.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-agency-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-agency-blue-600 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-agency-blue-600 rounded-lg flex items-center justify-center">
                <Workflow className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-agency-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-agency-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-agency-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-agency-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-agency-gray-300">LLM Applications</li>
              <li className="text-agency-gray-300">Data Pipelines</li>
              <li className="text-agency-gray-300">Web Scrapers</li>
              <li className="text-agency-gray-300">System Workflows</li>
              <li className="text-agency-gray-300">API Integration</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-agency-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-agency-gray-400 text-sm">
              © {currentYear} Automation Architect. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="mailto:hello@automationarchitech.com"
                className="text-agency-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm"
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
