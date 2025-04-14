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

            <div className="job-header">
                <div className="job-left">Undergraduate Research Assistant @ Applied Research Laboratory for Intelligence and Security</div>
                    <div className="job-tabs">
                        <span className="job-tab">Part-Time</span>
                        <span className="job-tab">Remote</span>
                    </div>
                    <div className="job-right">Nov 2023 – May 2024</div>
            </div>

            <div className="job-header">
                <div className="job-left">Computer Science Teaching Assistant @ University of Maryland: College Park</div>
                    <div className="job-tabs">
                        <span className="job-tab">Part-Time</span>
                        <span className="job-tab">Hybrid</span>
                        <span className="job-tab">Seasonal (School-year)</span>
                    </div>
                    <div className="job-right">Sept 2022 - May 2023</div>
            </div>

            <div className="job-header">
                <div className="job-left">Swim Club Manager @ DRD Pool Management Inc.</div>
                    <div className="job-tabs">
                        <span className="job-tab">Part-Time</span>
                        <span className="job-tab">In-Person</span>
                        <span className="job-tab">Seasonal (Summer)</span>
                    </div>
                    <div className="job-right">Jun 2021 - Sept 2023</div>
            </div>

            <div className="job-header">
                <div className="job-left">Dishwasher @ Memories Charcoal House</div>
                    <div className="job-tabs">
                        <span className="job-tab">Part-Time</span>
                        <span className="job-tab">In-Person</span>
                    </div>
                    <div className="job-right">Oct 2020 - Dec 2020</div>
            </div>
        </div>    
    );
}

export default Experience;