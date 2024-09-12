import React from 'react';
import ResponsiveIframe from './ResponsiveIframe';
import '../App.css';


const App = () => {
  
  return (
    <div className="center-container">
      <h1 className="center-title">Work</h1>
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
