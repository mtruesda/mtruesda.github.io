import '../css/Projects.css';
import React, { useEffect } from 'react';
import { ScrollFx } from '../Common';

// include bugs, issues, development. Maybe look into how we can visualize git work in here too
// Website
// Tree project
// CV projects -> from class because those are actually done
// work on your bot?
// Unreal projects / plugins

function Projects() {
    useEffect(() => {
        if (window.runCommand) {
        window.runCommand("projects");
        }
    }, []);

    return (
        <div id='main-content'>
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
                        This project was technically made for school, and therefore for academic reasons I keep that repository private. If you'd like to see if
                        you can reach out to me and I'll happily provide it. My contact information is on the <a href="/home">home</a> page.
                    </p>
                </div>
            </ScrollFx>
            <ScrollFx>
                <div className="project-container project-right">
                    <h3>GMM-Based Soccer Ball Detection</h3>
                    <p></p>
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

                    </p>
                </div>
            </ScrollFx>
        </div>   
    )
}

export default Projects;