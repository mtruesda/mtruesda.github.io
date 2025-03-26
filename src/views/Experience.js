import '../css/Experience.css';
import React, { useEffect } from 'react';
import Menubar from "../Common.js"

function Experience() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("Experience");
        }
    }, []);

    return (
        <div>
            <Menubar />
            <h1>Experience Page</h1>
        </div>
    );
}

export default Experience;