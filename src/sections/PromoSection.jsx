import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Smile } from "lucide-react";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const PromoSection = () => {
  useGSAP(() => {
    // Scroll animations for titles and cards
    gsap.from(".firsttitle", {
      xPercent: 50,
      scrollTrigger: {
        trigger: ".firstdiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    gsap.from(".smile-card1", {
      y: 100,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".firstdiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    gsap.from(".secondtitle", {
      xPercent: -50,
      scrollTrigger: {
        trigger: ".seconddiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    gsap.from(".smile-card2", {
      y: 100,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".seconddiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    gsap.from(".thirdtitle", {
      xPercent: 50,
      scrollTrigger: {
        trigger: ".thirddiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    gsap.from(".smile-card3", {
      y: 100,
      opacity: 0,
      scale: 0.5,
      scrollTrigger: {
        trigger: ".thirddiv",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    });

    // 🧊 Infinite floating animations
    gsap.to(".img1", {
      y: 25,
      // rotation: 2,
      duration: 3.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".seconddiv img", {
      y: -30,
      // rotation: -3,
      duration: 4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".thirddiv img", {
      y: 20,
      // rotation: 3,
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });

  return (
    <section className="promo-section relative w-full min-h-dvh bg-milk pt-20 pb-72 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* FIRST DIV */}
        <div className="firstdiv relative">
          <h1 className="firsttitle text-4xl md:text-6xl lg:text-8xl font-anton uppercase">
            What are you <br /> waiting for?
          </h1>

          <img
            src="/images/dahi.png"
            alt=""
            className="img1 hidden lg:block absolute top-0 left-50 -rotate-10 transform translate-x-1/2"
          />

          <div className="smile-card1 bg-dark-blue text-milk rounded-xl flex flex-col p-5 md:p-7 lg:p-10 items-center justify-center absolute top-40 md:top-20 right-4 md:right-12 rotate-6">
            <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
              <Smile className="text-dark-blue size-24" />
            </div>
            <h1 className="font-anton text-center text-3xl md:text-5xl uppercase mt-10">
              More <br /> Taste
            </h1>
            <p className="font-anuphan mt-4 text-center">
              Enjoy the richness of pure, farm-fresh milk <br /> crafted to
              bring out nature’s real taste in every sip.
            </p>
          </div>
        </div>

        {/* SECOND DIV */}
        <div className="seconddiv relative mt-[70vh] md:mt-[50vh]">
          <img
            src="/images/ghee.png"
            alt=""
            className="absolute hidden lg:block z-20 -top-40 left-0 rotate-10 transform w-80"
          />

         <div className="smile-card2 bg-dark-blue text-milk rounded-xl flex flex-col p-5 md:p-10 items-center justify-center absolute top-40 md:top-20 left-4 md:left-12 -rotate-6">
            <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
              <Smile className="text-dark-blue size-24" />
            </div>
            <h1 className="font-anton text-center text-3xl md:text-5xl uppercase mt-10">
              More <br /> Taste
            </h1>
            <p className="font-anuphan mt-4 text-center">
              Enjoy the richness of pure, farm-fresh milk <br /> crafted to
              bring out nature’s real taste in every sip.
            </p>
          </div>

          <h1 className="secondtitle text-4xl md:text-6xl lg:text-8xl font-anton uppercase text-end">
            Complete your meal <br /> with freshness
          </h1>
        </div>

        {/* THIRD DIV */}
        <div className="thirddiv relative  mt-[60vh] md:mt-[50vh]">
          <h1 className="thirdtitle text-4xl md:text-6xl lg:text-8xl font-anton uppercase">
            Grab the <br /> real taste
          </h1>

          <img
            src="/images/coconut.png"
            alt=""
            className="absolute hidden lg:block -top-80 right-50 -rotate-10"
          />

          <div className="smile-card3  bg-dark-blue text-milk rounded-xl flex flex-col p-5 md:p-10 items-center justify-center absolute top-40 md:top-20 right-4 md:right-12 rotate-6">
            <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
              <Smile className="text-dark-blue size-24" />
            </div>
            <h1 className="font-anton text-center text-3xl md:text-5xl uppercase mt-10">
              More <br /> Taste
            </h1>
            <p className="font-anuphan mt-4 text-center">
              Enjoy the richness of pure, farm-fresh milk <br /> crafted to
              bring out nature’s real taste in every sip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
