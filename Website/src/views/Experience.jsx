import '../css/Experience.css';
import React, { useEffect } from 'react';

// NAVAIR
// ARLIS
// TA
// Manager
// Other

function Experience() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("experience");
        }
    }, []);

    return (
        <div id='main-content' className='main-content'>
            <h1>Experience</h1>

            <div className="job-header">
                <div className="job-left">Computer Scientist @ Department of Defense - NAVAIR</div>
                <div className="job-tabs">
                    <span className="job-tab">Full-Time</span>
                    <span className="job-tab">In-Person</span>
                </div>
                <div className="job-right">Feb 2024 – Present</div>
            </div>
            <ul className="subtext">
                <li>
                    Use OpenCV and C++ in projects involving image analysis and comparison to simulate warfighter platforms and support aircraft simulation research
                </li>
                <li>
                    Develop C++/Blueprints in Unreal Engine 5 along with using Niagara Systems and HLSL shaders to contribute 
                    to a high fidelity in-house simulation image generator capable of attaching to physics and airframe applications
                </li>
                <li>Work with Varjo 3/4 and Valve Index VR headsets to contribute to high fidelity simulations</li>
                <li>Contributed to a high-performing and agile team in a fast-paced environment</li>
                <li>
                    Integrate immersive technologies into simulations such as Mixed Reality, 
                    Motion Platforms, and Vestibular Stimulation headsets
                </li>
            </ul>

            <div className="job-header">
                <div className="job-left">Undergraduate Research Assistant @ Applied Research Laboratory for Intelligence and Security</div>
                <div className="job-tabs">
                    <span className="job-tab">Part-Time</span>
                    <span className="job-tab">Remote</span>
                </div>
                <div className="job-right">Nov 2023 – May 2024</div>
            </div>
            <ul className="subtext">
                <li>Testing and Simulation for self-autonomous vehicles in off-road environments</li>
                <li>Full-stack development for simulation tools and software used to drive the environment using customtkinter</li>
                <li>Handled CSV files using Pandas and python, pulling and manipulating information from AWS S3 Buckets</li>
            </ul>

            <div className="job-header">
                <div className="job-left">Computer Science Teaching Assistant @ University of Maryland: College Park</div>
                <div className="job-tabs">
                    <span className="job-tab">Part-Time</span>
                    <span className="job-tab">Hybrid</span>
                    <span className="job-tab">Seasonal (School-year)</span>
                </div>
                <div className="job-right">Sept 2022 - May 2023</div>
            </div>
            <ul className="subtext">
                <li>
                    Facilitated office hours and assisted in debugging student C and Racket/x86 code to provide academic support for 
                    "Introduction to Compilers" (200 students) and "Introduction to Computer Systems" (890 students).
                </li>
                <li>Collaborated with the lead professor on exam content and evaluation criteria and Graded assignments</li>
                <li>Resolved student queries, enhancing understanding and improving course engagement.</li>
            </ul>

            <div className="job-header">
                <div className="job-left">Swim Club Manager @ DRD Pool Management Inc.</div>
                <div className="job-tabs">
                    <span className="job-tab">Part-Time</span>
                    <span className="job-tab">In-Person</span>
                    <span className="job-tab">Seasonal (Summer)</span>
                </div>
                <div className="job-right">Jun 2021 - Sept 2023</div>
            </div>
            <ul className="subtext">
                <li>Managed swim club facility, overseeing a team of 32 staff members to ensure efficient operations</li>
                <li>
                    Represented DRD Company in communication with the pool board, members and other clients, addressing concerns and maintaining 
                    positive relationships
                </li>
            </ul>

            <div className="job-header">
                <div className="job-left">Customer Service Representative @ Walgreens Inc.</div>
                <div className="job-tabs">
                    <span className="job-tab">Part-Time</span>
                    <span className="job-tab">In-Person</span>
                </div>
                <div className="job-right">Jan 2021 - May 2021</div>
            </div>
            <ul className="subtext">
                <li>Maintained smooth operations of storefront within walgreens, stocking shelves and running a register</li>
                <li>
                    Represented Walgreens in front-facing communications with customers, addressing concerns and directing them to their needs
                </li>
            </ul>

            <div className="job-header">
                <div className="job-left">Dishwasher @ Memories Charcoal House</div>
                <div className="job-tabs">
                    <span className="job-tab">Part-Time</span>
                    <span className="job-tab">In-Person</span>
                </div>
                <div className="job-right">Oct 2020 - Dec 2020</div>
            </div>
            <ul className="subtext">
                <li>Cleaned dishes at MCH, being proactive about moving and obtaining them</li>
            </ul>

        </div>    
    );
}

export default Experience;