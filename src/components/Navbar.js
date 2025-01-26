import React from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaSuitcase, FaEnvelope, FaAward } from 'react-icons/fa'; // Added an icon for Certificates

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} className="nav-link">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="nav-link">
              <FaUser /> Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="nav-link">
              <FaSuitcase /> Projects
            </Link>
          </li>
          <li>
            <Link to="certificates" smooth={true} duration={500} className="nav-link">
              <FaAward /> Certificates
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500} className="nav-link">
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
