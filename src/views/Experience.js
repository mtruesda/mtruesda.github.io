import '../css/Experience.css';
import React, { useEffect } from 'react';

// NAVAIR
// ARLIS
// TA
// Manager
// Other

function Experience() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("experience");
        }
    }, []);

    return (
        <div id='main-content' class='main-content'>
            <h1>Experience Page</h1>
        </div>
    );
}

export default Experience;