import '../css/Experience.css';
import React, { useEffect } from 'react';
import Menubar from "../Common.js"

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Projects");
        }
    }, []);

    return (
        <div>
            <Menubar />
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;