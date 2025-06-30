import { ArrowRight, Code, Database, Workflow } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            AI That Works with You
          </h1>
          
          <div className="group mb-12">
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              We help organizations build intelligent LLM applications, deploy robust data pipelines, 
              and create seamless system workflows that scale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={scrollToContact} className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-light hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight size={18} />
            </button>
            
            <button onClick={() => document.getElementById("services")?.scrollIntoView({
            behavior: "smooth"
          })} className="border border-gray-300 text-gray-600 px-8 py-3 rounded-lg text-lg font-light hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
              View Services
            </button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center p-8 hover:bg-gray-50 rounded-xl transition-all duration-300">
              <Code className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">LLM Applications</h3>
              <p className="text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Custom AI solutions tailored to your business needs</p>
            </div>
            
            <div className="group flex flex-col items-center p-8 hover:bg-gray-50 rounded-xl transition-all duration-300">
              <Database className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Data Pipelines</h3>
              <p className="text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Robust data processing and scraping solutions</p>
            </div>
            
            <div className="group flex flex-col items-center p-8 hover:bg-gray-50 rounded-xl transition-all duration-300">
              <Workflow className="w-8 h-8 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">System Workflows</h3>
              <p className="text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">Seamless integration between your applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;