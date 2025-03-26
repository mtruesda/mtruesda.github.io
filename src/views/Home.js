import '../css/Home.css';
import React, { useEffect } from 'react';
import Menubar from "../Common.js"

function Home() {
    useEffect(() => {
        if (window.runCommand) {
          window.runCommand("Home");
        }
    }, []);
    
    return (
        <div>
            <Menubar />
            <fieldset class="container">
                <legend>Connect with me!</legend>
            </fieldset>
            
        </div>
    );
}

export default Home;