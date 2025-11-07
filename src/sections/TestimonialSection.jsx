import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

const TestimonialSection = () => {

  useGSAP(() => {

    gsap.from(".test-heading", {
      xPercent: 100,
      duration: 2,
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        end: "top top",
        scrub: true,
        // markers: true,
      }
    })

    gsap.from(".test-heading2", {
      xPercent: -100, // 👈 now comes from left
      duration: 2,
      scrollTrigger: {
        trigger: ".test-heading2",
        start: "top 100%",
        end: "top center",
        scrub: true,
        markers: true,
      }
    })


    const cards = gsap.utils.toArray(".card");
    const rotations = [-12, 10, -5, 5, -5, -2];

  cards.forEach((card, index) => {
    gsap.set(card, {
      y: window.innerHeight,
      rotate: rotations[index],
    });
  });

  ScrollTrigger.create({
    trigger: ".sticky-cards",
    start: "top top",
    end: `+=${window.innerHeight * 8}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const totalCards = cards.length;
      const progressPerCard = 1 / totalCards;

      cards.forEach((card, index) => {
        const cardStart = index * progressPerCard;
        let cardProgress = (progress - cardStart) / progressPerCard;
        cardProgress = Math.min(Math.max(cardProgress, 0), 1);

        let yPos = window.innerHeight * (1 - cardProgress);
        let xPos = 0;

        if (cardProgress === 1 && index < totalCards - 1) {
          const remainingProgress =
            (progress - (cardStart + progressPerCard)) /
            (1 - (cardStart + progressPerCard));
          if (remainingProgress > 0) {
            const distanceMultiplier = 1 - index * 0.15;
            const distanceMultiplierX = 1 - index * 0.5;
            xPos =
              -window.innerWidth * 0.3 * distanceMultiplierX * remainingProgress;
            yPos =
              -window.innerHeight *
              0.3 *
              distanceMultiplier *
              remainingProgress;
          }
        }

        gsap.to(card, {
          y: yPos,
          x: xPos,
          duration: 0,
          ease: "none",
        
          });
        });
      },
    });

  })

  return (
    <section className='testimonial-section  bg-dark-blue relative'>
      {/* Top waves */}
      <div className='flex items-center -translate-y-1'>
        <img src="/images/wave.svg" alt="" />
        <img src="/images/wave.svg" alt="" />
        <img src="/images/wave.svg" alt="" />
      </div>

      {/* Text content */}
      <div className=' relative py-20 px-2 max-w-5xl md:max-w-6xl lg:max-w-7xl mx-auto'>
        <div className=' z-10 font-anton text-8xl md:text-[9rem] text-milk uppercase absolute top-10 flex justify-start w-full px-3 md:px-10'>
          <h1 className='test-heading'>What people are</h1>
        </div>

          
            <div className='sticky-cards relative  h-[50vh]'>
              
                <div className='card z-10 shadow-md p-4 bg-[#FFC9CA] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%]'>
                <div className=' border border-dashed text-[#D9282E] rounded-xl py-8 px-5'>

                    <p className='text-[#D9282E]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#D9282E] mt-2'>Geeta, Student</h2>
                </div>
            </div>

            <div className='card z-11 shadow-md p-4 bg-[#FFF6D2] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%]'>
                <div className=' border border-dashed text-[#E8AB09] rounded-xl py-8 px-5'>

                    <p className='text-[#E8AB09]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#E8AB09] mt-2'>Geeta, Student</h2>
                </div>
            </div>

            <div className='card z-12 shadow-md p-4 bg-[#9DE78F] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%]'>
                <div className=' border border-dashed text-[#2B8A16] rounded-xl py-8 px-5'>

                    <p className='text-[#2B8A16]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#2B8A16] mt-2'>Geeta, Student</h2>
                </div>
            </div>

            <div className='card z-13  shadow-md p-4 bg-[#92DCFF] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%] '>
                <div className=' border border-dashed text-[#287AD9] rounded-xl py-8 px-5'>

                    <p className='text-[#287AD9]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#287AD9] mt-2'>Geeta, Student</h2>
                </div>
            </div>

            <div className='card z-14 shadow-md p-4 bg-[#F6C9FF] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%]'>
                <div className=' border border-dashed text-[#9E28D9] rounded-xl py-8 px-5'>

                    <p className='text-[#9E28D9]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#9E28D9] mt-2'>Geeta, Student</h2>
                </div>
            </div>

             <div className='card z-15 shadow-md p-4 bg-[#F6C9FF] w-80 rounded-2xl absolute top-[50%] left-[50%] border translate-y-[-50%] translate-x-[-50%]'>
                <div className=' border border-dashed text-[#9E28D9] rounded-xl py-8 px-5'>

                    <p className='text-[#9E28D9]'>Enjoy the richness of pure, farm-fresh milk — crafted to bring out nature’s real taste in every sip.</p>
                    <h2 className='uppercase font-anton text-end text-[#9E28D9] mt-2'>Geeta, Student</h2>
                </div>
            </div>

            </div>

            
        <div className='font-anton text-8xl md:text-[9rem] text-milk uppercase absolute bottom-10 flex justify-end w-full px-3 md:px-10'>
          <h1 className='test-heading2'>Saying?</h1>
        </div>
      </div>

      {/* Bottom waves */}
      <div className='flex items-center rotate-180 translate-y-1'>
        <img src="/images/wave.svg" alt="" />
        <img src="/images/wave.svg" alt="" />
        <img src="/images/wave.svg" alt="" />
      </div>
    </section>
  )
}

export default TestimonialSection
