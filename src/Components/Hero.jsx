import React from 'react'
import HeroImage from '../assets/hero-image.png'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={HeroImage} alt=""
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Asikur Rahman</span>
          , Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
          I specialize in Crafting responsive, modern, and dynamic web interfaces.
        </p>
        <div className='mt-8 space-x-4'>
          <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</a>
          <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero