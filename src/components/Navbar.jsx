import { Store } from 'lucide-react'
import React from 'react'

export const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 left-0 z-50 py-4 px-4 md:px-6 flex justify-between items-center '>
        
        <div>
            <img src='/images/logo.png' alt="logo" className='w-14 md:w-16 lg:w-18'/>
        </div>
        <div className='cursor-pointer'>
            <img src="/images/menu-icon.svg" alt="menu icon" className='size-6 ' />
        </div>
        <div className='font-bold bg-dark-blue text-milk border border-milk  px-4 lg:px-6 py-2 rounded-4xl cursor-pointer'>
            <p className='hidden md:block'>SHOP</p>
            <Store className='size-4 block md:hidden'/>
        </div>
    </nav>
  )
}
