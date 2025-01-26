import React from 'react';

const CVSection = () => {
  const sectionStyle = {
    padding: '40px 20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#00bcd4',
    padding: '10px 20px',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#008c99'
  };

  return (
    <div style={sectionStyle}>
      <h2>My Curriculum Vitae</h2>
      <p>Download my CV and learn more about my skills and experience.</p>
      <button style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
        Download CV
      </button>
    </div>
  );
};

export default CVSection;
