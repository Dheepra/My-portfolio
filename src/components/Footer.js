//  import React from 'react';
// import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 py-6 text-white">
//       <div className="container mx-auto px-4 text-center">
//         <p className="text-lg font-bold mb-4">Contact Me</p>
//         <div className="contact-info mb-4">
//           <p className="flex justify-center items-center gap-2">
//             <FaPhone />
//             <a href="tel:+9170121679" className="hover:underline">+91 9170121679</a>
//           </p>
//         </div>
//         <div className="social-icons flex justify-center gap-4">
//           <motion.a
//             href="https://github.com/Dheepra"
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             whileHover={{ scale: 1.2 }}
//             className="text-2xl hover:text-gray-400"
//           >
//             <FaGithub />
//           </motion.a>
//           <motion.a
//             href="https://linkedin.com/in/dheeraj-prajapati-6a481825b"
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}
//             whileHover={{ scale: 1.2 }}
//             className="text-2xl hover:text-gray-400"
//           >
//             <FaLinkedin />
//           </motion.a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg font-bold mb-4">Contact Me</p>
        <div className="contact-info mb-4">
          <p className="flex justify-center items-center gap-2">
            <FaPhone />
            <a href="tel:+9170121679" className="hover:underline">
              +91 9170121679
            </a>
          </p>
        </div>
        <div className="social-icons flex justify-center gap-4">
          <motion.a
            href="https://github.com/Dheepra"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-gray-400"
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
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
