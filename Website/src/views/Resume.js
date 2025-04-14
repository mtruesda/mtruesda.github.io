import '../css/Resume.css'
import React, { useEffect } from 'react'

function Resume() {
    useEffect(() => {
              if (window.runCommand) {
                window.runCommand("resume");
              }
        }, []);

    // put resume on page and an auto downloader for the resume
    return (
        <div></div>
    );
}

export default Resume;