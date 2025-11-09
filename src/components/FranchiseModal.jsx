import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, ChevronRight, ChevronLeft, Check } from "lucide-react";

const FranchiseModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const stepRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    pincode: "",
    state: "",
    experience: "",
    currentBusiness: "",
    everOwnedBusiness: "",
    businessType: "",
    everBeenFranchise: "",
    franchiseDescription: "",
    location: "",
    ownCommercialSpace: "",
    shopAddress: "",
    areaSqft: "",
    frontageFeet: "",
    agreeToTerms: false,
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
    alert("Thank you for your interest! We will contact you soon.");
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

  const benefits = [
    "A business of your own",
    "Best margins in the industry",
    "Minimum investment",
    "Door delivery",
    "No locking period",
    "Finance assistance (upto 100% loan)",
    "Training programs",
    "Full support",
    "24x7 assistance",
  ];

  const stepTitles = [
    "Personal Information",
    "Business Experience",
    "Location Details",
    "Review & Submit",
  ];

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.mobile && formData.city;
      case 2:
        return true; // Optional fields
      case 3:
        return true; // Optional fields
      case 4:
        return formData.agreeToTerms;
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
        className="relative w-full max-w-5xl h-[95vh] sm:h-[90vh] bg-milk rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
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
            <div className="inline-block border border-dark-blue py-1 px-3 sm:py-2 sm:px-4 rounded-full font-anuphan text-xs sm:text-sm mb-2">
              <p>Franchise</p>
            </div>
            <h1 className="uppercase font-anton text-xl sm:text-2xl md:text-3xl text-dark-blue">
              Dairy Power Franchise
            </h1>
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
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
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
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Current Business / Job
                      </label>
                      <input
                        type="text"
                        name="currentBusiness"
                        value={formData.currentBusiness}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Business Experience */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Business Experience
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-2">
                        Ever owned a business ?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="everOwnedBusiness"
                            value="Yes"
                            checked={formData.everOwnedBusiness === "Yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="everOwnedBusiness"
                            value="No"
                            checked={formData.everOwnedBusiness === "No"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.everOwnedBusiness === "Yes" && (
                      <div>
                        <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                          What type of business ?
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-2">
                        Ever been a franchise ?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="everBeenFranchise"
                            value="Yes"
                            checked={formData.everBeenFranchise === "Yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="everBeenFranchise"
                            value="No"
                            checked={formData.everBeenFranchise === "No"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.everBeenFranchise === "Yes" && (
                      <div>
                        <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                          If yes, please describe
                        </label>
                        <textarea
                          name="franchiseDescription"
                          value={formData.franchiseDescription}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all resize-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Location Details */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Location Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-2">
                        Own a commercial space ?
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="ownCommercialSpace"
                            value="Yes"
                            checked={formData.ownCommercialSpace === "Yes"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">Yes</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="ownCommercialSpace"
                            value="No"
                            checked={formData.ownCommercialSpace === "No"}
                            onChange={handleChange}
                            className="w-4 h-4 text-dark-blue focus:ring-dark-blue"
                          />
                          <span className="text-sm text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                        Address of shop
                      </label>
                      <textarea
                        name="shopAddress"
                        value={formData.shopAddress}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                          Area in sqft.
                        </label>
                        <input
                          type="text"
                          name="areaSqft"
                          value={formData.areaSqft}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-anuphan text-dark-blue mb-1">
                          Frontage in feet
                        </label>
                        <input
                          type="text"
                          name="frontageFeet"
                          value={formData.frontageFeet}
                          onChange={handleChange}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Review & Submit
                  </h2>
                  
                  {/* Benefits Summary */}
                  <div className="bg-white/80 rounded-xl p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-anton text-dark-blue mb-3 uppercase">
                      Benefits
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-lg bg-milk/50"
                        >
                          <Check className="w-4 h-4 text-dark-blue mt-0.5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-dark-blue font-anuphan">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-white/80 rounded-xl p-4 sm:p-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 mt-0.5 text-dark-blue focus:ring-dark-blue rounded border-dark-blue/30 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-anuphan text-dark-blue">
                        By Submitting this form I certify that the information
                        mentioned above is true and correct.
                      </span>
                    </label>
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
                Submit Form
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseModal;
