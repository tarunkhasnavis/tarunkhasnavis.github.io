import React from 'react'
import './css/ProjectCard.scss'
import github from './assets/github-logo.png';
import "aos/dist/aos.css";
import { motion } from "framer-motion"

function ProjectCard({ index, title, description, image, link, git_link}) {

    var crd = "card ";
    const crds = ["card-0", "card-1", "card-2", "card-3", "card-4", "card-5"]

    return (
        <div className={crd + crds[index]} data-aos="fade-up" data-aos-duration="2000">
            <a className="project-content" href={link}>
                <div className="image-wrapper"> 
                    <img src={image}/>
                </div>
                <div className="project-description">
                    <h1>{title}</h1> 
                    <p>{description}</p>
                </div>
                <div className="project-checkout">
                    <a
                    href={git_link}
                    target="_blank"
                    aria-label="GitHub"
                    >
                    <motion.i
                        whileHover={{ scale: 1.15 }}
                        className="fa fa-github"
                    ></motion.i>
                    </a>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard
