import '../css/Experience.css';
import React, { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Projects");
        }
    }, []);

    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;