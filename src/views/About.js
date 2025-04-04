import '../css/About.css'
import React, { useEffect } from 'react';
import denmark from '../images/KateMyronDenmark.png';
import germany from '../images/KateMyronGermany.png';

// school graduation
// interests
// travel
// switches
// hobbies

function About() {
    useEffect(() => {
          if (window.runCommand) {
            window.runCommand("about");
          }
    }, []);

    return (
      <div id='main-content'>
        <h1 id="typeAbout">About Me</h1>
        
        <h2>Education</h2>
        <div class="contentParagraph">
          <h3>University of Maryland: College Park</h3>
          <p class="subheader">August 2020 - December 2023 | GPA : 3.47</p>          
          <p class="paragraphText">
            <strong>Relevant Coursework:</strong> Advanced Data Structures, Compilers, Linear Algebra, Computer Systems, Algorithms, Computer Vision, Javascript, Advanced Data Science Techniques and Intro to Machine Learning, Computer and Network Security, Programming Languages and Paradigms, Organization of Programming Languages, Applied Probability and Statistics I/II
          </p>
        </div>

        <h2>Skills</h2>
        <div class="contentParagraph">
          <p>
            <strong>Experienced Languages:</strong> C++, Python, C<br/>
            <strong>Familiar Languages:</strong> Java, Javascript, x86 Assembly, HLSL, SQL, Rust, Ruby, Matlab, R, OCaml, MIPS Assembly, Haskell, Racket<br/>
            <strong>Tools:</strong> Visual Studio, CMake, Visual Studio Code, Git, Perforce Helix (P4), Wireshark, Docker, GDB, MongoDB Atlas, AWS<br/>
            <strong>Familar Operating Systems:</strong> MacOS (Current version: Sequoia 15.2 Beta), Windows 10/11, PopOS, Manjaro, Ubuntu, Redhat
          </p>
        </div>
        
        <h2>Academic and Professional Interests</h2>
        <div class="contentParagraph">
          <h3>Academic</h3>
          
          <p class="paragraphText">

          </p>
          <h3>Professional</h3>

          <p class="paragraphText">

          </p>
        </div>

        <h2>Hobbies</h2>
        <p>

        </p>
        


        <h2>Travel Photos</h2>
        <br/>
        <img src={denmark} alt="Katelyn and I at a castle in Denmark" className="denmark-image" />
        <br/>
        <img src={germany} alt="Katelyn and I at a castle in Germany" className="germany-image" />
      </div>
    );
}

export default About;
  