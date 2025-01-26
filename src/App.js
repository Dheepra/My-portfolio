
import React from 'react';
import './styles/global.css'; // Import global styles
import Navbar from './components/Navbar'; // Import Navbar component
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CertificateUpload from './components/CertificateUpload'; // Import CertificateUpload component
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home" aria-label="Hero Section">
          <Hero />
        </section>
        <section id="skills" aria-label="Skills Section">
          <Skills />
        </section>
        <section id="projects" aria-label="Projects Section">
          <Projects />
        </section>
        <section id="certificates" aria-label="Certificates Section">
          <CertificateUpload />
        </section>
      </main>
      <footer id="footer" aria-label="Footer Section">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

