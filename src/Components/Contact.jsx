import React from 'react'
import { toast } from 'react-toastify';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5c6a8cb8-e3b6-45a9-b87e-5cad202c076d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                ashik.est04@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+880 1758 792678</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>North Badda, Dhaka</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={onSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input type="text"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You Name' name='Name' required />
              </div>
              <div>
                <label htmlFor="emial" className='block mb-2'>Email</label>
                <input type="email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You Email' name='Email' required />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea name='Message'
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  rows="5"
                  placeholder='Enter You Message' required />
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>{result ? result : "Send Message"}</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact