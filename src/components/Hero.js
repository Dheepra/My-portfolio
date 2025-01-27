import React from 'react';
//import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-title"
        >
          Hi, I'm Dheeraj Prajapati | React Developer & Problem Solver
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-description"
        >
          Passionate about building scalable and performant web applications with React.js. Let's create something amazing together!
        </motion.p>

        {/* Email with Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="email-contact"
        >
          Email: <a href="mailto:dmprajapati98@gmail.com">dmprajapati98@gmail.com</a>
        </motion.p>

        <div className="cta-container">
          <motion.button
            className="cta-btn"
            whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 119, 182, 0.6)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={() =>
              window.location = 'mailto:dmprajapati98@gmail.com?subject=Job Inquiry&body=Hi, I would like to discuss opportunities with you.'
            }
          >
            Contact Me
          </motion.button>
          
          <motion.a
            href="/cv.pdf"
            download="Dheeraj_Prajapati_CV.pdf"
            className="cta-btn"
            whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 119, 182, 0.6)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
