import { useRef, useState, useCallback, useMemo } from "react";
import { Mail, PhoneCall, MapPin, Send, Mountain, Waves } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Form({
  boxClass = "bg-transparent backdrop-blur-sm border border-gray-200",  
  headingClass = "text-gray-900",
  buttonClass = "bg-gray-900 hover:bg-black",
  focusClass = "focus:ring-2 focus:ring-gray-400 focus:border-transparent",
}) {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const submitTimeout = useRef(null);
  
  // Memoize the submit handler to prevent unnecessary recreations
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        "service_mzjxqed",
        "template_tuxc84b",
        formRef.current,
        "AQ1kCexllWvK5aKK_"
      );
      
      setIsSubmitted(true);
      formRef.current.reset();
      
      // Clear any existing timeout
      if (submitTimeout.current) {
        clearTimeout(submitTimeout.current);
      }
      
      // Set new timeout
      submitTimeout.current = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Email error:", err);
      // You could add error state handling here
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);
  
  // Cleanup timeout on unmount
  useMemo(() => {
    return () => {
      if (submitTimeout.current) {
        clearTimeout(submitTimeout.current);
      }
    };
  }, []);
  
  // Memoize form field handlers
  const handleFieldFocus = useCallback((fieldName) => {
    setFocusedField(fieldName);
  }, []);
  
  const handleFieldBlur = useCallback(() => {
    setFocusedField(null);
  }, []);
  
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 sm:py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-6xl relative">
        {/* Background decorative elements - optimized with will-change */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 opacity-5 will-change-transform">
          <Mountain className="w-64 h-64 text-gray-400" />
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 opacity-5 will-change-transform">
          <Waves className="w-64 h-64 text-gray-400" />
        </div>
        
        <div className="md:flex contain-layout">
          {/* Left Side - Visual Element (hidden on mobile) */}
          <div className="hidden md:block md:w-2/5 lg:w-1/2 pr-8 lg:pr-12">
            <div className="h-full flex flex-col justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl transform rotate-3 will-change-transform"></div>
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-12 shadow-lg">
                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
                    Begin Your Journey
                  </h2>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Embark on an extraordinary adventure. Our expert team crafts personalized experiences that connect you with nature's most breathtaking landscapes.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: PhoneCall, title: "Call Us", value: "+91 7078287331" },
                      { icon: Mail, title: "Email Us", value: "gorafts001@gmail.com" },
                      { icon: MapPin, title: "Visit Us", value: "Rishikesh, Tapovan" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-white p-3 rounded-xl shadow-sm mr-4 flex-shrink-0">
                          <item.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{item.title}</p>
                          <p className="text-gray-700">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm italic text-gray-600">
                      "The mountains are calling and I must go." — John Muir
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Form (visible on all screens) */}
          <div className="md:w-3/5 lg:w-1/2">
            <div className={`${boxClass} rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 will-change-transform`}>
              <div className="text-center mb-6 sm:mb-8 md:mb-10">
                <h2 className={`text-xl sm:text-2xl md:text-3xl md:text-4xl font-light tracking-tight mb-2 sm:mb-4 ${headingClass}`}>
                  Plan Your Adventure
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                  Share your vision and we'll craft your perfect journey
                </p>
              </div>
              
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                  {[
                    { name: "first_name", placeholder: "First Name", type: "text" },
                    { name: "last_name", placeholder: "Last Name", type: "text" }
                  ].map((field) => (
                    <div key={field.name}>
                      <label 
                        htmlFor={field.name}
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                      >
                        {field.placeholder}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        required
                        placeholder={field.placeholder}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-transparent shadow-sm transition-all duration-200 ${focusClass} ${focusedField === field.name ? 'ring-2 ring-gray-400 border-transparent' : ''}`}
                        onFocus={() => handleFieldFocus(field.name)}
                        onBlur={handleFieldBlur}
                        aria-required="true"
                      />
                    </div>
                  ))}
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-transparent shadow-sm transition-all duration-200 ${focusClass} ${focusedField === 'user_email' ? 'ring-2 ring-gray-400 border-transparent' : ''}`}
                    onFocus={() => handleFieldFocus('user_email')}
                    onBlur={handleFieldBlur}
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Adventure Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    required
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-transparent shadow-sm transition-all duration-200 ${focusClass} ${focusedField === 'interest' ? 'ring-2 ring-gray-400 border-transparent' : ''}`}
                    onFocus={() => handleFieldFocus('interest')}
                    onBlur={handleFieldBlur}
                    aria-required="true"
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="rafting">River Rafting</option>
                    <option value="trekking">Mountain Trekking</option>
                    <option value="bungee">Bungee Jumping</option>
                    <option value="stays">Adventure Stays</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3 sm:rows-4"
                    required
                    placeholder="Tell us about your adventure plans..."
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 bg-transparent shadow-sm transition-all duration-200 ${focusClass} ${focusedField === 'message' ? 'ring-2 ring-gray-400 border-transparent' : ''}`}
                    onFocus={() => handleFieldFocus('message')}
                    onBlur={handleFieldBlur}
                    aria-required="true"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 sm:py-3.5 px-6 rounded-lg font-medium text-white shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center ${buttonClass} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-sm sm:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm sm:text-base">Send Message</span>
                      <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
                
                {isSubmitted && (
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm animate-fadeIn" role="status" aria-live="polite">
                    ✅ Your message has been sent successfully!
                  </div>
                )}
              </form>
              
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 sm:pt-8 border-t border-gray-200 md:hidden">
                <div className="flex flex-col space-y-3 sm:space-y-4 text-gray-600">
                  {[
                    { icon: PhoneCall, value: "+91 7078287331" },
                    { icon: Mail, value: "gorafts001@gmail.com" },
                    { icon: MapPin, value: "Rishikesh, Tapovan" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}