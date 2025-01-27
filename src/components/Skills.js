import React, { useEffect, useRef, useState } from 'react';
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaJava,
  FaDatabase,
  FaNodeJs,
  FaServer,
  FaDocker,
} from 'react-icons/fa';

const skillsData = [
  { id: 1, name: 'React.js', level: '80%', icon: <FaReact />, category: 'Frontend' },
  { id: 2, name: 'JavaScript', level: '70%', icon: <FaJsSquare />, category: 'Frontend' },
  { id: 3, name: 'CSS / HTML', level: '75%', icon: <FaHtml5 />, category: 'Frontend' },
  { id: 4, name: 'Java', level: '65%', icon: <FaJava />, category: 'Backend' },
  { id: 5, name: 'Data Structures', level: '60%', icon: <FaDatabase />, category: 'Backend' },
  { id: 6, name: 'MySQL', level: '75%', icon: <FaDatabase />, category: 'Database' },
  { id: 7, name: 'Node.js', level: '70%', icon: <FaNodeJs />, category: 'Backend' },
  { id: 8, name: 'Express.js', level: '65%', icon: <FaServer />, category: 'Backend' },
  { id: 9, name: 'MongoDB', level: '70%', icon: <FaDocker />, category: 'Database' },
];

const Skills = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title" style={{ color: '#2C3E50' }}>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div className="skill-item" key={skill.id}>
              <div className="skill-icon" title={`Proficiency in ${skill.name}`}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{
                    width: animationTriggered ? skill.level : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
