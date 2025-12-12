
import { useState } from "react";
import { Brain, Database, Workflow, ArrowRight, CheckCircle, Users, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AIConsultingFirm = () => {
  const { ref: heroRef, isIntersecting: heroInView, isMobile } = useIntersectionObserver();
  const { ref: servicesRef, isIntersecting: servicesInView } = useIntersectionObserver();
  const { ref: whyChooseRef, isIntersecting: whyChooseInView } = useIntersectionObserver();
  const { ref: processRef, isIntersecting: processInView } = useIntersectionObserver();

  const services = [
    {
      icon: Brain,
      title: "LLM Applications",
      description: "Custom AI solutions that understand and process natural language for your business.",
      features: [
        "Custom ChatGPT-like interfaces",
        "Document analysis & summarization",
        "AI-powered customer support",
        "RAG systems for knowledge retrieval"
      ],
      link: "/services/llm-applications"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with robust pipelines and analytics.",
      features: [
        "Real-time data processing",
        "Web scraping at scale",
        "Data validation & cleaning",
        "ETL workflow automation"
      ],
      link: "/services/data-pipelines"
    },
    {
      icon: Workflow,
      title: "System Integration",
      description: "Connect your applications seamlessly with intelligent automation workflows.",
      features: [
        "API integration & middleware",
        "Workflow automation",
        "Custom webhook development",
        "Cross-platform synchronization"
      ],
      link: "/services/system-workflows"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our AI specialists bring years of experience in machine learning, data science, and enterprise integration."
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "We don't believe in one-size-fits-all. Every solution is custom-built for your specific business needs."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Get your AI solutions up and running quickly with our proven development methodologies."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Our solutions grow with your business, handling increased load and complexity seamlessly."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business needs and identify the best AI opportunities for maximum impact."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design custom AI solutions tailored to your specific requirements and goals."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build, test, and refine your AI applications with rigorous quality assurance."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Launch your AI solutions with ongoing support and optimization for continued success."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Premier <span className="text-gray-600">AI Consulting</span> Firm
            </h1>
            
            <div className={`group mb-8 ${isMobile ? 'lg:group' : ''}`}>
              <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-opacity duration-300 ${
                isMobile 
                  ? (heroInView ? 'opacity-100' : 'opacity-0') 
                  : 'opacity-0 group-hover:opacity-100'
              }`}>
                Transform your business with cutting-edge AI solutions. We specialize in building intelligent applications, 
                data pipelines, and automated workflows that drive real results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:hello@automationarchitech.com"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-light hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              
              <Link 
                to="/#services"
                className="border border-gray-300 text-gray-600 px-8 py-3 rounded-lg text-lg font-light hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Support & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our AI Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to automate, optimize, and transform your business operations.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${isMobile ? 'lg:group' : ''}`}
              >
                <div className="p-8 border-b border-gray-50">
                  <service.icon className="w-10 h-10 text-gray-400 mb-4" />
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">{service.title}</h3>
                  <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 ${
                    isMobile 
                      ? (servicesInView ? 'opacity-100' : 'opacity-0') 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {service.description}
                  </p>
                </div>

                <div className={`p-8 overflow-hidden transition-all duration-500 ${
                  isMobile 
                    ? (servicesInView ? 'max-h-96' : 'max-h-0') 
                    : 'max-h-0 group-hover:max-h-96'
                }`}>
                  <ul className={`space-y-3 mb-6 transition-opacity duration-300 ${
                    isMobile 
                      ? (servicesInView ? 'opacity-100' : 'opacity-0') 
                      : 'opacity-0 group-hover:opacity-100 delay-200'
                  }`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={service.link}
                    className={`w-full bg-gray-50 text-gray-600 py-2 px-4 rounded-lg font-light hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                      isMobile 
                        ? (servicesInView ? 'opacity-100' : 'opacity-0') 
                        : 'opacity-0 group-hover:opacity-100 delay-200'
                    }`}
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Why Choose Our AI Consulting Firm?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver AI solutions that drive measurable results.
            </p>
          </div>

          <div ref={whyChooseRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`group flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                  <p className={`text-gray-600 transition-opacity duration-300 ${
                    isMobile 
                      ? (whyChooseInView ? 'opacity-100' : 'opacity-0') 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Our AI Consulting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation from concept to deployment.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-light text-gray-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className={`text-gray-600 transition-opacity duration-300 ${
                  isMobile 
                    ? (processInView ? 'opacity-100' : 'opacity-0') 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free consultation and discover how our AI solutions can accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@automationarchitech.com"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-light hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Schedule Free Consultation
              <ArrowRight size={18} />
            </a>
            <Link 
              to="/"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg text-lg font-light hover:border-gray-400 hover:text-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIConsultingFirm;
