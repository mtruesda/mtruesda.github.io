import React, { useEffect } from 'react';
import Menubar from "../Common.js"

function About() {
    useEffect(() => {
          if (window.runCommand) {
            window.runCommand("About");
          }
    }, []);

    return (
      <div>
        <Menubar />
        <h1 id="typeAbout">About Me</h1>
      </div>
    );
}

export default About;
  