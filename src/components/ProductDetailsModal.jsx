import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { X, Star } from "lucide-react";

const ProductDetailsModal = ({ isOpen, product, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // Product highlights based on product type
  const getHighlights = (productName) => {
    const highlightsMap = {
      "Pure Ghee": [
        "100% pure & natural",
        "Rich in healthy fats",
        "Traditional preparation",
        "No preservatives added"
      ],
      "Strawberry Lassi": [
        "Made with real strawberries",
        "Creamy & refreshing",
        "Probiotic benefits",
        "No artificial flavors"
      ],
      "Cold Coffee": [
        "Premium coffee beans",
        "Smooth & creamy texture",
        "Perfectly balanced",
        "Ready to drink"
      ],
      "Almond Milk": [
        "100% plant-based",
        "Rich in protein",
        "No added sugar",
        "Lactose-free"
      ],
      "Malai Dahi": [
        "Creamy & thick texture",
        "Live cultures",
        "No preservatives",
        "Premium ingredients"
      ],
      "Coconut Water": [
        "100% natural",
        "Rich in electrolytes",
        "No added sugar",
        "Refreshing & hydrating"
      ]
    };
    return highlightsMap[productName] || [
      "Premium quality",
      "Fresh ingredients",
      "No preservatives",
      "Made with care"
    ];
  };

  // Product descriptions
  const getDescription = (productName) => {
    const descriptionsMap = {
      "Pure Ghee": "Pure, golden ghee made with traditional methods. Rich, aromatic, and perfect for cooking. Experience the authentic taste of premium quality ghee that enhances every dish.",
      "Strawberry Lassi": "Creamy lassi blended with real strawberry pieces. Refreshing, sweet, and naturally delicious — the perfect drink to cool you down.",
      "Cold Coffee": "Smooth cold coffee made with premium beans. Rich, creamy, and perfectly balanced — your perfect companion for any time of day.",
      "Almond Milk": "Plant-based almond milk that's creamy and nutritious. Made with real almonds, rich in protein, and naturally delicious.",
      "Malai Dahi": "Creamy, thick dahi with a rich texture. Made with premium ingredients and live cultures for the authentic taste you love.",
      "Coconut Water": "Pure, natural coconut water that's refreshing and hydrating. Rich in electrolytes and naturally sweet — nature's perfect drink."
    };
    return descriptionsMap[productName] || "Premium quality product made with care and fresh ingredients. Experience the authentic taste of Dairy Power.";
  };

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
      onComplete: onClose,
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  if (!isOpen || !product) return null;

  const highlights = getHighlights(product.name);
  const description = getDescription(product.name);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl max-h-[90vh] bg-milk rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-dark-blue/10 hover:bg-dark-blue/20 text-dark-blue transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" strokeWidth={2.5} />
        </button>

        {/* Logo in top-left */}
        <div className="absolute top-4 left-4 z-20">
          <img
            src="/images/Dairy power logo.png"
            alt="Dairy Power Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/80 p-1 shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row h-full overflow-y-auto scrollbar-hide">
          {/* Left Side - Product Image */}
          <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-white/50 to-white/30">
            <div className="relative w-full max-w-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              {/* Product Badge Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <p className="text-xs sm:text-sm font-anuphan text-dark-blue font-semibold">
                  No Added Preservatives
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
                <p className="text-xs font-anuphan text-dark-blue font-semibold">
                  Premium Ingredients
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12 bg-milk">
            <div className="space-y-4 sm:space-y-6">
              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-anton text-dark-blue uppercase">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-dark-blue/80 font-anuphan leading-relaxed">
                {description}
              </p>

              {/* Highlights Section */}
              <div className="pt-4">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                  <h2 className="text-lg sm:text-xl font-anton text-dark-blue uppercase">
                    Highlights:
                  </h2>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm sm:text-base text-dark-blue/90 font-anuphan"
                    >
                      <span className="text-dark-blue mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;

