import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import React, { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const FranchiseSection = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert("Thank you for your interest! We will contact you soon.");
  };

  useGSAP(() => {
    // Badge Animation
    gsap.from(".franchise-badge", {
      scale: 0,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".franchise-section",
        start: "top 85%",
      },
    });

    // Heading Animation
    const textSplit = new SplitText(".franchise-heading", { type: "chars" });
    gsap.from(textSplit.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".franchise-heading",
        start: "top 85%",
      },
    });

    // Form Animation
    gsap.from(".franchise-form", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".franchise-form",
        start: "top 80%",
      },
    });

    // Benefits Animation
    gsap.from(".benefit-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".benefits-grid",
        start: "top 80%",
      },
    });
  });

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

  return (
    <section id="franchise" className="franchise-section bg-milk overflow-hidden rounded-2xl py-10 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="franchise-badge border border-dark-blue py-2 px-4 rounded-full font-anuphan inline-block mb-4">
            <p>Franchise</p>
          </div>

          <h1 className="franchise-heading uppercase font-anton text-4xl md:text-6xl lg:text-7xl mt-6 md:mt-10 mb-4 text-dark-blue">
            Dairy Power Franchise
          </h1>

          <p className="text-lg md:text-xl text-dark-blue/80 font-anuphan max-w-2xl mx-auto">
            Start your own new business today with most saleable products!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Benefits Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-anton text-dark-blue mb-6 uppercase">
              Benefits
            </h2>
            <div className="benefits-grid space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item flex items-start gap-3 p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-dark-blue mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-dark-blue font-anuphan text-sm md:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="franchise-form bg-white/80 rounded-2xl p-6 md:p-8 shadow-lg">
              <h2 className="text-xl md:text-2xl font-anton text-dark-blue mb-6 uppercase">
                Please fill the form below
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-anton text-dark-blue mb-4 uppercase">
                    Personal Information :
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Pincode
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Experience
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Current Business / Job
                      </label>
                      <input
                        type="text"
                        name="currentBusiness"
                        value={formData.currentBusiness}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Experience */}
                <div>
                  <h3 className="text-lg font-anton text-dark-blue mb-4 uppercase">
                    Business Experience
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
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
                          <span className="text-dark-blue font-anuphan">Yes</span>
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
                          <span className="text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.everOwnedBusiness === "Yes" && (
                      <div>
                        <label className="block text-sm font-anuphan text-dark-blue mb-2">
                          What type of business ?
                        </label>
                        <input
                          type="text"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
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
                          <span className="text-dark-blue font-anuphan">Yes</span>
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
                          <span className="text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    {formData.everBeenFranchise === "Yes" && (
                      <div>
                        <label className="block text-sm font-anuphan text-dark-blue mb-2">
                          If yes, please describe
                        </label>
                        <textarea
                          name="franchiseDescription"
                          value={formData.franchiseDescription}
                          onChange={handleChange}
                          rows="3"
                          className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all resize-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <h3 className="text-lg font-anton text-dark-blue mb-4 uppercase">
                    Location Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
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
                          <span className="text-dark-blue font-anuphan">Yes</span>
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
                          <span className="text-dark-blue font-anuphan">No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-anuphan text-dark-blue mb-2">
                        Address of shop
                      </label>
                      <textarea
                        name="shopAddress"
                        value={formData.shopAddress}
                        onChange={handleChange}
                        rows="2"
                        className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-anuphan text-dark-blue mb-2">
                          Area in sqft.
                        </label>
                        <input
                          type="text"
                          name="areaSqft"
                          value={formData.areaSqft}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-anuphan text-dark-blue mb-2">
                          Frontage in feet
                        </label>
                        <input
                          type="text"
                          name="frontageFeet"
                          value={formData.frontageFeet}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-dark-blue/30 focus:border-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 mt-0.5 text-dark-blue focus:ring-dark-blue rounded border-dark-blue/30"
                    />
                    <span className="text-sm font-anuphan text-dark-blue">
                      By Submitting this form I certify that the information
                      mentioned above is true and correct.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-dark-blue text-milk font-anton uppercase rounded-lg hover:bg-dark-blue/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  Submit Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;

