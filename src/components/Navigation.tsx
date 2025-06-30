
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-agency-gray-900">
              Automation Architect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-agency-gray-700 hover:text-agency-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-agency-gray-700 hover:text-agency-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-agency-gray-700 hover:text-agency-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-agency-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-agency-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-agency-gray-700 hover:text-agency-blue-600 focus:outline-none focus:text-agency-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection("home")}
                className="text-agency-gray-700 hover:text-agency-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-agency-gray-700 hover:text-agency-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-agency-gray-700 hover:text-agency-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-agency-blue-600 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-agency-blue-700 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
