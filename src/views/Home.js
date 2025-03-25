import '../css/Home.css';
import { typeLine } from '../Common'; // adjust path if needed
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        if (window.runCommand) {
          window.runCommand("Home");
        }
    }, []);
    
    
    return (
        <div>
            <nav className="nav-menu">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/arlis">Arlis</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                </ul>
            </nav>
            <fieldset class="container">
                <legend>Connect with me!</legend>
            </fieldset>
            <fieldset class="container">
                <legend>About Me</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Projects</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Arlis</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Work Experience</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Contacts</legend>
            </fieldset>
        </div>
    );
}

export default Home;