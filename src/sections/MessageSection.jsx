import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import gsapWithCSS from 'gsap/all'
import { SplitText } from 'gsap/all'
import React from 'react'

export const MessageSection = () => {

    useGSAP(()=>{
        const msg1Split = SplitText.create(".first-message", {type: "words"} );
        const msg2Split = SplitText.create(".second-message", {type: "words"} );

        gsap.to(msg1Split.words, {
            color: "#faeade",
            ease:"power1.in",
            stagger:1,
            scrollTrigger:{
                trigger: ".message-content",
                start: "top center",
                end:"50% center",
                scrub:true,
            }

        })
        gsap.to(msg2Split.words, {
            color: "#faeade",
            ease:"power1.in",
            stagger:1,
            scrollTrigger:{
                trigger: ".second-message",
                start: "top center",
                end:"bottom center",
                scrub:true,
            }

        })

        const revealTl = gsap.timeline({
            delay:.2,
            scrollTrigger:{
                trigger: ".msg-text-scroll",
                start:" center center",
            },
           
        })
         revealTl.to(".msg-text-scroll", {
                duration:1,
                clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "circ.inOut"
            })

            

    })
  return (
    <section className="message-content  bg-dark-blue min-h-dvh overflow-hidden flex justify-center items-center relative z-20">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper text-5xl md:text-8xl xl:text-[8rem]  uppercase flex flex-col justify-center items-center gap-14 md:gap-24 tracking-[-.4vw]">
            <h1 className="first-message max-w-xs md:max-w-2xl xl:max-w-4xl font-bold text-[#faeade10] text-center ">Taste the purity within and</h1>

            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-text-scroll  rotate-3  -translate-y-5 md:-translate-y-8 lg:translate-y-0 absolute z-10 "
            >
              <div className="bg-milk py-3 px-5 border-[.8vw] border-dark-blue lg:rounded-4xl rounded-2xl">
                <h2 className="text-dark-blue font-anton font-base tracking-wide ">Power Up</h2>
              </div>
            </div>

            <h1 className="second-message max-w-xs md:max-w-4xl xl:max-w-7xl font-bold text-[#faeade10] text-center">
              your day with natural strength and freshness
            </h1>
          </div>

        </div>
      </div>
    </section>
  )
}
