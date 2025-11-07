import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(SplitText);


export const HeroSection = () => {

useGSAP(() => {
  document.fonts.ready.then(() => {
    const titleSplit = new SplitText(".hero-title", { type: "chars" });

    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
    .to(".hero-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }, "-=0.2") 
    .from(titleSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
    }, "-=0.5"); 
  });

  const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".hero-container",
        start: "1% top",
        end:"bottom top",
        scrub:true,
    }
  })

  tl2.to(".hero-container",{
    rotate:7,
    scale:0.9,
    yPercent:30,
    ease:"power1.inOut"
  })
});


  return (
    <section className='bg-gray-950'>
        <div className='hero-container relative  bg-milk w-screen h-dvh overflow-hidden'>
        <div className='hero-content opacity-0 relative z-10 w-full h-full flex flex-col justify-center items-center translate-y-10'>
            <div className='overflow-hidden'>
                <h1 className='hero-title text-dark-blue font-bold uppercase  xl:text-[7rem]  lg:text-[6rem] md:text-[5.5rem] text-[3.3rem] -mb-2  md:-mb-6 '>Real Taste With</h1>
            </div>
            <div className='hero-text-scroll -rotate-3 mb-8  lg:rounded-4xl rounded-2xl '
            style={({
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
            })}
            >
                <div className='hero-subtitle bg-dark-blue border-[.8vw] border-milk lg:rounded-4xl rounded-2xl '>
                    <h1 className='font-anton uppercase xl:text-[7rem] lg:text-[6rem] md:text-[5.5rem] text-[3.3rem] text-milk px-3'>Real Power</h1>
                </div>
            </div>

            <h2 className='text-center text-sm md:text-base max-w-lg px-5 font-anuphan'>
                Experience the richness of pure, farm-fresh dairy made with love and honesty. Every sip and every bite bring you the real taste of nature, filled with nutrition, freshness, and strength to power your day.
            </h2>
            
            <div className='mt-8 p-1 md:p-2 border rounded-full border-dark-blue border-dashed'>
                <div className=' text-milk bg-dark-blue uppercase font-bold text-lg rounded-full py-2 px-5 md:px-10 cursor-pointer'>
                Shop All
            </div>
            </div>
            
        </div>
        </div>
    </section>
  )
}
