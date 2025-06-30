import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Ready to Automate?
          </h2>
          <div className="group">
            <p className="text-xl text-gray-500 max-w-3xl mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Let's discuss how we can transform your business with intelligent automation solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h3>
              <div className="group mb-8">
                <p className="text-gray-500 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ready to streamline your operations? We'd love to hear about your project 
                  and explore how our automation expertise can drive your success.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Email</h4>
                  <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">hello@automationarchitech.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Phone</h4>
                  <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Location</h4>
                  <p className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Global Remote Team</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white" placeholder="john@company.com" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white" placeholder="Your Company" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 bg-white" placeholder="Tell us about your project requirements, goals, and how we can help..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-light hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isSubmitting ? <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </> : <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;