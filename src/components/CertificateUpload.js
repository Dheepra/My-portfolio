import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { id: 1, name: 'MERN FULL STACK', image: '/images/mern.jpg' },
  { id: 3, name: 'Django FrameWork', image: '/images/django.jpg' },
  { id: 4, name: 'IIT Kanpur C Language', image: '/images/iit.jpg' },
  { id: 5, name: 'Basics Java', image: '/images/java.jpg' },
  { id: 6, name: 'Data Structure With Java', image: '/images/data stsurcture.jpg' },
  { id: 2, name: 'Best Performance in MERN Full Stack ', image: '/images/best performance.jpg' },
];

const CertificateGrid = () => {
  return (
    <section className="certificate-upload" id="certificates">
      <div className="container">
        <h2>Your Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificate-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={cert.image} alt={cert.name} className="certificate-image" />
              <p>{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGrid;
