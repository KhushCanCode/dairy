import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const TagScroll = () => {
  const rowsRef = useRef([]);

  const tags = [
    { label: "No Added Sugar", color: "border-brown-500 text-brown-700" },
    { label: "Gluten Free", color: "border-red-400 text-red-500" },
    { label: "No Preservative", color: "border-green-400 text-green-500" },
    { label: "Chemical Free", color: "border-yellow-400 text-yellow-500" },
    { label: "High Protein", color: "border-sky-400 text-sky-500" },
    { label: "Farm Fresh", color: "border-orange-400 text-orange-500" },
  ];

  useEffect(() => {
    rowsRef.current.forEach((row, i) => {
      if (!row) return;

      const direction = i % 2 === 0 ? -1 : 1; // alternate direction
      const distance = 50; // move 50% of width (smooth looping)

      const randomOffset = gsap.utils.random(-50, 0);
      gsap.set(row, { xPercent: randomOffset });

      // Seamless infinite loop
      gsap.to(row, {
        xPercent: `+=${direction * distance}`,
        duration: gsap.utils.random(35, 45), // slower movement
        ease: "none",
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    });
  }, []);

  return (
    <div className="bg-[#FFF7DA] py-6 overflow-hidden relative select-none">
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => (rowsRef.current[rowIndex] = el)}
          className="cb-tagreel-row flex gap-4 whitespace-nowrap mb-4"
        >
          {/* duplicate the tags enough times so scrolling never runs out */}
          {[...tags, ...tags, ...tags, ...tags].map((tag, index) => (
            <span
              key={`${rowIndex}-${index}`}
              className={`px-4 py-1 rounded-full border text-sm font-anuphan bg-transparent ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};
