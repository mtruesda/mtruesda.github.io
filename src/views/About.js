import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
          if (window.runCommand) {
            window.runCommand("About");
          }
    }, []);

    return (
      <div>
        <h1 id="typeAbout">About Me</h1>
      </div>
    );
}

export default About;
  