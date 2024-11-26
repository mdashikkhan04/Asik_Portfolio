import React, { useEffect, useState } from 'react'
import mobile_menu from "../assets/menu_icon.svg"
import cross from "../assets/cross_icon.svg"

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-3xl font-bold md:inline'>Mr Khan</div>
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</a>
        <img onClick={() => setShowMobileMenu(true)} src={mobile_menu} className='md:hidden w-7 cursor-pointer ml-auto' alt="" />
      </div>

      {/* -------- mobile-menu -------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 z-10 top-0 bottom-0 overflow-hidden bg-gray-600 transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={cross} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#home" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#about" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#service" className='px-4 py-2 rounded-full inline-block'>Services</a>
          <a onClick={() => setShowMobileMenu(false)} href="#project" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar