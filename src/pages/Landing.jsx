import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../sections/HeroSection'
import { MessageSection } from '../sections/MessageSection'
import ProductSection from '../sections/ProductSection'
import { TagScroll } from '../sections/TagScroll'
import ProcessSection from '../sections/ProcessSection'
import QualitySection from '../sections/QualitySection'
import PromoSection from '../sections/PromoSection'
import TestimonialsSection from '../sections/TestimonialsSection'

export const Landing = () => {
  return (
    <div>
      <HeroSection/>
      <MessageSection/>
      <ProductSection/>
      {/* <PopUp/> */}
      <ProcessSection/>
      <TagScroll/>
      <PromoSection/>
      <TestimonialsSection/>
      <QualitySection/>
    </div>
  )
}
