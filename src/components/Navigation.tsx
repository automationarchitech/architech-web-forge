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
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/lovable-uploads/22af2fd9-7390-4312-8b89-2db9122e4680.png" alt="Automation Architect" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-gray-900">Automation Architech</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all duration-200">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="bg-gray-900 text-white block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Contact
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;