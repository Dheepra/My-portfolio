import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-teal-600 to-blue-800 py-10">
      <div className="container mx-auto px-4 text-center text-white">
        {/* Contact Information */}
        <motion.div
          className="contact-info mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg mb-4">
            <FaPhone size={24} className="inline-block mr-2" />
            <a href="tel:+9170121679" className="hover:underline text-yellow-400">
              +91 9170121679
            </a>
          </p>
          <p className="text-lg">
            <FaEnvelope size={24} className="inline-block mr-2" />
            <a href="mailto:dmprajapati98@gmail.com" className="hover:underline text-yellow-400">
              dmprajapati98@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Social Icons with Space Between */}
        <div className="social-icons flex justify-center space-x-8 mb-6">
          <motion.a
            href="https://github.com/Dheepra"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={32} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/dheeraj-prajapati-6a481825b"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{
              scale: 1.3,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={32} />
          </motion.a>
        </div>

        {/* Footer Bio or Message */}
        <motion.p
          className="footer-message text-sm mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          I’m passionate about creating impactful web applications. Let’s build something amazing together!
        </motion.p>

        {/* Footer Bottom Text */}
        <motion.p
          className="footer-bottom-text text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          &copy; {new Date().getFullYear()} Dheeraj Prajapati. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
