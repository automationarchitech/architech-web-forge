
import { Users, Award, Target, TrendingUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { targetRef: contentRef, isIntersecting: isContentVisible } = useIntersectionObserver();
  const { targetRef: statsRef, isIntersecting: areStatsVisible } = useIntersectionObserver();

  const stats = [{
    icon: Users,
    number: "50+",
    label: "Projects Delivered"
  }, {
    icon: Award,
    number: "5+",
    label: "Years Experience"
  }, {
    icon: Target,
    number: "100%",
    label: "Client Satisfaction"
  }, {
    icon: TrendingUp,
    number: "300%",
    label: "Average ROI Increase"
  }];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Why Choose Automation Architech</h2>
            
            <div className="mb-8">
              <p className={`text-lg text-gray-500 leading-relaxed transition-opacity duration-500 ${
                isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}>
                We're not just another development agency. We're automation specialists who understand 
                the intricacies of modern AI, data processing, and system integration. Our expertise 
                spans from cutting-edge LLM applications to robust data pipelines that scale.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-3 h-3 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Tailored Solutions</h3>
                  <p className={`text-gray-500 transition-opacity duration-500 ${
                    isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
                  } group-hover:opacity-100`}>Every project is unique. We build custom solutions that fit your specific needs and scale with your growth.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-3 h-3 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Proven Results</h3>
                  <p className={`text-gray-500 transition-opacity duration-500 ${
                    isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
                  } group-hover:opacity-100`}>Our clients see measurable improvements in efficiency, cost reduction, and revenue growth.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-all duration-300">
                <div className="w-6 h-6 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-3 h-3 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Team</h3>
                  <p className={`text-gray-500 transition-opacity duration-500 ${
                    isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
                  } group-hover:opacity-100`}>Our team stays at the forefront of AI and automation technologies to deliver cutting-edge solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="text-2xl font-light text-gray-900 mb-1">{stat.number}</div>
                <div className={`text-gray-500 font-light text-sm transition-opacity duration-500 ${
                  areStatsVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
                } group-hover:opacity-100`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
