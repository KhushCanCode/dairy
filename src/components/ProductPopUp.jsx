import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import gsap from "gsap";

const ProductPopUp = ({ open, setOpen, product, position }) => {
  const [isVisible, setIsVisible] = useState(open);
  const popupRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (open) {
      setIsVisible(true);

      // Start backdrop fade in
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate popup from card position to center
      const vw = window.innerWidth / 2;
      const vh = window.innerHeight / 2;

      const startX = position.left + 150; // card center approx
      const startY = position.top + 200;

      gsap.fromTo(
        popupRef.current,
        {
          x: startX - vw,
          y: startY - vh,
          scale: 0.5,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    } else if (isVisible) {
      // Animate closing
      gsap.to(popupRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power3.inOut",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false),
      });
    }
  }, [open]);

  if (!isVisible) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
      onClick={() => setOpen(false)}
    >
      <div
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FFE8ED] rounded-3xl p-8 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] min-h-[70vh] flex flex-col md:flex-row items-center justify-center shadow-2xl overflow-hidden"
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-700 hover:text-black transition"
        >
          <X size={28} />
        </button>

        {/* Left: Product can */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-[220px] md:w-[260px] lg:w-[300px] object-contain drop-shadow-md"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1 text-center md:text-left mt-6 md:mt-0 px-4 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-anton mb-4"
            style={{ color: product.txtcolor }}
          >
            {product.name}
          </h2>
          <p className="text-gray-700 leading-relaxed font-anuphan">
            {product.description ||
              "Sparkling water with a squeeze of organic fruit. Refreshing, honest, and naturally vibrant — just like you deserve."}
          </p>

          <div className="mt-8">
            <p className="font-bold text-gray-800">✨ Highlights:</p>
            <ul className="text-gray-600 mt-2 space-y-1 text-sm md:text-base">
              <li>• 0 sugar & low calorie</li>
              <li>• Made with real fruit extract</li>
              <li>• 100% vegan & organic</li>
              <li>• Naturally colored, never artificial</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopUp;
