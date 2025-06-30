
import { ArrowRight, Code, Database, Workflow } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-agency-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-agency-blue-400/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-agency-blue-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Your
            <span className="bg-gradient-to-r from-agency-blue-400 to-agency-blue-600 bg-clip-text text-transparent"> Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-agency-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help organizations build intelligent LLM applications, deploy robust data pipelines, 
            and create seamless system workflows that scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToContact}
              className="bg-agency-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-agency-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight size={20} />
            </button>
            
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-agency-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              View Our Services
            </button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-left">
              <Code className="w-12 h-12 text-agency-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">LLM Applications</h3>
              <p className="text-agency-gray-300 text-center">Custom AI solutions tailored to your business needs</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              <Database className="w-12 h-12 text-agency-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Data Pipelines</h3>
              <p className="text-agency-gray-300 text-center">Robust data processing and scraping solutions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <Workflow className="w-12 h-12 text-agency-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">System Workflows</h3>
              <p className="text-agency-gray-300 text-center">Seamless integration between your applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
