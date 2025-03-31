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
        window.runCommand("Experience");
        }
    }, []);

    return (
        <div id='main-content'>
            <h1>Experience Page</h1>
        </div>
    );
}

export default Experience;