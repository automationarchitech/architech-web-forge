
import { Brain, Database, Workflow, ArrowRight, CheckCircle } from "lucide-react";

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
      gradient: "from-purple-500 to-pink-500"
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
      gradient: "from-blue-500 to-cyan-500"
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
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-agency-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-agency-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-agency-blue-600 to-agency-blue-800 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-agency-gray-600 max-w-3xl mx-auto">
            We specialize in cutting-edge technologies to help you automate, scale, and innovate faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="relative z-10">
                  <service.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">{service.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-agency-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-8 w-full bg-agency-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-agency-blue-600 transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
