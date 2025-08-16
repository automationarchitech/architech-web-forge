import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Play,
  CheckCircle,
  Clock,
  Zap,
  Users,
  TrendingUp,
  Code,
  Database,
  MessageSquare,
} from "lucide-react";

const ConcurrentFunctionCalling = () => {
  const [navHeight, setNavHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showFunction1, setShowFunction1] = useState(false);
  const [showFunction2, setShowFunction2] = useState(false);
  const [function1Complete, setFunction1Complete] = useState(false);
  const [function2Complete, setFunction2Complete] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const speechText =
    "I need to write an email to my boss Sarah about Project Blue Agent and explain what's going on with the database migration delays.";
  const words = speechText.split(" ");

  useEffect(() => {
    const handleResize = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        setNavHeight(nav.clientHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetDemo = () => {
    setCurrentWordIndex(0);
    setShowFunction1(false);
    setShowFunction2(false);
    setFunction1Complete(false);
    setFunction2Complete(false);
    setShowTyping(false);
    setShowResponse(false);
    setIsPlaying(false);
  };

  const startDemo = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    resetDemo();

    let wordIndex = 0;
    const showNextWord = () => {
      if (wordIndex < words.length) {
        setCurrentWordIndex(wordIndex);

        // Trigger contact function after "boss Sarah"
        if (wordIndex === 10) {
          // After "Sarah"
          setTimeout(() => setShowFunction1(true), 200);
          setTimeout(() => setFunction1Complete(true), 1800);
        }

        // Trigger project function after "Project Blue Agent"
        if (wordIndex === 14) {
          // After "Agent"
          setTimeout(() => setShowFunction2(true), 200);
          setTimeout(() => setFunction2Complete(true), 2200);
        }

        wordIndex++;
        // Add jitter delay between 300-600ms
        const jitterDelay = 300 + Math.random() * 300;
        setTimeout(showNextWord, jitterDelay);
      } else {
        // Show typing and response after speech completes
        setTimeout(() => setShowTyping(true), 500);
        setTimeout(() => {
          setShowTyping(false);
          setShowResponse(true);
          setIsPlaying(false);
        }, 2000);
      }
    };

    showNextWord();
  };

  useEffect(() => {
    // Auto-start demo when component mounts
    const timer = setTimeout(() => startDemo(), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div style={{ paddingTop: `${navHeight}px` }}>
        {/* Hero Section */}
        <section className="relative py-24 flex items-center overflow-hidden" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}>
          {/* Animated Background */}
          <div
            className="absolute top-0 right-0 w-full h-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
              animation: "rotate 20s linear infinite",
              transform: "translate(50%, -50%)",
            }}
          />

          <div className="container mx-auto px-5 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Text */}
              <div className="text-white">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Stop Waiting for AI to Catch Up
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Your users expect instant responses. Our breakthrough
                  technology makes AI assistants react while people are still
                  speaking - not after.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:hello@automationarchitect.com"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 inline-block text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Conversation Demo */}
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-15 backdrop-blur-xl rounded-3xl p-8 border border-white border-opacity-20 w-full max-w-md min-h-96">
                  {/* User Message */}
                  <div className="bg-blue-600 text-white p-4 rounded-2xl mb-4 min-h-28 flex items-center">
                    <div className="text-base leading-relaxed">
                      {words
                        .slice(0, currentWordIndex + 1)
                        .map((word, index) => (
                          <span key={index} className="inline-block mr-1">
                            {word}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Function Call 1 */}
                  {showFunction1 && (
                    <div
                      className={`${function1Complete ? "bg-green-500" : "bg-pink-400"} text-white mx-2 mb-2 px-4 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 transition-all duration-500`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs ${function1Complete ? "text-green-500" : "text-pink-400 animate-spin"}`}
                      >
                        {function1Complete ? "✓" : "⚡"}
                      </div>
                      <span>
                        {function1Complete
                          ? "get_contact_info() completed"
                          : 'get_contact_info("Sarah") executing...'}
                      </span>
                    </div>
                  )}

                  {/* Function Call 2 */}
                  {showFunction2 && (
                    <div
                      className={`${function2Complete ? "bg-green-500" : "bg-pink-400"} text-white mx-2 mb-2 px-4 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 transition-all duration-500`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full flex items-center justify-center text-xs ${function2Complete ? "text-green-500" : "text-pink-400 animate-spin"}`}
                      >
                        {function2Complete ? "✓" : "⚡"}
                      </div>
                      <span>
                        {function2Complete
                          ? 'fetch_project("Blue Agent") completed'
                          : 'fetch_project("Blue Agent") executing...'}
                      </span>
                    </div>
                  )}

                  {/* Typing Indicator */}
                  {showTyping && (
                    <div className="bg-white text-blue-600 mr-4 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-md animate-pulse">
                      <span>Processing email draft</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* AI Response */}
                  {showResponse && (
                    <div className="bg-white text-gray-700 mr-4 px-4 py-4 rounded-2xl shadow-md animate-in slide-in-from-bottom-2 duration-500">
                      <div className="font-semibold text-green-600 mb-1">
                        ✅ Email Draft Ready
                      </div>
                      <div className="text-sm text-gray-500 mb-1">
                        To: sarah.johnson@company.com
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Subject: Project Blue Agent - Database Migration Update
                      </div>
                      <div className="text-sm italic">
                        Draft generated with Sarah's contact info and Blue Agent
                        project details
                      </div>
                    </div>
                  )}

                  {/* Demo Controls */}
                  {!isPlaying && showResponse && (
                    <div className="text-center mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={startDemo}
                        className="bg-white bg-opacity-20 border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-30 rounded-full px-4 py-2 text-sm"
                      >
                        🔄 Replay Demo
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                The Frustration is Real
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every second of delay breaks the natural flow of conversation
                and frustrates your users
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-12 rounded-2xl text-center shadow-lg border hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">😤</div>
                <h3 className="text-2xl font-bold mb-4">User Impatience</h3>
                <p className="text-gray-600">
                  Users get frustrated waiting 2-3 seconds for responses to
                  simple requests like "get contact info" or "check calendar"
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl text-center shadow-lg border hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">💔</div>
                <h3 className="text-2xl font-bold mb-4">Broken Flow</h3>
                <p className="text-gray-600">
                  Natural conversations become stilted when AI can't keep up
                  with human speech patterns and expectations
                </p>
              </div>

              <div className="bg-white p-12 rounded-2xl text-center shadow-lg border hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-6">📉</div>
                <h3 className="text-2xl font-bold mb-4">Poor Adoption</h3>
                <p className="text-gray-600">
                  Slow AI responses lead to decreased usage and users preferring
                  manual alternatives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Showcase */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                The Game-Changing Difference
              </h2>
              <p className="text-xl text-gray-600">
                See how our predictive technology transforms user experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="p-10 rounded-2xl text-center bg-red-100 border-2 border-red-300">
                <h3 className="text-2xl font-bold mb-4">❌ Traditional AI</h3>
                <div className="text-5xl font-bold text-red-600 my-4">3.2s</div>
                <div className="text-lg">
                  <strong>Wait for complete speech</strong>
                  <br />
                  → Process request
                  <br />
                  → Execute function
                  <br />→ Generate response
                </div>
              </div>

              <div className="p-10 rounded-2xl text-center bg-green-100 border-2 border-green-400">
                <h3 className="text-2xl font-bold mb-4">✅ Our Solution</h3>
                <div className="text-5xl font-bold text-green-600 my-4">
                  1.3s
                </div>
                <div className="text-lg">
                  <strong>Predict intent early</strong>
                  <br />
                  → Execute while speaking
                  <br />→ Response ready instantly
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-gray-800 text-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">
                Why This Matters for Your Business
              </h2>
              <p className="text-xl text-gray-300">
                Transform your AI from frustrating to delightful
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="bg-white bg-opacity-5 p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold">60% Faster Responses</h3>
                </div>
                <p className="text-gray-300">
                  Reduce total response time from 3+ seconds to under 1.5
                  seconds for common requests
                </p>
              </div>

              <div className="bg-white bg-opacity-5 p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold">
                    Improved User Satisfaction
                  </h3>
                </div>
                <p className="text-gray-300">
                  Users report 40% higher satisfaction with AI interactions when
                  responses feel instant
                </p>
              </div>

              <div className="bg-white bg-opacity-5 p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <MessageSquare className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold">Natural Conversations</h3>
                </div>
                <p className="text-gray-300">
                  AI feels more human-like when it can anticipate and respond to
                  user intent in real-time
                </p>
              </div>

              <div className="bg-white bg-opacity-5 p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold">Competitive Advantage</h3>
                </div>
                <p className="text-gray-300">
                  Be the first in your market to offer truly responsive AI
                  assistant technology
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Preview */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                Easy Integration
              </h2>
              <p className="text-xl text-gray-600">
                Add concurrent function calling to your existing AI with just a
                few lines of code
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900 text-gray-100 p-8 rounded-2xl overflow-x-auto">
                <div className="text-green-400 text-sm mb-4">
                  // Enable concurrent function calling in your AI assistant
                </div>
                <div className="text-blue-400">import</div>{" "}
                <span className="text-yellow-300">{"{"}</span>{" "}
                ConcurrentFunctionCaller{" "}
                <span className="text-yellow-300">{"}"}</span>{" "}
                <div className="text-blue-400">from</div>{" "}
                <span className="text-green-300">
                  '@automation-architect/concurrent-functions'
                </span>
                <span className="text-gray-400">;</span>
                <br />
                <br />
                <div className="text-green-400 text-sm mb-2">
                  // Initialize with your function definitions
                </div>
                <div className="text-blue-400">const</div> caller ={" "}
                <div className="text-blue-400">new</div>{" "}
                ConcurrentFunctionCaller
                <span className="text-yellow-300">({"{"}</span>
                <br />
                &nbsp;&nbsp;functions:{" "}
                <span className="text-yellow-300">[</span>getContactInfo,
                fetchProject, sendEmail
                <span className="text-yellow-300">]</span>,<br />
                &nbsp;&nbsp;predictiveThreshold:{" "}
                <span className="text-orange-300">0.8</span>{" "}
                <div className="text-green-400">
                  // Execute when 80% confident
                </div>
                <br />
                <span className="text-yellow-300">{"}"});</span>
                <br />
                <br />
                <div className="text-green-400 text-sm mb-2">
                  // Functions execute as user speaks
                </div>
                caller.<span className="text-yellow-300">onSpeech</span>
                <span className="text-yellow-300">(</span>
                <span className="text-green-300">
                  "I need contact info for Sarah"
                </span>
                <span className="text-yellow-300">)</span>
                <span className="text-gray-400">;</span>
                <br />
                <div className="text-green-400 text-sm">
                  // → getContactInfo() starts executing immediately
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Ready to Make Your AI Lightning Fast?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Join forward-thinking companies already using concurrent function
                calling to deliver exceptional user experiences.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 block mb-2">50+</div>
                <div className="text-lg text-gray-600">Companies Using</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 block mb-2">1.5s</div>
                <div className="text-lg text-gray-600">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 block mb-2">60%</div>
                <div className="text-lg text-gray-600">Faster Than Traditional AI</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@automationarchitect.com"
                className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 inline-block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ConcurrentFunctionCalling;
