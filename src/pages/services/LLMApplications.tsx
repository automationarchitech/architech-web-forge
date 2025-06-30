
import { ArrowLeft, Brain, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const LLMApplications = () => {
  const features = [
    "Custom ChatGPT-like interfaces",
    "Document analysis & summarization", 
    "Intelligent content generation",
    "RAG (Retrieval Augmented Generation) systems",
    "AI-powered customer support bots"
  ];

  const benefits = [
    {
      title: "24/7 Availability",
      description: "AI systems work around the clock, providing instant responses to your customers."
    },
    {
      title: "Scalable Solutions", 
      description: "Handle thousands of conversations simultaneously without additional staffing."
    },
    {
      title: "Cost Effective",
      description: "Reduce operational costs while improving response times and accuracy."
    },
    {
      title: "Custom Training",
      description: "Train models on your specific data for industry-relevant responses."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-gray-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900">
                LLM Applications
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your business with custom AI solutions that understand and process natural language. 
              From intelligent chatbots to document analysis systems, we build AI applications that drive real business value.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop" 
              alt="AI and Machine Learning" 
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">What We Build</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">Key Benefits</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="border-l-4 border-gray-200 pl-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Ready to Build Your AI Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how LLM applications can transform your business operations.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-light hover:bg-gray-800 transition-colors"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LLMApplications;
