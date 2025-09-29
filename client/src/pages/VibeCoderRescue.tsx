
import { useState } from "react";
import { Code, Zap, RefreshCw, ArrowRight, CheckCircle, AlertTriangle, Coffee, Lightbulb, Rocket, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const VibeCoderRescue = () => {
  const { ref: heroRef, isIntersecting: heroInView, isMobile } = useIntersectionObserver();
  const { ref: painPointsRef, isIntersecting: painPointsInView } = useIntersectionObserver();
  const { ref: solutionsRef, isIntersecting: solutionsInView } = useIntersectionObserver();
  const { ref: processRef, isIntersecting: processInView } = useIntersectionObserver();

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Tutorial Hell Survivor",
      description: "You've watched 100+ YouTube tutorials but your code still doesn't work when you try to build something real.",
      pain: "\"Why does it work in the video but not for me?\""
    },
    {
      icon: Coffee,
      title: "Stack Overflow Warrior",
      description: "You copy-paste solutions that kinda work, but you're not sure why, and everything breaks when you change one thing.",
      pain: "\"I have 47 tabs open and I'm still confused.\""
    },
    {
      icon: RefreshCw,
      title: "Restart Cycle Victim",
      description: "You've started the same project 12 times with different frameworks because nothing ever gets finished.",
      pain: "\"Maybe I should try React... or Vue... or just give up.\""
    }
  ];

  const solutions = [
    {
      icon: Heart,
      title: "We Get Your Vision",
      description: "You had an amazing idea. We make it real. No judgment, no tech gatekeeping, just results.",
      result: "Your idea becomes a working product people can actually use."
    },
    {
      icon: Code,
      title: "Professional Code That Works",
      description: "We write clean, maintainable code that doesn't break when you look at it wrong. No more spaghetti code nightmares.",
      result: "A robust application that actually scales and doesn't crash."
    },
    {
      icon: Rocket,
      title: "From Broken to Brilliant",
      description: "Send us your broken code, half-finished projects, or just your ideas. We'll turn them into something awesome.",
      result: "A polished product you can be proud to show your friends."
    }
  ];

  const rescueProcess = [
    {
      step: "01",
      title: "Show Us Your Mess",
      description: "Send us your broken code, explain your idea, or just tell us what you're trying to build. We've seen it all.",
      action: "No shame zone - we fix everything"
    },
    {
      step: "02",
      title: "We Diagnose & Plan",
      description: "We figure out what went wrong and create a roadmap to make your vision actually work.",
      action: "Get a clear path forward"
    },
    {
      step: "03",
      title: "We Build It Right",
      description: "Professional development that follows best practices. Your idea deserves proper execution.",
      action: "Watch your vision come to life"
    },
    {
      step: "04",
      title: "You Launch & Succeed",
      description: "We deliver a working product with documentation so you understand what you've got.",
      action: "Finally ship something real"
    }
  ];

  const testimonialVibes = [
    {
      quote: "I spent 6 months trying to build a simple web app. These guys had it working in 2 weeks.",
      author: "Sarah, Aspiring Entrepreneur",
      mood: "😭 → 😎"
    },
    {
      quote: "My Node.js was a disaster. They turned it into something that actually works and makes money.",
      author: "Mike, Former Tutorial Victim",
      mood: "🤬 → 💰"
    },
    {
      quote: "I had the idea, they had the skills. Perfect match.",
      author: "Jessica, Creative Visionary",
      mood: "💡 → 🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm mb-6">
              <AlertTriangle size={16} />
              <span>Code Not Working? We Can Help.</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Turn Your <span className="text-red-600">Coding Nightmare</span><br />
              Into a <span className="text-green-600">Real Product</span>
            </h1>
            
            <div className={`group mb-8 ${isMobile ? 'lg:group' : ''}`}>
              <p className={`text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-opacity duration-300 ${
                isMobile 
                  ? (heroInView ? 'opacity-100' : 'opacity-0') 
                  : 'opacity-0 group-hover:opacity-100'
              }`}>
                Stuck in tutorial hell? Code won't work? Half-finished projects collecting digital dust? 
                <br />We rescue vibe coders and turn their ideas into working applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="mailto:hello@automationarchitech.com"
                className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Rescue My Code 🆘
                <ArrowRight size={18} />
              </a>
              
              <Link 
                to="#solutions"
                className="border border-gray-300 text-gray-600 px-8 py-3 rounded-lg text-lg font-light hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                See How We Help
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-2">😭</div>
                <div className="text-lg font-medium text-gray-900 mb-1">Before Us</div>
                <div className="text-gray-600">Broken dreams & spaghetti code</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛠️</div>
                <div className="text-lg font-medium text-gray-900 mb-1">We Work Magic</div>
                <div className="text-gray-600">Professional development</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-lg font-medium text-gray-900 mb-1">After Us</div>
                <div className="text-gray-600">Working product that ships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              We Know Your Pain 😮‍💨
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You're not alone. We've helped hundreds of developers escape these exact situations.
            </p>
          </div>

          <div ref={painPointsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <div
                key={index}
                className={`group bg-white rounded-xl p-8 border border-red-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <pain.icon className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-medium text-gray-900">{pain.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{pain.description}</p>
                
                <div className={`bg-red-50 border border-red-100 rounded-lg p-4 transition-opacity duration-300 ${
                  isMobile 
                    ? (painPointsInView ? 'opacity-100' : 'opacity-0') 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <p className="text-red-700 italic text-sm">{pain.pain}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              How We Turn It Around 🔄
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From broken mess to working masterpiece. Here's how we make the magic happen.
            </p>
          </div>

          <div ref={solutionsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}
              >
                <solution.icon className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-2xl font-medium text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                
                <div className={`bg-white/80 border border-green-200 rounded-lg p-4 transition-opacity duration-300 ${
                  isMobile 
                    ? (solutionsInView ? 'opacity-100' : 'opacity-0') 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 font-medium text-sm">{solution.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Rescued Coders Tell All 📣
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialVibes.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl text-center mb-4">{testimonial.mood}</div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-500">— {testimonial.author}</p>
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
              The Rescue Process 🚑
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hot mess to success in 4 simple steps. No complicated procedures, just results.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rescueProcess.map((step, index) => (
              <div
                key={index}
                className={`group text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className={`text-sm font-medium text-blue-600 transition-opacity duration-300 ${
                  isMobile 
                    ? (processInView ? 'opacity-100' : 'opacity-0') 
                    : 'opacity-0 group-hover:opacity-100'
                }`}>
                  {step.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Stop Struggling? 🛟
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Your idea deserves to work. Let's make it happen together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@automationarchitech.com"
              className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Rescue My Project Now 🆘
              <ArrowRight size={18} />
            </a>
            <Link 
              to="/"
              className="border border-red-300 text-red-100 px-8 py-3 rounded-lg text-lg font-light hover:border-white hover:text-white transition-all duration-300"
            >
              See Our Other Work
            </Link>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-red-100 text-sm">
              💡 Free consultation • 🚀 Fast turnaround • 💯 Actually works
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VibeCoderRescue;
