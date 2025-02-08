// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
    return (
        <section id="about" className="about-section">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="about-image-container"
            >
                <img src={require("../assets/img/photo.jpg")} alt="Dhananjaya" className="about-image" />
            </motion.div>
            
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="about-heading"
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="about-text"
            >
                Hi, I'm Dhananjaya, a passionate web developer with a strong foundation in Back-end development. I specialize in building responsive, user-friendly websites using technologies like React, JavaScript, HTML, and CSS. I'm always eager to learn and grow my skills!
            </motion.p>

            
        </section>
    );
}

export default About;
