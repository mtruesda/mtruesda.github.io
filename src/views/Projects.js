import '../css/Experience.css';
import React, { useEffect } from 'react';

// include bugs, issues, development. Maybe look into how we can visualize git work in here too
// Website
// Tree project
// CV projects -> from class because those are actually done
// work on your bot?
// Unreal projects / plugins

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Projects");
        }
    }, []);

    return (
        <div id='main-content'>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;