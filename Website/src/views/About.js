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
      const url = `http://localhost:8000/recently-played?steamid=${steamId}`;
      console.log("URL LOG 1: ", url)
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
            I'm actively working in aircraft simulation research with a particular focus in developing and integrating image generators with VR along with 
            other forms of immersive technologies. I'm also currently exploring and applying to graduate programs in Computer Science, with a focus on 
            Computer Vision, Virtual Reality, and Human-Computer Interaction.
          </p>
        </div>

        <h2>Education</h2>
        <div className="contentParagraph">
          <h3>Georgia Tech</h3>
          <p className="subheader">August 2025 - Present</p>
          <p className="paragraphText">
            <strong>Relevant Coursework:</strong> Robotics AI Techniques
          </p>
          <h3>University of Maryland: College Park</h3>
          <p className="subheader">August 2020 - December 2023 | GPA : 3.47</p>
          <p className="paragraphText">
            <strong>Relevant Coursework:</strong> Advanced Data Structures, Compilers, Linear Algebra, Computer Systems, Algorithms, Computer Vision, 
            Javascript, Advanced Data Science Techniques and Intro to Machine Learning, Computer and Network Security, Programming Languages and Paradigms, 
            Organization of Programming Languages, Applied Probability and Statistics I/II
          </p>
        </div>

        <h2>Skills</h2>
        <div className="contentParagraph">
          <p>
            <strong>Experienced Languages:</strong> C++, Python, C
            <br/>
            <strong>Familiar Languages:</strong> Java, Javascript, x86 Assembly, HLSL, SQL, Rust, Ruby, Matlab, R, OCaml, MIPS Assembly, Haskell, Racket
            <br/>
            <strong>Tools:</strong> Visual Studio, CMake, Visual Studio Code, XCode, Git, vim/vi/nvim, Perforce Helix (P4), Wireshark, Docker, GDB, MongoDB 
            Atlas, AWS
            <br/>
            <strong>Familar Operating Systems:</strong> MacOS (Current version: Sequoia 15.2 Beta), Windows 10/11, PopOS, Manjaro, Ubuntu, Redhat
          </p>
        </div>

        <h2>Hobbies</h2>
        <p>
          I like to spend my time going to the gym, playing video games, spending time out or traveling with friends, and working on my side projects.
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
              <td>275 lbs</td>
              <td>455 lbs</td>
              <td>405 lbs</td>
              <td>135 lbs</td>
            </tr>
          </tbody>
        </table>

        <p>
          Some of my favorite video game series' are Mass Effect and Resident Evil. If we're talking multiplayer games 
          I like to play small games like Lethal Company, Peak, or VTOL VR with friends or play CS2 or Valorant. I also
          like to play Minecraft (Java edition) with my girlfriend, Katelyn.
        </p>
        
        <div>
          <h3>Recently Played Games</h3>
          {recentGames.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {recentGames.map((game) => (
                <li key={game.appid} style={{ marginBottom: "1rem", display: "flex", alignItems: "center" }}>
                  <img
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
                    alt={game.name}
                    style={{ width: "184px", height: "69px", marginRight: "1rem", borderRadius: "4px" }}
                  />
                  <span style={{ fontSize: "1.1rem" }}>{game.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Recent games aren't loading.</p>
          )}
        </div>
          
        <br/>

        <h2>Post Graduation Travel Images</h2>

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
  