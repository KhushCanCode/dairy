import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const QualitySection = () => {
  useGSAP(() => {
    // Badge Animation
    gsap.from(".section-badge", {
      scale: 0,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".quality-section",
        start: "top 85%",
      },
    });

    // Heading Animation - Wait for fonts to load
    document.fonts.ready.then(() => {
      const textSplit = new SplitText(".section-heading", { type: "chars" });
      gsap.from(textSplit.chars, {
        yPercent: 200,
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 85%",
        },
      });
    });

    // Box Animation 
    gsap.utils.toArray(".boxes div").forEach((box, i) => {
      gsap.to(box, {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          // toggleActions: "play none none reverse",
        },
        // delay: i * 0.15, 
      });
    });
  });

  return (
    <section className="quality-section bg-milk overflow-hidden rounded-2xl py-10 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col items-center">
        <div className="section-badge border py-2 px-4 rounded-full font-anuphan">
          <p>Pure Variety</p>
        </div>

        <h1 className="section-heading uppercase font-anton text-4xl md:text-6xl mt-6 md:mt-10 mb-10 md:mb-16 text-center">
          We've got it all
        </h1>

        <div className="parent w-full max-w-6xl mx-auto md:p-4">
          <div className="boxes grid grid-cols-3 grid-rows-9 gap-2 md:gap-4 h-[60vh] sm:h-[80vh] md:h-[120vh]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`box${i + 1} rounded-xl overflow-hidden ${
                  i === 0
                    ? "row-span-6"
                    : i === 1
                    ? "col-span-2 row-span-3"
                    : i === 2
                    ? "row-span-3 col-start-2 row-start-4"
                    : i === 3
                    ? "row-span-3 col-start-3 row-start-4"
                    : i === 4
                    ? "row-span-3 row-start-7"
                    : "col-span-2 row-span-3 row-start-7"
                }`}
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                }}
              >
                <img
                  src={`/images/bentoimg${i + 1}.png`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
