import React from 'react';
import './App.css';  // Import the CSS file
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      {/* Scrollable Sections with Scroll Snap */}
      <div>
        <section id="home"><Home /></section>
        <section id="work"><Work /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
