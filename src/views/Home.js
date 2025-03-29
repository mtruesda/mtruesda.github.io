import '../css/Home.css';
import React, { useEffect } from 'react';


function Home() {
    useEffect(() => {
        if (window.runCommand) {
          window.runCommand("Home");
        }
    }, []);
    
    return (
        <div id='main-content'>
            <h1>Home</h1>
            
            <fieldset class="container">
                <legend>Connect with me!</legend>
            </fieldset>
        </div>
    );
}

export default Home;