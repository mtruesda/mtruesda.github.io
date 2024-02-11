import React, {} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home'
import About from './views/About';
import Projects from './views/Projects';
import Arlis from './views/Arlis';
import Experience from './views/Experience';
import './css/App.css';

let list = [<h1 id="typeHome">/users/MyronTruesdale: </h1>]

function printList(list) {
  return (
    list
  )
}

function App() {
  //const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <div>
        <div class="color-change">
          <div id="prompt">
              <div id="bar">
                  <div class="circle" id="close"></div>
                  <div class="circle" id="minimize"></div>
                  <div class="circle" id="maximize"></div>
              </div>
              {printList(list)}
          </div>
        </div>
        

        {/* Route Definitions */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/arlis" element={<Arlis />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */} {/* Original way I was doing it */}
          <Route path="/" element={<Navigate to="/home" replace />} /> {/*this may be unnecessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
