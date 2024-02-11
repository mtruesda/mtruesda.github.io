import '../css/Home.css';
import React, { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const textHome = "Home";
        let index = 0;
        const speed = 100; // Typing speed in milliseconds

        // make a list that this adds to and scrolls--problems for later
        function typeWriter() {
            if (index < textHome.length) {
                let element = document.getElementById("typeHome");
                if(element) {
                    element.innerHTML += textHome.charAt(index);
                    index++;
                    setTimeout(typeWriter, speed);
                }
            }
        }

        typeWriter();
    }, []); // Empty array ensures this effect runs once after initial render
    
    return (
        <div>
            <fieldset class="container">
                <legend>Connect with me!</legend>
            </fieldset>
            <fieldset class="container">
                <legend>About Me</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Projects</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Arlis</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Work Experience</legend>
            </fieldset>
            <fieldset class="container">
                <legend>Contacts</legend>
            </fieldset>

            <div class="min-container"><p>Penis 2</p></div>
                
            <p>Penis</p>
        </div>
    );
}

export default Home;