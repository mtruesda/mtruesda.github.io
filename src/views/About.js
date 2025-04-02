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
            window.runCommand("About");
          }
    }, []);

    return (
      <div id='main-content'>
        <h1 id="typeAbout">About Me</h1>
        
        <h2>Education</h2>
        <div style={{ paddingLeft: '2rem' }}>
          <h3>University of Maryland: College Park</h3>
          <p style={{ marginTop: '-1rem', paddingTop: 0 }}>August 2020 - December 2023 | GPA : 3.47</p>
          <p style={{ marginTop: '-.5rem', paddingTop: 0 }}>
            <em>Relevant Coursework:</em> Advanced Data Structures, Compilers, Linear Algebra, Computer Systems, Algorithms, Computer Vision, Javascript, Advanced Data Science Techniques and Intro to Machine Learning, Computer and Network Security, Programming Languages and Paradigms, Organization of Programming Languages, Applied Probability and Statistics I/II
          </p>
        </div>

        <h2>Skills</h2>
        <p></p>

        <h2>Academic and Professional Interests</h2>
        <p style={{ marginTop: '-.5rem', paddingTop: 0 }}>

        </p>
        
        <h2>Travel</h2>
        <img src={denmark} alt="Katelyn and I at a castle in Denmark" className="denmark-image"></img>
        <img src={germany} alt="Katelyn and I at a castle in Germany" className="germany-image"></img>
        <p style={{ marginTop: '-.5rem', paddingTop: 0 }}>

        </p>
        
        <h2>Hobbies</h2>
        <p></p>
      </div>
    );
}

export default About;
  