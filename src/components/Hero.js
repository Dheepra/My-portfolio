import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Dheeraj Prajapati!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typewriter
            words={['Web Developer', 'React JS', 'Problem Solver', 'Software Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.p>
        <div className="cta-container">
        <motion.button
  className="cta-btn"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  onClick={() => window.location = 'mailto:dmprajapati98@gmail.com?subject=Job Inquiry&body=Hi, I would like to discuss opportunities with you.'}
>
  Contact Me
</motion.button>

          <motion.a
            href="/cv.pdf"  // The correct path to your CV file in the public folder
            download="Dheeraj_Prajapati_CV.pdf" // Optional: specify the filename for the downloaded file
            className="cta-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
