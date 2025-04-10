import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

async function getRecentlyPlayedGames() {
  const steamid = 40021087; // public steam identifier from profile url
  const apiKey = process.env.STEAM_API_KEY;
  const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${apiKey}&steamid=${steamid}&format=json`;

  try {
    const response = await axios.get(url);
    return response.data.response.games; // List of games
  } catch (err) {
    console.error("Steam API error:", err);
    return null;
  }
}

// html for the header containing the name
function NameHeader() {
  return (
    <header className="site-header">
      <h1 className="site-title">Myron Truesdale</h1>
    </header>
  );
}

// html for the menubar that handles linkages and page movement
function Menubar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (location.pathname === path) {
      // Already on the page → scroll
      const target = document.getElementById('main-content');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate like normal
      navigate(path);
    }
  };

  const resumeVersion = "MyronTruesdaleResume.pdf"

  return (
    <nav className="nav-menu">
      <ul>
        <li><button onClick={() => handleClick("/home")}>Home</button></li>
        <li><button onClick={() => handleClick("/about")}>About</button></li>
        <li><button onClick={() => handleClick("/projects")}>Projects</button></li>
        <li><button onClick={() => handleClick("/experience")}>Experience</button></li>
        <li>
          <a href="./assets/Myron_Truesdale_Resume.pdf" 
            download={resumeVersion}
            className="nav-link">
              Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

// handles html for the terminal
function Terminal() {
  return (
    <div className="color-change"> {/* handles the black background */}
      <div id="prompt"> {/* handles the box with the text */}
        <div id="bar"> {/* handles the bar in the top */}
          <div className="circle" id="close"></div>
          <div className="circle" id="minimize"></div>
          <div className="circle" id="maximize"></div>
        </div>
        {/* Where all prompt lines get stored--the typing container */}
        <div id="typeContainer" classNameName="type-container"></div>
      </div>
    </div>
  );
}

function ScrollFx({ children }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fx ${isVisible ? 'visible' : 'hidden'}`}
    >
      {children}
    </div>
  );
}

export { NameHeader, Menubar, Terminal, ScrollFx };