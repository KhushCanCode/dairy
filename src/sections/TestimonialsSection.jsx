import React from 'react'
import { cards } from '../constants/cards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TestimonialsSection = () => {


   useGSAP(()=>{
   

    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".testimonials-section",
            start:"top bottom",
            end:"200% top",
            scrub: true,
        }
    });

    tl.to(".testimonials-section .first-title",{
        xPercent:50,
    })
      .to(".testimonials-section .sec-title",{
        xPercent:20,
    }, "<")
      .to(".testimonials-section .third-title",{
        xPercent:-70,
    }, "<");

    const pinTl = gsap.timeline({
        scrollTrigger:{
            trigger:".testimonials-section",
            start:"10% top",
            end: "200% top",
            scrub: 1.5,
            pin: true,

        }
        
    })

    pinTl.from(".vd-card",{
        yPercent:300,
        stagger: 0.2,
        ease: "power1,inOut",
    })

   })
  return (
    <section className='testimonials-section bg-dark-blue relative w-full lg:pt-0 pt-[20vh]  h-[120dvh]'>
        {/* Top waves */}
       {/* <div className='flex items-center -translate-y-1'>
         <img src="/images/wave.svg" alt="" />
         <img src="/images/wave.svg" alt="" />
         <img src="/images/wave.svg" alt="" />
       </div> */}

        <div className='absolute size-full flex flex-col items-center pt-[10vw] md:pt-[5vw]'>
            <h1 className='text-milk font-anton first-title uppercase text-[14.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] '>What are</h1>
            <h1 className='text-milk font-anton  sec-title uppercase text-[14.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw]'>People</h1>
            <h1 className='text-milk  font-anton third-title uppercase text-[14.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] '>Saying? </h1>
        </div>

        <div className='pin-box '>
            {
                cards.map((card, index) => (
                <div
                key={index}
                className={`${card.translation} ${card.rotation} vd-card `}
                style={{
                    color: card.color,
                    borderColor: card.color,
                    backgroundColor: card.bg,
                   
                }}
                >
                <div
                    className="border border-dashed rounded-xl p-8"
                    style={{ borderColor: card.color }}
                >
                    <p>{card.text}</p>
                    <h2
                    className="uppercase font-anton text-end mt-2"
                    style={{ color: card.color }}
                    >
                    {card.name}
                    </h2>
                </div>
                </div>
            ))}
            
        </div>

         {/* Bottom waves */}
       {/* <div className='flex items-center rotate-180 translate-y-1'>
         <img src="/images/wave.svg" alt="" />
         <img src="/images/wave.svg" alt="" />
         <img src="/images/wave.svg" alt="" />
       </div> */}
    </section>
  )
}

export default TestimonialsSection