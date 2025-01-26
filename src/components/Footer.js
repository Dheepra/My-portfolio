import React from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'; // Added FaPhone for phone icon
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>Contact Me</p>
        <div className="contact-info">
          <p>
            <FaPhone /> {/* Added phone icon */}
             <a href="tel:+9170121679">+91 9170121679</a> {/* Mobile Number */}
          </p>
        </div>
        <div className="social-icons">
          <motion.a
            href="https://github.com/Dheepra"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/dheeraj-prajapati-6a481825b"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
