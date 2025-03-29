import { useLocation, useNavigate } from 'react-router-dom';

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

  return (
    <nav className="nav-menu">
      <ul>
        <li><button onClick={() => handleClick("/home")}>Home</button></li>
        <li><button onClick={() => handleClick("/about")}>About</button></li>
        <li><button onClick={() => handleClick("/projects")}>Projects</button></li>
        <li><button onClick={() => handleClick("/experience")}>Experience</button></li>
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

export {NameHeader, Menubar, Terminal};