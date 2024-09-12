import React from 'react';
import homeImage from './images/landing-page-logo-large.png'

const Home = () => {

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
  }

  const imgStyle = {
    width: '90%',
  }

  return (
    <div style={containerStyle}>
      <img style={imgStyle} src={homeImage} alt='Logo'></img>
    </div>
  );
};

export default Home;
