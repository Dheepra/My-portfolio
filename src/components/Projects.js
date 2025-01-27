import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        <div className="project-cards">
          <motion.div
            className="project-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <h3>E-Commerce Web-Applications</h3>
            <p>This E-Commerce Web-Application uses MERN technology for "Food Selling".</p>
            <a href="https://github.com/Dheepra/E-Commerce_Website" target="_blank" className="cta-btn" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </motion.div>

          <motion.div
            className="project-card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <h3>E-Commerce Web-Application (Online Medicine Selling)</h3>
            <p>Built using the Django Framework.</p>
            <a href="https://github.com/Dheepra/python-Ecommmerce-Project" target="_blank" className="cta-btn" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
