// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: 'Employee Management System',
        description: 'A web app built with Django to Manage Employees.',
        link: 'https://github.com/DHANANJAYA0013/EMSDjango',
    },
    {
        title: 'Portfolio Site',
        description: 'A portfolio website built with HTML, CSS, and JavaScript and React.',
        link: 'https://github.com/DHANANJAYA0013/Portfolio',
    },
    {
        title: 'Library Management System',
        description: 'The Library Management System is a fully automated software solution designed to simplify and enhance the management of library resources.',
        link: 'https://github.com/DHANANJAYA0013/LMSDjango',
    },
    {
        title: 'GameZone',
        description: 'GameZone is an interactive, user-friendly gaming website designed to provide gaming enthusiasts, game reviews, and easy access to game-related content.',
        link: 'https://github.com/DHANANJAYA0013/GameZone1',
    },
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Projects
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View details of ${project.title}`}
                        >
                            View Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
