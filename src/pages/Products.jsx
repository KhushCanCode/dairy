import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../constants/product.js";
import { CircleAlert, ArrowLeft } from "lucide-react";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Products = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollWrapperRef = useRef(null);
  const scrollContentRef = useRef(null);

  useGSAP(() => {
    // Animate product cards on scroll
    gsap.from(".product-card-page", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".products-grid",
        start: "top 80%",
      },
    });
  });

  // Ensure products are loaded and scroll to top on mount
  useEffect(() => {
    console.log("Products loaded:", products.length);
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Setup infinite scroll animation after DOM is ready
  useEffect(() => {
    if (scrollContentRef.current && scrollWrapperRef.current) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const contentWidth = scrollContentRef.current.scrollWidth;
        const wrapper = scrollContentRef.current.parentElement;
        
        // Remove existing duplicates if any
        const existingDuplicates = wrapper.querySelectorAll('.reasons-scroll-duplicate');
        existingDuplicates.forEach(dup => dup.remove());
        
        // Clone the content for seamless infinite loop
        const duplicate = scrollContentRef.current.cloneNode(true);
        duplicate.classList.add("reasons-scroll-duplicate");
        wrapper.appendChild(duplicate);

        // Create seamless infinite animation using timeline
        const tl = gsap.timeline({ repeat: -1, ease: "none" });
        
        // Animate wrapper to move left
        tl.to(wrapper, {
          x: -contentWidth,
          duration: 30,
          ease: "none",
        });
        
        // Instantly reset to start position (seamless loop)
        tl.set(wrapper, { x: 0 });
      }, 200);

      return () => {
        clearTimeout(timer);
        // Clean up animation on unmount
        if (scrollContentRef.current?.parentElement) {
          gsap.killTweensOf(scrollContentRef.current.parentElement);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-milk pt-20 pb-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <button
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-dark-blue hover:text-blue-600 transition-colors duration-300 mb-6 font-anuphan cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center">
            <div className="inline-block border border-dark-blue py-2 px-4 rounded-full font-anuphan mb-4">
              <p>Our Products</p>
            </div>
            <h1 className="uppercase font-anton text-4xl md:text-6xl lg:text-7xl text-dark-blue mb-4">
              All Products
            </h1>
            <p className="text-base md:text-lg text-dark-blue/70 font-anuphan max-w-2xl mx-auto">
              Discover our complete range of premium dairy products
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            {products && products.length > 0 ? (
              products.map((item, index) => (
                <div
                  key={index}
                  className={`product-card-page w-full h-[450px] md:h-[500px] hover:-translate-y-2 bg-gradient-to-b ${item.gradient} rounded-2xl flex flex-col items-center justify-between p-6 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <h2
                    className="text-2xl md:text-3xl font-anton text-center"
                    style={{ color: item.txtcolor }}
                  >
                    {item.name}
                  </h2>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 md:h-72 object-contain"
                    onError={(e) => {
                      console.error("Image failed to load:", item.image);
                      e.target.style.display = "none";
                    }}
                  />
                  <button
                    onClick={() => {
                      setSelectedProduct(item);
                      setIsModalOpen(true);
                    }}
                    className="text-milk cursor-pointer hover:opacity-80 font-anton px-6 py-3 rounded-full mt-4 transition duration-300 flex items-center gap-2 text-sm md:text-base"
                    style={{ backgroundColor: item.txtcolor }}
                  >
                    <CircleAlert className="w-5 h-5" />
                    <p>See Details</p>
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-dark-blue/70 font-anuphan text-lg">No products available at the moment.</p>
              </div>
            )}
        </div>

        {/* Reasons to Prefer Dairy Power Section - Infinite Scroll */}
        <div className="reasons-section mt-20 md:mt-24 mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="uppercase font-anton text-3xl md:text-5xl lg:text-6xl text-dark-blue mb-6 leading-tight">
              Reasons to Prefer Dairy Power Products
            </h2>
          </div>

          {/* Infinite Scroll Container with gradient masks */}
          <div className="relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-milk to-transparent z-10 pointer-events-none"></div>
            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-milk to-transparent z-10 pointer-events-none"></div>
            
            <div ref={scrollWrapperRef} className="reasons-scroll-wrapper overflow-hidden relative bg-dark-blue py-5 md:py-6 rounded-2xl">
              <div className="flex">
                <div ref={scrollContentRef} className="reasons-scroll-content flex items-center gap-12 md:gap-16 whitespace-nowrap">
                  {/* Reason 1 */}
                  <span className="reason-item flex-shrink-0 font-anuphan text-milk text-base md:text-lg lg:text-xl font-medium">
                    Prepared from fresh, natural, adulteration-free milk
                  </span>

                  {/* Separator */}
                  <span className="flex-shrink-0 text-milk/40 text-xl">•</span>

                  {/* Reason 2 */}
                  <span className="reason-item flex-shrink-0 font-anuphan text-milk text-base md:text-lg lg:text-xl font-medium">
                    Doesn't contain preservatives
                  </span>

                  {/* Separator */}
                  <span className="flex-shrink-0 text-milk/40 text-xl">•</span>

                  {/* Reason 3 */}
                  <span className="reason-item flex-shrink-0 font-anuphan text-milk text-base md:text-lg lg:text-xl font-medium">
                    Prepared in stringently controlled conditions
                  </span>

                  {/* Separator */}
                  <span className="flex-shrink-0 text-milk/40 text-xl">•</span>

                  {/* Reason 4 */}
                  <span className="reason-item flex-shrink-0 font-anuphan text-milk text-base md:text-lg lg:text-xl font-medium">
                    Delicious, energy giving and have nutritive values
                  </span>

                  {/* Separator */}
                  <span className="flex-shrink-0 text-milk/40 text-xl">•</span>

                  {/* Reason 5 */}
                  <span className="reason-item flex-shrink-0 font-anuphan text-milk text-base md:text-lg lg:text-xl font-medium">
                    Quality product at affordable price
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

export default Products;

