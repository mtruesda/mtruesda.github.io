import '../css/Experience.css';
import React, { useEffect } from 'react';

function Experience() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Experience");
        }
    }, []);

    return (
        <div>
            <h1>Experience Page</h1>
        </div>
    );
}

export default Experience;