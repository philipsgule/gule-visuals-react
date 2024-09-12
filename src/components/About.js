import React from 'react';

const About = () => {
    const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',  // Horizontally center the content
    height: 'calc(100vh - 60px)',  // Full height minus the height of the tab bar
    paddingTop: '60px',            // Padding to prevent overlap with the tab bar
  };

    

  return (
    <div style={sectionStyle}>
      <h1>About</h1>
    </div>
  );
};

export default About;
