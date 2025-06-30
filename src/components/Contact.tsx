import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
const Contact = () => {
  const {
    targetRef: titleRef,
    isIntersecting: isTitleVisible
  } = useIntersectionObserver();
  const {
    targetRef: contentRef,
    isIntersecting: isContentVisible
  } = useIntersectionObserver();
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
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Ready to Automate?
          </h2>
          <div>
            <p className={`text-xl text-gray-500 max-w-3xl mx-auto transition-opacity duration-500 ${isTitleVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'} hover:opacity-100`}>
              Let's discuss how we can transform your business with intelligent automation solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h3>
              <div className="mb-8">
                <p className={`text-gray-500 text-lg leading-relaxed transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'} hover:opacity-100`}>
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
                  <p className={`text-gray-500 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'} group-hover:opacity-100`}>hello@automationarchitech.com</p>
                </div>
              </div>

              

              <div className="group flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-medium">Location</h4>
                  <p className={`text-gray-500 transition-opacity duration-500 ${isContentVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'} group-hover:opacity-100`}>Global Remote Team</p>
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