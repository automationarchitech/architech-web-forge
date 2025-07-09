
import { Building, Scale, Heart, ShoppingCart, GraduationCap, Factory } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Industries = () => {
  const { ref: titleRef, isIntersecting: titleInView, isMobile } = useIntersectionObserver();

  const industries = [
    {
      icon: Scale,
      title: "Legal Tech",
      description: "Automating legal document processing, contract analysis, and compliance workflows to streamline legal operations.",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: Building,
      title: "Admin Automation",
      description: "Streamlining administrative processes, document management, and workflow automation for improved efficiency.",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: Heart,
      title: "Health + Medicine",
      description: "Building healthcare data pipelines, patient management systems, and medical workflow automation solutions.",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: ShoppingCart,
      title: "Ecommerce",
      description: "Creating inventory management systems, order processing automation, and customer data integration platforms.",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "Developing learning management integrations, student data processing, and educational workflow automation.",
      color: "from-gray-400 to-gray-500"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Implementing production data pipelines, quality control automation, and supply chain management systems.",
      color: "from-gray-400 to-gray-500"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <div ref={titleRef} className={`group ${isMobile ? 'lg:group' : ''}`}>
            <p className={`text-xl text-gray-500 max-w-3xl mx-auto transition-opacity duration-300 ${
              isMobile 
                ? (titleInView ? 'opacity-100' : 'opacity-0') 
                : 'opacity-0 group-hover:opacity-100'
            }`}>
              Our automation expertise spans across diverse industries, delivering tailored solutions that drive efficiency and innovation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IndustryCard = () => {
              const { ref: cardRef, isIntersecting: cardInView } = useIntersectionObserver();
              
              return (
                <div
                  key={index}
                  ref={cardRef}
                  className={`group bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${isMobile ? 'lg:group' : ''}`}
                >
                  <div className="p-8">
                    <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6`}>
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-gray-900 mb-4">{industry.title}</h3>
                    
                    <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 ${
                      isMobile 
                        ? (cardInView ? 'opacity-100' : 'opacity-0') 
                        : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      {industry.description}
                    </p>
                  </div>
                </div>
              );
            };
            
            return <IndustryCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
