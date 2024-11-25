import React from 'react';
import './intro.css';
import { ReactTyped } from 'react-typed'; // Correct import

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm <span className="introName">
                        <ReactTyped
                            strings={["Ganesha Moorthy"]}
                            typeSpeed={40}
                            backSpeed={50}
                            backDelay={1000}
                            typingDelay={500}
                            loop
                            className="dynamicText"  // Add a class for styling
                        />
                    </span>
                    <br />Full Stack Developer
                </span>
                <p className="intropara">
                    I am a skilled web designer with experience in creating 
                    <br />visually appealing and user-friendly websites.
                </p>
                <a
                    href="Resume_Ganesh.pdf"
                    download="Resume_Ganesh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn">Get My Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Intro;
