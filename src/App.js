import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About';
import Projects from './views/Projects';
import Experience from './views/Experience';
import './css/App.css';

function App() {
  //const [showMenu, setShowMenu] = useState(false);
  const [prompts] = useState([
    "Home" // First command
  ]);

  useEffect(() => {
    // Always show the last prompt as empty until replaced
    const container = document.getElementById("typeContainer");
    if (container) {
      container.innerHTML = ""; // Clear
      prompts.forEach((cmd, i) => {
        const lineText = cmd;
        const line = document.createElement('div');
        line.innerHTML = `/users/MyronT/Website/ mtruesda~:$ `;

        container.appendChild(line);

        if (lineText !== "") {
          let index = 0;
          const speed = 30;

          function typeChar() {
            if (index < lineText.length) {
              line.innerHTML += lineText.charAt(index);
              index++;
              setTimeout(typeChar, speed);
            }
          }

          typeChar();
        }
      });
    }
  }, [prompts]);

  // Expose method to add new typed line
  window.runCommand = (text) => {
    const container = document.getElementById("typeContainer");
    if (!container) return;
  
    return new Promise((resolve) => {
      // Remove the last (empty) prompt line if it exists
      if (container.lastChild?.innerHTML.trim() === "/users/MyronT/Website/ mtruesda~:$") {
        container.removeChild(container.lastChild);
      }
  
      // Create a new prompt line
      const newLine = document.createElement('div');
      container.appendChild(newLine);
      newLine.innerHTML = "/users/MyronT/Website/ mtruesda~:$ ";
  
      let index = 0;
      const speed = 30;
  
      function typeChar() {
        if (index < text.length) {
          newLine.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeChar, speed);
        } else {
          // Once done, add an empty prompt line
          const nextLine = document.createElement('div');
          nextLine.innerHTML = "/users/MyronT/Website/ mtruesda~:$ ";
          container.appendChild(nextLine);
          resolve(); // Let anything waiting on this know it's done
        }
      }
  
      typeChar();
    });
  };

  return (
    <Router>
      <div>
        {/* Handles the terminal look */}
        <div className="color-change"> {/* handles the black background */}
          <div id="prompt"> {/* handles the box with the text */}
            <div id="bar"> {/* handles the bar in the top */}
              <div className="circle" id="close"></div>
              <div className="circle" id="minimize"></div>
              <div className="circle" id="maximize"></div>
            </div>
            {/* Where all prompt lines get stored. The typing container */}
            <div id="typeContainer" classNameName="type-container"></div>
          </div>
        </div>
  
        {/* Route Definitions */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} /> {/*this may be unnecessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
