import { typeLine } from '../Common'; // adjust path if needed
import React, { useEffect } from 'react';

function About() {
    useEffect(() => {
          if (window.runCommand) {
            window.runCommand("About");
          }
    }, []);

    return (
      <div class="title">
          <h1 id="typeAbout">About Me</h1>
      </div>
    );
}

// const text = "@users/MyronTruesdale: About Me";
// let index = 0;
// const speed = 150; // Typing speed in milliseconds

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typeAbout").innerHTML += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//     }
// }

// window.onload = typeWriter;

export default About;
  