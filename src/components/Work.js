import React from 'react';
import ResponsiveIframe from './ResponsiveIframe';

const App = () => {

  const sectionStyle = {
    justifyContent: 'center',  // Horizontally center the content        // Padding to prevent overlap with the tab bar
  };
  
  return (
    <div style={sectionStyle}>
    <h1>WORK</h1>
    <div className="App">
      
      {/* Example: YouTube video */}
      <ResponsiveIframe 
        src="https://www.youtube.com/embed/TrBZvjM8dF0?si=yErU8DM8IDWX0gNm"
        title="Responsive Video Player"
      />
    </div>
    </div>
  );
}

export default App;
