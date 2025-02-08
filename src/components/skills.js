// Example Skills Section in JSX (React)
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiPython, SiFlask, SiDjango } from 'react-icons/si'; // Importing icons for Python, Flask, and Django
import './skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <p>Here are the programming languages and technologies I know:</p>
      <div className="skills-list">
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FaJsSquare className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>

        <div className="skill-item">
          <SiPython className="skill-icon" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <SiFlask className="skill-icon" />
          <p>Flask</p>
        </div>
        <div className="skill-item">
          <SiDjango className="skill-icon" />
          <p>Django</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
