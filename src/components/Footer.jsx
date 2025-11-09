import React from 'react'
import { MapPin, Mail, Phone, Building2, Briefcase, Home, ExternalLink } from 'lucide-react'

const Footer = ({ onOpenMailUsModal }) => {
  return (
    <footer className='relative pt-20 sm:pt-24 md:pt-28 pb-4 sm:pb-6 px-2 sm:px-4 overflow-visible'>
      <div className='bg-dark-blue rounded-xl md:rounded-2xl w-full relative overflow-visible'>
        {/* Logo at top */}
        <div className='absolute -top-16 sm:-top-20 md:-top-24 w-full flex justify-center z-10'>
          <img 
            src="/images/Dairy power logo.png" 
            alt="Dairy Power Logo" 
            className='w-28 sm:w-32 md:w-40 h-auto drop-shadow-lg' 
          />
        </div>

        {/* Content */}
        <div className='pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 lg:px-12'>
          {/* Header */}
          <div className='text-center mb-8 sm:mb-10 md:mb-12'>
            <h2 className='uppercase font-anton text-2xl sm:text-3xl md:text-4xl text-milk mb-2'>
              Contact Us
            </h2>
            <p className='text-milk/80 font-anuphan text-sm sm:text-base'>
              Dairy Power Ltd.
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8'>
            {/* Factory */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300'>
              <div className='flex items-start gap-3 mb-3'>
                <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0'>
                  <Building2 className='w-5 h-5 text-milk' />
                </div>
                <div>
                  <h3 className='font-anton text-milk text-lg sm:text-xl uppercase mb-2'>
                    Factory
                  </h3>
                </div>
              </div>
              <div className='space-y-2 text-milk/90 font-anuphan text-xs sm:text-sm leading-relaxed'>
                <p>Gate No. 555/1, At Songaon,</p>
                <p>Post-Saikheda, Tal. Niphad,</p>
                <p>Dist. Nashik - 422 210,</p>
                <p>Maharashtra, India.</p>
              </div>
            </div>

            {/* Corporate Office */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300'>
              <div className='flex items-start gap-3 mb-3'>
                <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0'>
                  <Briefcase className='w-5 h-5 text-milk' />
                </div>
                <div>
                  <h3 className='font-anton text-milk text-lg sm:text-xl uppercase mb-2'>
                    Corporate Office
                  </h3>
                </div>
              </div>
              <div className='space-y-2 text-milk/90 font-anuphan text-xs sm:text-sm leading-relaxed'>
                <p>301/302, Shree Ganesh Elite,</p>
                <p>Ahilyadevi Holkar Road, Opp. Suyash Hospital,</p>
                <p>Above SMBT Clinic, Mumbai Naka,</p>
                <p>Nashik - 422002.</p>
              </div>
            </div>

            {/* Reg. Office */}
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1'>
              <div className='flex items-start gap-3 mb-3'>
                <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0'>
                  <Home className='w-5 h-5 text-milk' />
                </div>
                <div>
                  <h3 className='font-anton text-milk text-lg sm:text-xl uppercase mb-2'>
                    Reg. Office
                  </h3>
                </div>
              </div>
              <div className='space-y-2 text-milk/90 font-anuphan text-xs sm:text-sm leading-relaxed'>
                <p>3, Samarth Heights,</p>
                <p>Opp. Sudarshan Lawns,</p>
                <p>Indira Nagar, Nashik - 422 009.</p>
                <p>Maharashtra, India.</p>
              </div>
            </div>
          </div>

          {/* Contact Details & Actions */}
          <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 border-t border-white/20'>
            {/* Contact Info */}
            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6'>
              <a 
                href="mailto:frontdesk@dairypower.in"
                className='flex items-center gap-2 text-milk hover:text-milk/80 transition-colors duration-300 group'
              >
                <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors'>
                  <Mail className='w-5 h-5' />
                </div>
                <div>
                  <p className='text-xs text-milk/70 font-anuphan'>Email</p>
                  <p className='text-sm sm:text-base font-anuphan'>frontdesk@dairypower.in</p>
                </div>
              </a>

              <a 
                href="tel:+918010900630"
                className='flex items-center gap-2 text-milk hover:text-milk/80 transition-colors duration-300 group'
              >
                <div className='w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors'>
                  <Phone className='w-5 h-5' />
                </div>
                <div>
                  <p className='text-xs text-milk/70 font-anuphan'>Contact</p>
                  <p className='text-sm sm:text-base font-anuphan'>+91 80109 00630</p>
                </div>
              </a>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
              {/* View on Map Button */}
              <a
                href="https://www.google.com/maps/d/u/0/viewer?mid=1sIixtdKbJhbT9C_LOIMtt1qhzv1P912E&femb=1&ll=19.99978060455547%2C73.80524615&z=12"
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 text-milk font-anton uppercase rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 text-xs sm:text-sm'
              >
                <MapPin className='w-4 h-4 sm:w-5 sm:h-5' />
                View on Map
                <ExternalLink className='w-3 h-3 sm:w-4 sm:h-4' />
              </a>

              {/* Mail Us Button */}
              <button
                onClick={onOpenMailUsModal}
                className='flex items-center gap-2 px-6 sm:px-8 py-3 bg-milk text-dark-blue font-anton uppercase rounded-lg hover:bg-milk/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base'
              >
                <Mail className='w-4 h-4 sm:w-5 sm:h-5' />
                Mail Us
              </button>
            </div>
            </div>

          {/* Social Media Icons */}
          <div className='mt-6 sm:mt-8 pt-6 border-t border-white/20'>
            <div className='flex flex-col items-center gap-4'>
              <p className='text-milk/80 font-anuphan text-sm sm:text-base uppercase tracking-wide'>
                Follow Us
              </p>
              <div className='flex items-center justify-center gap-4 sm:gap-6'>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCsKmSDr1xeazwpEijUipSqA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                  aria-label="YouTube"
                >
                  <svg className='w-6 h-6 sm:w-7 sm:h-7 text-milk group-hover:text-milk' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/dairypowerltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                  aria-label="Instagram"
                >
                  <svg className='w-6 h-6 sm:w-7 sm:h-7 text-milk group-hover:text-milk' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/dairypowerindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                  aria-label="Facebook"
                >
                  <svg className='w-6 h-6 sm:w-7 sm:h-7 text-milk group-hover:text-milk' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            </div>
            
          {/* Copyright */}
          <div className='mt-6 sm:mt-8 pt-4 border-t border-white/10 text-center'>
            <p className='text-milk/60 font-anuphan text-xs sm:text-sm'>
              © {new Date().getFullYear()} Dairy Power Ltd. All rights reserved.
            </p>
          </div>
        </div>
    </div>
    </footer>
  )
}

export default Footer