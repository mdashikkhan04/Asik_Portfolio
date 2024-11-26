import React from "react";
import news_app from "../assets/project_img-1.png";
import real_estate_site from "../assets/project_img-2.png";
import weather_app from "../assets/project_img-3.png";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "News App",
    technologies: "React with API",
    image: news_app,
    github: "https://github.com/mdashikkhan04",
  },
  {
    id: 2,
    name: "Real Estate Website",
    technologies: "React & Tailwind",
    image: real_estate_site,
    github: "https://github.com/mdashikkhan04",
  },
  {
    id: 3,
    name: "Weather App",
    technologies: "JavaScript",
    image: weather_app,
    github: "https://github.com/mdashikkhan04",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
