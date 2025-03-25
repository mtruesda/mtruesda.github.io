import '../css/Experience.css';
import { typeLine } from '../Common'; // adjust path if needed
import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Projects");
        }
    }, []);
    
    return <h1>Projects Page</h1>;
}

export default Projects;