
import { ArrowLeft, Workflow, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SystemWorkflows = () => {
  const features = [
    "API integration & middleware",
    "Workflow automation with Zapier/n8n",
    "Custom webhook development",
    "Event-driven architectures",
    "Cross-platform data synchronization"
  ];

  const benefits = [
    {
      title: "Seamless Integration",
      description: "Connect disparate systems and applications for unified business operations."
    },
    {
      title: "Process Automation",
      description: "Eliminate manual tasks and reduce human error with intelligent automation."
    },
    {
      title: "Real-time Synchronization",
      description: "Keep your data consistent across all platforms with instant updates."
    },
    {
      title: "Custom Workflows",
      description: "Tailored automation solutions that fit your specific business processes."
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
                <Workflow className="w-8 h-8 text-gray-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900">
                System Workflows
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Connect your applications seamlessly with intelligent automation and workflow orchestration. 
              We build the bridges between your systems to create unified, efficient business processes.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop" 
              alt="System Integration and Workflows" 
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
              <h2 className="text-3xl font-light text-gray-900 mb-8">Integration Services</h2>
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
              <h2 className="text-3xl font-light text-gray-900 mb-8">Business Impact</h2>
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
            Ready to Streamline Your Workflows?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's connect your systems and automate your business processes.
          </p>
          <Link 
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-light hover:bg-gray-800 transition-colors"
          >
            Schedule Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemWorkflows;
