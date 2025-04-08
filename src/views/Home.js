import '../css/Home.css';
import React, { useEffect } from 'react';
import { ScrollFx } from '../Common.js';


import insta from '../favicons/instagram-50x50.png';
import linkedin from '../favicons/linkedin50x50.png';
import github from '../favicons/github-50x50.png';

function Home() {
    useEffect(() => {
        if (window.runCommand) {
          window.runCommand("home");
        }
    }, []);
    
    return (
        <ScrollFx>
            <div id='main-content' class='main-content'>
                <h1>Home</h1>
                <p>I made this website to try react and also to put my own website up containing my information!</p>

                <fieldset class="container">
                    <legend>Connect with me!</legend>
                    <div className="icon-links">
                        <a href="https://www.linkedin.com/in/myron-truesdale-9402a61b3/">
                            <img src={linkedin} target="_blank" rel="nonopener noreferrer" alt="LinkedIn favicon" />
                        </a>
                        <a href="https://www.github.com/mtruesda">
                            <img src={github} target="_blank" rel="nonopener noreferrer" alt="GitHub favicon" />
                        </a>
                        <a href="https://www.instagram.com/mtruesda">
                            <img src={insta} target="_blank" rel="nonopener noreferrer" alt="Insta favicon" />
                        </a>
                    </div>
                </fieldset>
            </div>
        </ScrollFx>
    );
}

export default Home;