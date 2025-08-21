// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaTools,
    FaGithub,
    FaBook,
    FaGlobe,
    FaUsers,
    FaGamepad
} from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'ServeHub',
        description: 'ServeHub is a mobile application built with Flutter that enables users to browse, book, and manage home services such as plumbing, electrical work, and cleaning. It features a user-friendly interface and real-time booking capabilities.',
        link: 'https://github.com/DHANANJAYA0013/ServeHub',
        icon: <FaTools />,
    },
    {
        title: 'Profile Finder',
        description: 'Profile Finder is a GitHub profile lookup tool that allows users to search for any GitHub username and view their public repositories, followers, and other profile details using the GitHub API.',
        link: 'https://github.com/DHANANJAYA0013/Profile-Finder',
        icon: <FaGithub />,
    },
    {
        title: 'Library Management System',
        description: 'The Library Management System is a fully automated software solution designed to simplify and enhance the management of library resources.',
        link: 'https://github.com/DHANANJAYA0013/LMSDjango',
        icon: <FaBook />,
    },
    {
        title: 'Portfolio Site',
        description: 'A portfolio website built with HTML, CSS, JavaScript, and React.',
        link: 'https://github.com/DHANANJAYA0013/Portfolio',
        icon: <FaGlobe />,
    },
    {
        title: 'Employee Management System',
        description: 'A web app built with Django to manage employees.',
        link: 'https://github.com/DHANANJAYA0013/EMSDjango',
        icon: <FaUsers />,
    },
    {
        title: 'GameZone',
        description: 'GameZone is an interactive, user-friendly gaming website designed to provide gaming enthusiasts with game reviews and game-related content.',
        link: 'https://github.com/DHANANJAYA0013/GameZone1',
        icon: <FaGamepad />,
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
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <div className="project-icon">{project.icon}</div>
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
