/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbar from './components/navbar';
import Propwrap from './components/properties';
import Sidebar from './components/sidebar';

const App = () => {
  const handleCanvas = (e) => {
    if(e.target.closest(".blockelem") !== null) {
      document.getElementById("properties").classList.add("expanded");
      document.getElementById("propwrap").classList.add("itson");
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Propwrap />
      <div id="canvas" onClick={(e) => handleCanvas(e)}></div>
    </div>
  );
}

export default App;
