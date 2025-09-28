import '../css/Projects.css';
import React, { useEffect } from 'react';
import { ScrollFx } from '../Common';

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("projects");
        }
    }, []);

    return (
        <div id='main-content'>
            <ScrollFx>
                <div className="project-container project-right">
                    <h3>Asteroid Position Prediciton using Kalman Filters</h3>
                    <p>
                        I built a small simulated asteroid prediction system that simulates and forecasts orbital trajectories under uncertainty using probabilistic 
                        state estimation. The project integrates Kalman and Particle Filters to handle noisy measurements, and adaptive time-stepping 
                        to maintain stability in close encounters. The project uses Bayesian inference, numerical simulation, and matrix-based noise 
                        modeling to create a robust prediction pipeline.
                        <br/><br/>
                        This project was made for school, and therefore for academic reasons I keep that repository private. If you'd like to see it
                        you can reach out to me and I'll happily provide it. My contact information is on the <a href="/home">home</a> page.
                    </p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-left">
                    <h3>Titanic Machine Learning Analysis</h3>
                    <p>
                        This project explores passenger survival prediction using a Titanic dataset acquired from <a href="https://www.kaggle.com/datasets">Kaggle</a>. 
                        After preprocessing with one-hot encoding, a decision tree classifier was trained, achieving 98% accuracy on the training set and 82% on 
                        the test set. Model performance was evaluated using 10-fold cross-validation. To compare approaches, support vector machines and random forests 
                        were also tested under the same conditions. This project walks through data preparation, model training, and evaluation in a clear, step-by-step 
                        process, making it a concise example of applying machine learning methods to a real dataset.
                        <br/><br/>
                        This project was made for school, and therefore for academic reasons I keep that repository private. If you'd like to see it
                        you can reach out to me and I'll happily provide it. My contact information is on the <a href="/home">home</a> page.
                    </p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-right">
                    <h3>GMM-Based Soccer Ball Detection</h3>
                    <p>
                        As part of a computer vision project, I developed a Python-based perception system for a Nao robot used in Robocup soccer. The objective was to detect 
                        an orange soccer ball and estimate its distance using only the robot’s onboard cameras. I implemented color classification pipelines using RGB, HSV, and 
                        YCbCr color spaces, starting with basic thresholding and moving on to using models like single Gaussians and Gaussian Mixture Models (GMMs). 
                        To do this, I trained on color samples, computing empirical means and covariances, and using Bayes' rule to derive per-pixel color probabilities. 
                        To improve real-world usability, I explored the effects of lighting and noise, refined classification via a custom color space, and used morphological 
                        operations to isolate the ball. I finished this project by fitting a parametric model to estimate distance based on image features.
                        <br/><br/>
                        This project was made for school, and therefore for academic reasons I keep that repository private. If you'd like to see it
                        you can reach out to me and I'll happily provide it. My contact information is on the <a href="/home">home</a> page.
                    </p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-left">
                    <h3>File Manager</h3>
                    <p>
                        This project is a lightweight file manager styled to resemble the macOS Finder. On the backend, it uses a Splay Tree data structure,
                        although its usage is fairly minimal—primarily limited to handling filenames. Directory (folder) structures are not deeply modeled
                        within the tree and are largely bypassed in this version.
                        <br/><br/>
                        The choice to use a Splay Tree was partly inspired by its historical use in the Windows NT kernel—not to be confused with the Windows File Manager,
                        which interacts with the NTFS file system. While NTFS uses B+ trees for indexing files and directories, early versions of the NT kernel
                        used splay trees internally for tasks like memory region management (e.g., Virtual Address Descriptor trees).
                        <br/><br/>
                        I wanted to explore how a self-adjusting structure like a splay tree might influence file access patterns in a simulated file management context.
                        In practice, a production file manager would typically favor a more balanced or disk-efficient structure, but this experiment helped illustrate
                        how adaptive data structures behave under repeated access.
                        <br/><br/>
                        The visual GUI is still in progress, but the data structure implementation is complete and can be 
                        viewed <a href="https://github.com/mtruesda/FileManager">here</a> under the <code>TreeItems</code> module.
                    </p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-right">
                    <h3>Racket Compiler</h3>
                    <p>
                        This project was also done as part of a class to demonstrate my understanding of compilers and how they're made along with parsers and interpreters. The project contains a full parser, interpreter, 
                        and compiler for the Racket programming language and was made using Racket and x86 assembly. In this project, we implemented type-handling mechanisms for type safety
                        and variable management for dynamic programming. The final product was also able to support lambda functions and other modern functional programming paradigms.
                        I was able to verify results through the use of the Racket REPL environment to compare results between my own test cases and the output of the official language.
                        <br/><br/>
                        This project was made for school, and therefore for academic reasons I keep that repository private. If you'd like to see it
                        you can reach out to me and I'll happily provide it. My contact information is on the <a href="/home">home</a> page.
                    </p>
                </div>
            </ScrollFx>
        </div>   
    )
}

export default Projects;