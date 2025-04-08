import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './css/App.css';

import Home from        './views/Home'
import About from       './views/About'
import Projects from    './views/Projects'
import Experience from  './views/Experience'
import Resume from './views/Resume'
import { NameHeader, Menubar, Terminal } from './Common.js'

function App() {
  //const [showMenu, setShowMenu] = useState(false);
  const currentPath = window.location.pathname;
  const startingPrompt = currentPath === "/" ? "home" : currentPath.slice(1).toLowerCase();

  const [prompts] = useState([startingPrompt]);
    

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
    const prompt = document.getElementById("prompt")
    if (!container || !prompt) return;
  
    const PROMPT_PREFIX = "/users/MyronT/Website/ mtruesda~:$ ";
    const lineHeight = 24; // Adjust if your font size is different
    const promptHeight = prompt.offsetHeight || 400;
    const MAX_LINES = Math.max(Math.floor(promptHeight / lineHeight), 5);

    return new Promise((resolve) => {
      // 🔄 Remove the trailing empty line, if it exists
      if (
        container.lastChild?.innerHTML.trim() === PROMPT_PREFIX.trim()
      ) {
        container.removeChild(container.lastChild);
      }
  
      // 💣 Remove oldest lines if exceeding max
      while (container.childNodes.length >= MAX_LINES) {
        const first = container.firstChild;
        if (first && first.nodeType === Node.ELEMENT_NODE) {
          container.removeChild(first);
        } else {
          break;
        }
      }
  
      // ⌨️ Create a new prompt line and start typing
      const newLine = document.createElement("div");
      newLine.innerHTML = PROMPT_PREFIX;
      container.appendChild(newLine);
  
      let index = 0;
      const speed = 30;
  
      function typeChar() {
        if (index < text.length) {
          newLine.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeChar, speed);
        } else {
          // 🟢 Add a fresh blank prompt line at the end
          const blankLine = document.createElement("div");
          blankLine.innerHTML = PROMPT_PREFIX;
          container.appendChild(blankLine);
          resolve();
        }
      }
  
      typeChar();
    });
  };
  
  

  return (
    <Router>
      <div>
        <NameHeader />
        <Menubar />
        <Terminal />
  
        {/* Route Definitions */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} /> {/*this may be unnecessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
