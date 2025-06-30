
import { Users, Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Projects Delivered" },
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Target, number: "100%", label: "Client Satisfaction" },
    { icon: TrendingUp, number: "300%", label: "Average ROI Increase" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-agency-gray-900 mb-6">
              Why Choose 
              <span className="bg-gradient-to-r from-agency-blue-600 to-agency-blue-800 bg-clip-text text-transparent"> Automation Architect</span>
            </h2>
            
            <p className="text-lg text-agency-gray-600 mb-8 leading-relaxed">
              We're not just another development agency. We're automation specialists who understand 
              the intricacies of modern AI, data processing, and system integration. Our expertise 
              spans from cutting-edge LLM applications to robust data pipelines that scale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-agency-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-agency-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agency-gray-900 mb-2">Tailored Solutions</h3>
                  <p className="text-agency-gray-600">Every project is unique. We build custom solutions that fit your specific needs and scale with your growth.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-agency-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-agency-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agency-gray-900 mb-2">Proven Results</h3>
                  <p className="text-agency-gray-600">Our clients see measurable improvements in efficiency, cost reduction, and revenue growth.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-agency-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-agency-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agency-gray-900 mb-2">Expert Team</h3>
                  <p className="text-agency-gray-600">Our team stays at the forefront of AI and automation technologies to deliver cutting-edge solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-agency-gray-50 to-agency-blue-50 rounded-2xl border border-agency-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-agency-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-agency-gray-900 mb-2">{stat.number}</div>
                <div className="text-agency-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
