import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { id: 1, name: 'MERN FULL STACK', image: '/images/mern.jpg' },
  { id: 3, name: 'Django Framework', image: '/images/django.jpg' },
  { id: 4, name: 'IIT Kanpur C Language', image: '/images/iit.jpg' },
  { id: 5, name: 'Basics Java', image: '/images/java.jpg' },
  { id: 6, name: 'Data Structure With Java', image: '/images/data stsurcture.jpg' },
  { id: 2, name: 'Best Performance in MERN Full Stack', image: '/images/best performance.jpg' },
];

const CertificateGrid = () => {
  return (
    <section className="certificate-upload" id="certificates">
      <div className="container">
        <h2 className="section-title" style={{ color: '#2C3E50' }}>Your Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificate-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * cert.id }}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 },
              }}
            >
              <img src={cert.image} alt={cert.name} className="certificate-image" />
              <p className="certificate-name">{cert.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGrid;
