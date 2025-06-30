
import { Brain, Database, Workflow, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "LLM Applications",
      description: "Transform your business with custom AI solutions that understand and process natural language.",
      features: [
        "Custom ChatGPT-like interfaces",
        "Document analysis & summarization",
        "Intelligent content generation",
        "RAG (Retrieval Augmented Generation) systems",
        "AI-powered customer support bots"
      ],
      link: "/services/llm-applications"
    },
    {
      icon: Database,
      title: "Data Pipelines & Scrapers",
      description: "Robust, scalable solutions for collecting, processing, and managing your data efficiently.",
      features: [
        "Real-time data processing pipelines",
        "Web scraping at scale",
        "Data validation & cleaning",
        "ETL/ELT workflow automation",
        "API integration & monitoring"
      ],
      link: "/services/data-pipelines"
    },
    {
      icon: Workflow,
      title: "System Workflows",
      description: "Connect your applications seamlessly with intelligent automation and workflow orchestration.",
      features: [
        "API integration & middleware",
        "Workflow automation with Zapier/n8n",
        "Custom webhook development",
        "Event-driven architectures",
        "Cross-platform data synchronization"
      ],
      link: "/services/system-workflows"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our Expertise
          </h2>
          <div className="group">
            <p className="text-xl text-gray-500 max-w-3xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              We specialize in cutting-edge technologies to help you automate, scale, and innovate faster than ever before.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-50">
                <service.icon className="w-8 h-8 text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-3">{service.title}</h3>
                
              </div>

              {/* Features */}
              <div className="p-8 max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
                <p className="text-gray-600 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">{service.description}</p>
                <ul className="space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={service.link}
                  className="mt-6 w-full bg-gray-50 text-gray-600 py-2 px-4 rounded-lg font-light hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm opacity-0 group-hover:opacity-100 delay-200"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
