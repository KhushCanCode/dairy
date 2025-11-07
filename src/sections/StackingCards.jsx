// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
// import React from "react";

// gsap.registerPlugin(ScrollTrigger);

// export const StackingCards = () => {
//   useGSAP(() => {
//     const cards = gsap.utils.toArray(".card");
//     const rotations = [-12, 10, -5, 5, -5, -2];

//   cards.forEach((card, index) => {
//     gsap.set(card, {
//       y: window.innerHeight,
//       rotate: rotations[index],
//     });
//   });

//   ScrollTrigger.create({
//     trigger: ".sticky-cards",
//     start: "top center",
//     end: `+=${window.innerHeight * 8}px`,
//     pin: true,
//     pinSpacing: true,
//     scrub: 1,
//     onUpdate: (self) => {
//       const progress = self.progress;
//       const totalCards = cards.length;
//       const progressPerCard = 1 / totalCards;

//       cards.forEach((card, index) => {
//         const cardStart = index * progressPerCard;
//         let cardProgress = (progress - cardStart) / progressPerCard;
//         cardProgress = Math.min(Math.max(cardProgress, 0), 1);

//         let yPos = window.innerHeight * (1 - cardProgress);
//         let xPos = 0;

//         if (cardProgress === 1 && index < totalCards - 1) {
//           const remainingProgress =
//             (progress - (cardStart + progressPerCard)) /
//             (1 - (cardStart + progressPerCard));
//           if (remainingProgress > 0) {
//             const distanceMultiplier = 1 - index * 0.15;
//             const distanceMultiplierX = 1 - index * 0.5;
//             xPos =
//               -window.innerWidth * 0.3 * distanceMultiplierX * remainingProgress;
//             yPos =
//               -window.innerHeight *
//               0.3 *
//               distanceMultiplier *
//               remainingProgress;
//           }
//         }

//         gsap.to(card, {
//           y: yPos,
//           x: xPos,
//           duration: 0,
//           ease: "none",
        
//           });
//         });
//       },
//     });
//   });

//   return (
//     <div className="overflow-hidden">
//       <section className="hero min-h-dvh flex items-center justify-center text-xl font-semibold">
//         This is hero
//       </section>

//       <section className="sticky-cards border relative h-[50vh]">
//         {["red", "green", "blue", "yellow", "violet", "amber"].map((color, i) => (
//           <div
//             key={i}
//             className="card absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%] rounded-xl shadow-lg"
//           >
//             <div className={`card-image w-80 bg-${color}-200 h-60 rounded-lg`}></div>
//             <div className="card-content text-center font-semibold py-2">
//               Card {i + 1}
//             </div>
//           </div>
//         ))}
//       </section>
      

      
//     </div>
//   );
// };
