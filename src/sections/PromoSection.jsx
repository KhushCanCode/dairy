import React from "react";

const PromoSection = () => {
  const products = [
    {
      img: "/images/lassi.png",
      title: "MORE TASTE",
      desc: "Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.",
      style: "top-0 right-10 md:right-24",
      rotate: "-rotate-3",
    },
    {
      img: "/images/ghee.png",
      title: "MORE FLAVOUR",
      desc: "Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.",
      style: "top-40 left-0 md:left-10",
      rotate: "rotate-2",
    },
    {
      img: "/images/coconut.png",
      title: "MORE FLAVOUR",
      desc: "Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.",
      style: "bottom-0 right-6 md:right-20",
      rotate: "-rotate-2",
    },
  ];

  return (
    <section className="relative w-full bg-[#fff8e6] py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        {/* Headings */}
        <div className="space-y-12 text-blue-900 font-extrabold text-3xl md:text-5xl leading-tight">
          <h2 className="uppercase">So what are you waiting for?</h2>
          <h2 className="uppercase">Complete your meal with freshness</h2>
          <h2 className="uppercase">Grab the real taste</h2>
        </div>

        {/* Floating products */}
        <div className="absolute inset-0">
          {products.map((p, i) => (
            <div
              key={i}
              className={`absolute flex flex-col items-center ${p.style} transition-transform duration-300 hover:scale-105`}
            >
              <img
                src={p.img}
                alt={p.title}
                className={`w-24 md:w-40 object-contain drop-shadow-lg ${p.rotate}`}
              />
              <div className="bg-blue-700 text-white rounded-xl mt-3 px-4 py-3 md:px-6 md:py-4 w-48 md:w-64 shadow-lg text-center">
                <h3 className="font-bold text-lg md:text-xl">{p.title}</h3>
                <p className="text-xs md:text-sm mt-1 opacity-90">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
