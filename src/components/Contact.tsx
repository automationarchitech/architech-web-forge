import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
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
  const {
    ref: titleRef,
    isIntersecting: titleInView,
    isMobile
  } = useIntersectionObserver();
  const {
    ref: contentRef,
    isIntersecting: contentInView
  } = useIntersectionObserver();
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
          <div ref={titleRef} className={`group ${isMobile ? 'lg:group' : ''}`}>
            <p className={`text-xl text-gray-500 max-w-3xl mx-auto transition-opacity duration-300 ${isMobile ? titleInView ? 'opacity-100' : 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
              Let's discuss how we can transform your business with intelligent automation solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h3>
              <div ref={contentRef} className={`group mb-8 ${isMobile ? 'lg:group' : ''}`}>
                <p className={`text-gray-500 text-lg leading-relaxed transition-opacity duration-300 ${isMobile ? contentInView ? 'opacity-100' : 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                  Ready to streamline your operations? We'd love to hear about your project 
                  and explore how our automation expertise can drive your success.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Email</h4>
                  <p className={`text-gray-500 transition-opacity duration-300 ${isMobile ? contentInView ? 'opacity-100' : 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>hello@automationarchitech.com</p>
                </div>
              </div>

              

              <div className={`group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 ${isMobile ? 'lg:group' : ''}`}>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Location</h4>
                  <p className={`text-gray-500 transition-opacity duration-300 ${isMobile ? contentInView ? 'opacity-100' : 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>Global Remote Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>
      </div>
    </section>;
};
export default Contact;