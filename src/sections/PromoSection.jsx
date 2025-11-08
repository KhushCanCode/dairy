import { Smile } from "lucide-react";
import React from "react";

const PromoSection = () => {
 
  return (
    <section className="relative w-full min-h-dvh  bg-milk py-16 md:py-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">

        <div className="relative ">
          <h1 className="text-8xl font-anton uppercase ">What are you <br /> waiting for?</h1>

        <img src="/images/dahi.png" alt="" className="absolute top-0 left-50 -rotate-10 transform translate-x-1/2" />

        <div className="smile-card bg-dark-blue text-milk  rounded-xl flex flex-col p-10 items-center justify-center absolute top-10 md:top-20 right-4 md:right-12 rotate-6">
          <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
            <Smile className="text-dark-blue size-24"/>
          </div>
          <h1 className="font-anton text-center text-5xl uppercase mt-10">More <br /> Taste</h1>
          <p className="font-anuphan mt-4 text-center">Enjoy the richness of pure, farm-fresh milk <br /> crafted to bring out nature’s real taste in every sip.</p>
        </div>
        </div>

        <div className="relative mt-[50vh]">
          <img src="/images/ghee.png" alt=""  className="absolute z-20 -top-40 left-0 rotate-10 transform  w-80 "/>

<div className="smile-card bg-dark-blue text-milk  rounded-xl flex flex-col p-10 items-center justify-center absolute z-20 top-10 md:top-[20vh] left-10  -rotate-10">
          <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
            <Smile className="text-dark-blue size-24"/>
          </div>
          <h1 className="font-anton text-center text-5xl uppercase mt-10">More <br /> Taste</h1>
          <p className="font-anuphan mt-4 text-center">Enjoy the richness of pure, farm-fresh milk <br /> crafted to bring out nature’s real taste in every sip.</p>
        </div>

          <h1 className="text-8xl font-anton uppercase text-end">Complete your meal <br /> with freshness</h1>

        

        
        </div>

        <div className="relative mt-[50vh]">
          <h1 className="text-8xl font-anton uppercase ">Grab the <br /> real taste</h1>

        <img src="/images/coconut.png" alt="" className="absolute -top-80 right-50 -rotate-10 "/>

        <div className="smile-card bg-dark-blue text-milk  rounded-xl flex flex-col p-10 items-center justify-center absolute top-10 md:top-20 right-4 md:right-12 rotate-6">
          <div className="absolute -top-35 translate-y-1/2 w-32 h-32 rounded-full bg-milk flex items-center justify-center">
            <Smile className="text-dark-blue size-24"/>
          </div>
          <h1 className="font-anton text-center text-5xl uppercase mt-10">More <br /> Taste</h1>
          <p className="font-anuphan mt-4 text-center">Enjoy the richness of pure, farm-fresh milk <br /> crafted to bring out nature’s real taste in every sip.</p>
        </div>
        </div>
        


      </div>
    </section>
  );
};

export default PromoSection;
