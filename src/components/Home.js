import React from 'react';
import homeImage from './images/LandingPageImage.png'

const Home = () => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    width: '100vw',  // Full viewport width
    backgroundImage: `url(${homeImage})`, // Set the background image
    backgroundSize: 'cover', // Make sure the image covers the entire area
    backgroundPosition: 'center', // Center the image
    backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
    margin: 0,
    padding: 0,
  };



  return (
    <div style={sectionStyle}>
    </div>
  );
};

export default Home;
