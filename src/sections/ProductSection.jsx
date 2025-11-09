import React, { useRef } from "react";
import { products } from "../constants/product.js";
import { CircleAlert } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";


const ProductSection = () => {


  useGSAP(() => {
    // Badge Animation
    gsap.from(".badge", {
      scale: 0,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".product-section",
        start: "top 85%",
      },
    });

    // Heading Animation
    const textSplit = new SplitText(".heading", { type: "chars" });
    gsap.from(textSplit.chars, {
      yPercent: 200,
      opacity: 0,
      stagger: 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 85%",
      },
    });

    // Product Cards Animation
    gsap.from(".products", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".products",
        start: "top 80%",
      },
    });

    gsap.from(".product-section", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".product-section",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div className="bg-dark-blue">
      <section className="product-section min-h-dvh bg-milk overflow-hidden rounded-2xl relative">
        <div className="container flex flex-col items-center py-10 md:py-20 mx-auto max-w-7xl">
          <div className="badge border py-2 px-4 rounded-full font-anuphan">
            <p>Products</p>
          </div>

          <h1 className="heading uppercase font-anton text-5xl md:text-7xl mt-5 md:mt-10 mb-15 md:mb-20">
            Various Tastes
          </h1>

          <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:max-w-6xl mx-auto relative">
            {products.map((item, index) => (
              <div
                key={index}
                className={`product-card w-[280px] md:w-[320px] h-[400px] hover:-translate-y-2 bg-linear-to-b ${item.gradient} rounded-2xl flex flex-col items-center justify-between p-6 transition-all duration-300`}
              >
                <h2
                  className="text-xl font-anton text-center"
                  style={{ color: item.txtcolor }}
                >
                  {item.name}
                </h2>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 object-contain"
                />
                <button
                  className="text-milk cursor-pointer hover:opacity-80 font-anton px-5 py-2 rounded-full mt-4 transition duration-300 flex items-center gap-2"
                  style={{ backgroundColor: item.txtcolor }}
                >
                  <CircleAlert />
                  <p>See Details</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
