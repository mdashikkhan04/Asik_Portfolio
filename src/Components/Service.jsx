import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Website Design Implementation",
    description: "Transforming design mockups into functional, responsive web pages using HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    title: "Responsive Web Development",
    description: "Ensuring websites are mobile-friendly and compatible across devices.",
  },
  {
    id: 3,
    title: "Web Application Development",
    description: "Building interactive user interfaces using frameworks like React.",
  },
  {
    id: 4,
    title: "UI/UX Optimization",
    description: "Enhancing user experience through animations, accessibility features, and performance tuning.",
  },
  {
    id: 5,
    title: "Website Maintenance",
    description: "Regular updates, bug fixes, and performance improvements for existing websites.",
  },
  {
    id: 6,
    title: "Integration with APIs",
    description: "Fetching and displaying data dynamically from backend services.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
