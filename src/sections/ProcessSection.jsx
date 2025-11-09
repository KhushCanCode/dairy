import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const ProcessSection = () => {
  useGSAP(() => {
    
    const slides = gsap.utils.toArray(".slide");

    gsap.set(".slide1" , {xPercent:20})

    // horizontal scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".process-section",
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${slides.length * 100}%`,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    // animate the slides horizontally
    tl.to(slides, {
      xPercent: -100 * (slides.length - 1),
    });

     // van movement
    tl.to(".van", { xPercent: 900 }, 0);

    gsap.from(".build-img", {
      x:100,
     
      scrollTrigger:{
        trigger:".process-section",
        start: "top top",
         scrub:true,
      }
    })

    gsap.from(".paneer",{
      scale:0,
      
      scrollTrigger:{
        trigger:".process-section",
        start:"top center",
        // scrub:true,
        markers:true
      }
    })

  });

  return (
    <div className='bg-dark-blue min-h-dvh process-section text-milk overflow-hidden'>
      <div className='wrapper flex relative'>
        {/* SLIDE 1 */}
        <div className='slide slide1 min-h-dvh relative flex items-center justify-center shrink-0 w-full'>
         
         <img src="/images/panner.png" alt="" className='paneer absolute top-20'/>
          {/* Image  */}
          <div className='relative'>
            <h1 className='absolute z-10 -top-20 text-white text-8xl font-bold'>How it's</h1>
            <div className='build-img h-96 w-96 rounded-xl relative z-20 left-20  bg-[url("/images/building.png")] flex justify-center '>
              <div className='bg-dark-blue  rounded-lg absolute bottom-2 w-[90%] p-2 '>
                <h1 className='text-lg'>Dairy Power Ltd.</h1>
                <p className='font-anuphan'>Dist. Nashik, Maharashtra, India.</p>
              </div>
            </div>
            <h1 className='absolute z-30 -bottom-2 -right-60 text-white text-8xl font-bold'>made?</h1>
          </div>

          {/* Content */}
          <div className='flex flex-col items-center pl-[40vh] pr-[20vh]  gap-10'>
            <h1 className='text-3xl text-center'>
              Dairy Power is a creamy <br /> blend of purity and protein <br />that keeps you strong all day
            </h1>
          </div>

          <div className='overflow-hidden rounded-xl prod-img'>
            <img src="/images/bentoimg4.png" alt="" />
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className='slide slide2 min-h-dvh flex items-center justify-center shrink-0 w-full'>
          <div className=' w-[40%] flex flex-col mb-[50vh] gap-4  border-milk'>
            <p className='font-anuphan '>
              Working on the standard of Clean Milk Production, there are more <br /> than 125 Milk Collection Centers are in operation in the <br /> peripheri of 20-30km from our factory
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Collection</h1>
          </div>
          <div className='overflow-hidden w-96 rounded-xl'>
            <img src="/images/bentoimg3.png" alt="" className='w-full h-full object-cover' />
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className='slide slide3 min-h-dvh flex items-center justify-center shrink-0 w-full'>
          <div className=' w-[50%] flex flex-col mb-[50vh] gap-4'>
            <p className='font-anuphan'>
              Working on the standard of Clean Milk Production, there are more <br /> than 125 Milk Collection Centers are in operation <br /> in the peripheri of 20-30km from our factory
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Processing</h1>
          </div>
          <div className='overflow-hidden rounded-xl'>
            <img src="/images/bentoimg3.png" alt="" />
          </div>
        </div>
      </div>

      {/* Optional bottom van */}
      <div className='absolute bottom-[10vh] ml-[20vh]'>
        <img src="/images/van.png" alt="" className='absolute z-20 -top-4 van' />
        <div className='w-24 h-24 rounded-full flex items-center justify-center bg-milk'>
          <div className='font-bold size-20 bg-dark-blue p-3 relative z-10 rounded-full text-center'>Keep <br /> Scrolling</div>
        </div>
        <div className='border absolute w-screen top-1/2'></div>
      </div>
    </div>
  )
}

export default ProcessSection
