import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ChevronRight, ChevronLeft, Check, Mail, Send } from "lucide-react";

const MailUsModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const stepRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    interest: "",
    message: "",
  });

  // Reset to step 1 when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
    }
  }, [isOpen]);

  // Animate modal in/out
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.1)" }
      );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Animate step transitions
  useEffect(() => {
    if (stepRef.current) {
      gsap.fromTo(
        stepRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [currentStep]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    handleClose();
  };

  const handleClose = () => {
    gsap.to(modalRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentStep(1);
        onClose();
      },
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const stepTitles = ["Contact Information", "Message & Review"];

  const interests = [
    "Product Inquiry",
    "Partnership",
    "Franchise",
    "General Inquiry",
    "Feedback",
    "Other",
  ];

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.contact && formData.interest;
      case 2:
        return formData.message.trim().length > 0;
      default:
        return false;
    }
  };

  const canProceed = validateStep(currentStep);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl h-[95vh] sm:h-[90vh] bg-milk rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-dark-blue/10 hover:bg-dark-blue/20 text-dark-blue transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
        </button>

        {/* Header with Progress */}
        <div className="bg-white/50 border-b border-dark-blue/10 px-4 sm:px-6 py-3 sm:py-4">
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 border border-dark-blue py-1 px-3 sm:py-2 sm:px-4 rounded-full font-anuphan text-xs sm:text-sm mb-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <p>Contact Us</p>
            </div>
            <h1 className="uppercase font-anton text-xl sm:text-2xl md:text-3xl text-dark-blue">
              Mail Us
            </h1>
            <p className="text-xs sm:text-sm text-dark-blue/70 font-anuphan mt-1">
              We'd love to hear from you!
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              {stepTitles.map((title, index) => (
                <div
                  key={index + 1}
                  className={`flex-1 flex items-center ${
                    index < stepTitles.length - 1 ? "mr-2" : ""
                  }`}
                >
                  <div className="flex items-center flex-1">
                    <div
                      className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                        currentStep > index + 1
                          ? "bg-dark-blue text-milk"
                          : currentStep === index + 1
                          ? "bg-dark-blue text-milk scale-110"
                          : "bg-white/80 text-dark-blue/50 border-2 border-dark-blue/30"
                      }`}
                    >
                      {currentStep > index + 1 ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < stepTitles.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                          currentStep > index + 1
                            ? "bg-dark-blue"
                            : "bg-white/50"
                        }`}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs sm:text-sm font-anuphan text-dark-blue/70">
              Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
            </p>
          </div>
        </div>

        {/* Content Area - No Scrollbar */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto scrollbar-hide px-4 sm:px-6 py-4 sm:py-6">
            <div ref={stepRef} className="h-full">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all bg-white/80"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all bg-white/80"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Contact <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        placeholder="+91 1234567890"
                        className="w-full px-4 py-3 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all bg-white/80"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all bg-white/80 cursor-pointer appearance-none font-anuphan text-dark-blue pr-10 hover:border-dark-blue/50"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23025da7' d='M8 11L3 6h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '16px',
                            paddingRight: '2.5rem',
                          }}
                        >
                          <option value="" disabled style={{ color: 'rgba(2, 93, 167, 0.5)', fontFamily: 'Anuphan, sans-serif' }}>
                            Select your interest
                          </option>
                          {interests.map((interest, index) => (
                            <option 
                              key={index} 
                              value={interest}
                              style={{ 
                                color: '#025da7', 
                                fontFamily: 'Anuphan, sans-serif',
                                backgroundColor: 'white',
                                padding: '0.5rem'
                              }}
                            >
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Message & Review */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Your Message
                  </h2>
                  
                  <div>
                    <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="8"
                      placeholder="Tell us more about your inquiry..."
                      className="w-full px-4 py-3 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all resize-none bg-white/80"
                    />
                  </div>

                  {/* Review Section */}
                  <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-dark-blue/10">
                    <h3 className="text-base sm:text-lg font-anton text-dark-blue mb-4 uppercase">
                      Review Your Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-dark-blue/10">
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue/70 w-20 flex-shrink-0">
                          Name:
                        </span>
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue font-medium">
                          {formData.name || "Not provided"}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-dark-blue/10">
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue/70 w-20 flex-shrink-0">
                          Email:
                        </span>
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue font-medium">
                          {formData.email || "Not provided"}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-dark-blue/10">
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue/70 w-20 flex-shrink-0">
                          Contact:
                        </span>
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue font-medium">
                          {formData.contact || "Not provided"}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-3 border-b border-dark-blue/10">
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue/70 w-20 flex-shrink-0">
                          Interest:
                        </span>
                        <span className="text-xs sm:text-sm font-anuphan text-dark-blue font-medium">
                          {formData.interest || "Not provided"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="border-t border-dark-blue/10 bg-white/50 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center gap-3">
            <button
              type="button"
              onClick={currentStep === 1 ? handleClose : handlePrevious}
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 text-dark-blue font-anton uppercase rounded-lg hover:bg-white transition-colors duration-300 border border-dark-blue/30 text-xs sm:text-sm"
            >
              {currentStep === 1 ? (
                "Cancel"
              ) : (
                <>
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </>
              )}
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!canProceed}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-anton uppercase rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                  canProceed
                    ? "bg-dark-blue text-milk hover:bg-dark-blue/90 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-dark-blue/50 text-milk/50 cursor-not-allowed"
                }`}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canProceed}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 font-anton uppercase rounded-lg transition-all duration-300 text-xs sm:text-sm ${
                  canProceed
                    ? "bg-dark-blue text-milk hover:bg-dark-blue/90 shadow-lg hover:shadow-xl transform hover:scale-105"
                    : "bg-dark-blue/50 text-milk/50 cursor-not-allowed"
                }`}
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailUsModal;

