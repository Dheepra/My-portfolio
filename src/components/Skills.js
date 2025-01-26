import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaJava, FaDatabase, FaNodeJs, FaServer, FaDocker } from 'react-icons/fa'; // Importing icons

const Skills = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true); // Trigger animation when the section is in view
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    const currentRef = skillsRef.current; // Copy the current ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the copied ref value
      }
    };
  }, []);

  return (
    <section className="skills" ref={skillsRef}>
      <div className="container">
        <h2>My Skills</h2>
        <div className="skill">
          <p><FaReact /> React.js</p> {/* React Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '80%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaJsSquare /> JavaScript</p> {/* JavaScript Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '70%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaHtml5 /> CSS / HTML</p> {/* HTML5 Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '75%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaJava /> Java</p> {/* Java Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '65%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaDatabase /> Data Structures</p> {/* Database Icon for Data Structures */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '60%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaDatabase /> MySQL</p> {/* Database Icon for MySQL */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '75%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaNodeJs /> Node.js</p> {/* Node.js Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '70%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaServer /> Express.js</p> {/* Express.js Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '65%' : '0%' }}></div>
          </div>
        </div>
        <div className="skill">
          <p><FaDocker /> MongoDB</p> {/* MongoDB Icon */}
          <div className="skill-bar">
            <div className="fill" style={{ width: animationTriggered ? '70%' : '0%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
