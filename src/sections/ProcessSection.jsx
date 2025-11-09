import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const ProcessSection = () => {
  useGSAP(() => {
    const slides = gsap.utils.toArray(".slide");

    gsap.set(".slide1" , {xPercent:20})
    // set slides position for horizontal layout
    // slides.forEach((slide, i) => {
    //   if (i !== 0) gsap.set(slide, { xPercent: 20 });
    // });

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

    
  });

  return (
    <div className='bg-dark-blue min-h-dvh process-section text-milk overflow-hidden'>
      <div className='wrapper flex relative'>
        {/* SLIDE 1 */}
        <div className='slide slide1 min-h-dvh flex items-center justify-center shrink-0 w-full'>
          <div className='relative'>
            <h1 className='absolute z-10 -top-20 text-white text-8xl font-bold'>How it's</h1>
            <div className='h-96 w-96 rounded-xl relative z-20 left-20 border flex justify-center border-milk'>
              <div className='bg-dark-blue border rounded-lg absolute bottom-2 w-[90%] p-2 '>
                <h1 className='text-lg'>Shayam Lal</h1>
                <p className='font-anuphan'>CEO, Founder</p>
              </div>
            </div>
            <h1 className='absolute z-30 bottom-0 -right-60 text-white text-8xl font-bold'>made?</h1>
          </div>
          <div className='flex flex-col items-center px-[30vh] gap-10'>
            <h1 className='text-4xl text-center'>
              Dairy Power is a creamy blend of purity and protein that keeps you strong all day
            </h1>
            <img src="/images/dahi.png" alt="" className='rotate-10' />
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className='slide slide2 min-h-dvh flex items-center justify-center shrink-0 w-full'>
          <div className=' w-[50%] flex flex-col mb-[50vh] gap-4'>
            <p className='font-anuphan '>
              Working on the standard of Clean Milk Production, there are more <br /> than 125 Milk Collection Centers are in operation in the <br /> peripheri of 20-30km from our factory
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Collection</h1>
          </div>
          <div className='overflow-hidden rounded-xl'>
            <img src="/images/bentoimg3.png" alt="" />
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
        <img src="/images/van.png" alt="" className='absolute -top-4 van' />
        <div className='w-24 h-24 rounded-full bg-milk'></div>
        <div className='border absolute w-screen top-1/2'></div>
      </div>
    </div>
  )
}

export default ProcessSection
