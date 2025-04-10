import '../css/About.css'
import { ScrollFx } from '../Common.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import denmark from '../images/KateMyronDenmark.png';
import germany from '../images/KateMyronGermany.png';

// school graduation
// interests
// travel
// switches
// hobbies

function About() {
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    if (window.runCommand) {
      window.runCommand("about");
    }
  }, []);

  useEffect(() => {
    const fetchRecentlyPlayedGames = async () => {
      const steamId = process.env.REACT_APP_STEAM_ID;
      const url = `http://localhost:5000/recently-played?steamid=${steamId}`; // fix this
    
      try {
        const response = await axios.get(url);
        if (response.data.response && response.data.response.games) {
          setRecentGames(response.data.response.games);
        }
      } catch (error) {
        console.error('Error fetching recently played games:', error);
      }
    };
    fetchRecentlyPlayedGames();
  }, []);

  return (
    <ScrollFx>
      <div id='main-content' className='main-content'>
        <h1 id="typeAbout">About Me</h1>
        
        <h2>Academic and Professional Interests</h2>
        <div className="contentParagraph">
          <p style={{ marginTop: '-.5rem', paddingTop: 0 }}>
            I'm actively working in aircraft simulation research with a particular focus in developing and integrating image generators and VR along with other forms of immersive technologies. I'm also currently exploring and applying to graduate programs in Computer Science, with a focus on Computer Vision, Virtual Reality, and Human-Computer Interaction.
          </p>
        </div>

        <h2>Education</h2>
        <div className="contentParagraph">
          <h3>University of Maryland: College Park</h3>
          <p className="subheader">August 2020 - December 2023 | GPA : 3.47</p>
          <p className="paragraphText">
            <strong>Relevant Coursework:</strong> Advanced Data Structures, Compilers, Linear Algebra, Computer Systems, Algorithms, Computer Vision, Javascript, Advanced Data Science Techniques and Intro to Machine Learning, Computer and Network Security, Programming Languages and Paradigms, Organization of Programming Languages, Applied Probability and Statistics I/II
          </p>
        </div>

        <h2>Skills</h2>
        <div className="contentParagraph">
          <p>
            <strong>Experienced Languages:</strong> C++, Python, C<br/>
            <strong>Familiar Languages:</strong> Java, Javascript, x86 Assembly, HLSL, SQL, Rust, Ruby, Matlab, R, OCaml, MIPS Assembly, Haskell, Racket<br/>
            <strong>Tools:</strong> Visual Studio, CMake, Visual Studio Code, Git, Perforce Helix (P4), Wireshark, Docker, GDB, MongoDB Atlas, AWS<br/>
            <strong>Familar Operating Systems:</strong> MacOS (Current version: Sequoia 15.2 Beta), Windows 10/11, PopOS, Manjaro, Ubuntu, Redhat
          </p>
        </div>

        <h2>Hobbies</h2>
        <p>
          I like to spend my time going to the gym, playing video games, spending time out or traveling with friends, or working on my side projects.
        </p>
        <table className="lift-table">
          <thead>
            <tr>
              <th>Bench Max</th>
              <th>Deadlift Max</th>
              <th>Squat Max</th>
              <th>Overhead Press (Standing) Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>265</td>
              <td>455</td>
              <td>405</td>
              <td>135</td>
            </tr>
          </tbody>
        </table>

        <p>
          Some of my favorite video game series' are Mass Effect and Resident Evil. If we're talking multiplayer games 
          I like to play small games like Lethal Company, REPO, or VTOL VR with friends or play CS2 or Valorant. I also
          like to play Minecraft (Java edition) with my girlfriend, Katelyn.
        </p>
        <p>
          {recentGames.length > 0
          ? recentGames.map((game, index) => (
              <span key={game.appid}>
                {game.name}
                {index < recentGames.length - 1 ? ', ' : '.'}
              </span>
            ))
          : ' Loading games...'}
          Recent games needs to get populated
        </p>

        <br/>
        <div className="flex-container">
          <img src={denmark} alt="Katelyn and I at a castle in Denmark" className="denmark-image" />
          <div className="image-text">
            <p>
              In this image we're at the Neptune fountain found at the Frederiksborg Castle in Hillerød, Denmark
              <br/><br/>
              The Frederiksborg castle originally served as one of the royal palaces but it now acts as a museum of national history.
            </p>
          </div>
        </div>
        <br/>
        <div className="flex-container">
            <p>
              And in this image Katelyn and I visited the Schwerin Castle in Schwerin Germany.
              <br/><br/>
              Parts of this castle today serve as the residence of the Mecklenburg-Vorpommern state parliament.
            </p>
          <img src={germany} alt="Katelyn and I at a castle in Germany" className="germany-image" />
        </div>
      </div>
    </ScrollFx>
  );
}

export default About;
  