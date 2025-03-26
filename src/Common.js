import { Link } from 'react-router-dom';

export default function menubar() {
  return (
    <nav className="nav-menu">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
        </ul>
    </nav>
  );
}