// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function About() {
    return (
        <section id="about" className="about-section">
            <motion.div
                className="about-image-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <img src={require("../assets/img/photo1.jpg")} alt="Dhananjaya" className="about-image" />
            </motion.div>

            <motion.div
                className="about-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 className="about-heading" variants={itemVariants}>
                    👋 About Me
                </motion.h2>

                <motion.p className="about-text" variants={itemVariants}>
                    Hi, I'm <strong>Dhananjaya</strong> — a passionate web developer who turns ideas into digital experiences.
                    With a strong back-end foundation and a love for clean code, I build performant and responsive web apps
                    using <span className="highlight">React</span>, <span className="highlight">JavaScript</span>, and modern web tools.
                    When I’m not coding, you’ll find me exploring new tech trends or fine-tuning my latest side project.
                </motion.p>

                <motion.a
                    href="#contact"
                    className="about-cta"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Let's Work Together"
                >
                    🚀 Let's Work Together
                </motion.a>
            </motion.div>
        </section>
    );
}

export default About;
