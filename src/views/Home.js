import '../css/Home.css';
import React, { useEffect } from 'react';
import denmark from '../images/KateMyronDenmark.png';
import germany from '../images/KateMyronGermany.png';


function Home() {
    useEffect(() => {
        if (window.runCommand) {
          window.runCommand("Home");
        }
    }, []);
    
    return (
        <div id='main-content'>
            <h1>Home</h1>
            
            <img src="" alt="Me sitting in an H-60"></img>
            <img src={denmark} alt="Katelyn and I at a castle in Denmark" className="denmark-image"></img>
            <img src={germany} alt="Katelyn and I at a castle in Germany" className="germany-image"></img>

            <fieldset class="container">
                <legend>Connect with me!</legend>
            </fieldset>
        </div>
    );
}

export default Home;