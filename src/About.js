import React from 'react';
import './css/About.scss';
import propic from './assets/propic-d7.jpg';
// import propic from './assets/propic2.jpg';
import "aos/dist/aos.css";

function About() {
    return (
        <div className="about_container" id="about">
            <p className="hi" data-aos="fade-up" data-aos-duration="750">Hi,</p>
            <div className="about_body" data-aos="fade-up" data-aos-duration="1250">
                <div className="about_introduction">
                    <p>I'm a software engineer working in San Francisco, California. I graduated from UC Berkeley in 2019 and have been working at Salesforce. I work on full-stack engineering projects and am interested in blockchain and the creator economy.</p>
                    <p></p>
                    <p>I am also a dancer, film-maker, and musician. I love working on new and exciting projects, so feel free to reach out or say hello!</p>
                </div>
                <div className="about_side">
                    <img src={propic}/>    
                </div>
            </div>
            <div className="about_circles" data-aos="fade-up" data-aos-duration="250">
                <div className="gradient_circle_one"></div>
                <div className="gradient_circle_two"></div>
                <div className="gradient_circle_three"></div>
            </div>
        </div>
    )
}

export default About
