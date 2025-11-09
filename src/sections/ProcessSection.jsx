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
    tl.to(".van", { xPercent: 1500 }, 0);

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
            <div className='build-img h-96 w-96 rounded-xl relative z-20 left-20    flex justify-center '>
              <div className='rounded-xl overflow-hidden'><img src="/images/companyimg2.png" alt="" className='w-full h-full object-cover' /></div>
              
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
        <div className='slide slide2 min-h-dvh flex items-center justify-center  shrink-0 w-full'>
          <div className=' w-[30%] flex flex-col  gap-10  border-milk '>
            <p className='font-anuphan '>
              Working on the standard of Clean Milk Production, there are more  than 125 Milk Collection Centers are in operation in the  peripheri of 20-30km from our factory
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Collection</h1>

            <div className='flex items-center justify-center'>
               <img src="/images/bottles.png" alt="" className='size-40' />
            </div>
             
            
          </div>
          <div className='overflow-hidden w-96 rounded-xl'>
            <img src="/images/story1.png" alt="" className='w-full h-full object-cover' />
          </div>

        </div>

        {/* SLIDE 3 */}
        <div className='slide slide3 min-h-dvh flex items-center gap-[10vh] shrink-0  w-full '>
          
          <div className='w-96 h-80 overflow-hidden rounded-xl'>
            <img src="/images/bentoimg6.png" alt="" className='rounded-xl w-full h-full object-cover'/>
          </div>

          <div className='w-[30%]  flex flex-col  gap-10'>
            <p className='font-anuphan'>
              Our BMCs are set up to ensure the quality and freshness of the raw material from the distant areas. After the raw material is chilled immediately at our BMCs, it is transported to factory through our insulated tankers.
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Transporting</h1>

             <div className='flex items-center justify-center'>
               <img src="/images/dahi.png" alt="" className='size-40 -rotate-20' />
            </div>
          </div>
          <div className='overflow-hidden rounded-xl h-80 w-96'>
            <img src="/images/storyimg2.png" alt="" />
          </div>

        </div>

         {/* SLIDE 4 */}
        <div className='slide slide4 min-h-dvh flex items-center gap-[10vh] shrink-0  w-full '>
          
          <div className='w-96 h-80 overflow-hidden rounded-xl'>
            <img src="/images/bentoimg2.png" alt="" className='rounded-xl w-full h-full object-cover'/>
          </div>

          <div className='w-[30%]  flex flex-col  gap-10'>
            <p className='font-anuphan'>
              To ensure milk safe and palatable, milk processing is done viz Standardisation, Seperation / Clarification and Pasteurization. It also enhance the keeping quality of milk and enrich natural pleasent flavor. 
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Quality Control</h1>

             <div className='flex items-center justify-center'>
               <img src="/images/ghee.png" alt="" className='size-40 rotate-20' />
            </div>
          </div>
          <div className='overflow-hidden rounded-xl h-80 w-96'>
            <img src="/images/story3.png" alt="" />
          </div>

        </div>

         {/* SLIDE 5 */}
        <div className='slide slide5 min-h-dvh flex items-center gap-[10vh] shrink-0  w-full '>
          
          <div className='w-96 h-80 overflow-hidden rounded-xl'>
            <img src="/images/bentoimg1.png" alt="" className='rounded-xl w-full h-full object-cover'/>
          </div>

          <div className='w-[30%]  flex flex-col  gap-10'>
            <p className='font-anuphan'>
              At our well equiped laboratory, thorough analysis of milk and milk products is done before packing by well qualified, experienced and trained staff to ensure all the quality parameters and standards set there of.
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Laboratory Testing</h1>

             <div className='flex items-center justify-center'>
               <img src="/images/lassi.png" alt="" className='size-40' />
            </div>
          </div>
          <div className='overflow-hidden rounded-xl h-80 w-96'>
            <img src="/images/story5.png" alt="" />
          </div>

        </div>

         {/* SLIDE 6 */}
        <div className='slide slide6 min-h-dvh flex items-center gap-[10vh] shrink-0  w-full '>
          
          <div className='w-96 h-80 overflow-hidden rounded-xl'>
            <img src="/images/bentoimg5.png" alt="" className='rounded-xl w-full h-full object-cover'/>
          </div>

          <div className='w-[30%]  flex flex-col  gap-10'>
            <p className='font-anuphan'>
             Milk and milk products are packed online in controlled conditions through automated packing machines viz FFS machins for milk packing, Automated machines for Curd and Ghee packing, etc.
            </p>
            <h1 className='bg-milk text-2xl text-dark-blue font-anton p-2 w-fit rounded-xl uppercase'>Packing</h1>

             <div className='flex items-center justify-center'>
               <img src="/images/coconut.png" alt="" className='size-40 rotate-10' />
            </div>
          </div>
          <div className='overflow-hidden rounded-xl h-80 w-96'>
            <img src="/images/story4.png" alt="" />
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
