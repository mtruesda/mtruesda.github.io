import '../css/Projects.css';
import React, { useEffect } from 'react';
import { ScrollFx } from '../Common';

// include bugs, issues, development. Maybe look into how we can visualize git work in here too
// Website
// Tree project
// CV projects -> from class because those are actually done
// work on your bot?
// Unreal projects / plugins

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("projects");
        }
    }, []);

    return (
        <div id='main-content'>
            <ScrollFx>
                <div className="project-container project-left">
                    <h3>Project One</h3>
                    <p>Description of a cool project on the left.</p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-right">
                    <h3>Project Two</h3>
                    <p>Description of another project, but right-aligned.</p>
                </div>
            </ScrollFx>
        </div>   
    )
}

export default Projects;