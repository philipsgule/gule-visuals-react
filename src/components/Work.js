import React from 'react';
import ResponsiveIframe from './ResponsiveIframe';
import '../App.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="custom-arrow next-arrow"
      onClick={onClick}
    >
      &gt;
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="custom-arrow prev-arrow"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};


const App = () => {
  // Slick carousel settings with custom arrows
  const settings = {
    dots: false,         // Shows navigation dots at the bottom
    infinite: true,     // Allows infinite looping of slides
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show 1 slide at a time
    slidesToScroll: 1,  // Scroll 1 slide at a time
    swipe: false,       // Disable swipe functionality
    draggable: false,   // Disable dragging functionality
    nextArrow: <NextArrow />,  // Custom next arrow component
    prevArrow: <PrevArrow />   // Custom previous arrow component
  };

  return (
    <div className="App">
      <h1 className="center-title">Work</h1>
      
      {/* Slider component */}
      <Slider {...settings}>
        {/* First iframe slide */}
        <div>
          <ResponsiveIframe 
            src="https://www.youtube.com/embed/gkVunxye1eY?si=oqUyMnaTiXSXBO7X"
            title="Video 1"
          />
        </div>

        {/* Second iframe slide */}
        <div>
          <ResponsiveIframe 
            src="https://www.youtube.com/embed/vP473A_4OAs?si=z0QFpz94ojz8CJnG" 
            title="Video 2"
          />
        </div>

        {/* Third iframe slide */}
        <div>
          <ResponsiveIframe 
            src="https://www.youtube.com/embed/TrBZvjM8dF0?si=dXMBkR4ynURC5lEP" 
            title="Video 3"
          />
        </div>
      </Slider>
    </div>
  );
}

export default App;
