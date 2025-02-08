// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin,FaInstagram } from 'react-icons/fa';  // Importing GitHub and LinkedIn icons
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2025 Dhananjaya. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/DHANANJAYA0013" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />  {/* GitHub Icon */}
                </a>
                <a href="https://www.linkedin.com/in/dhananjay-anchan" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />  {/* LinkedIn Icon */}
                </a>
                <a href="https://www.instagram.com/dhananjaya_poojary24?igsh=MXdtYzJnbm4weTV0cA==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />  {/* Instagram Icon */}
                </a>
            </div>
        </footer>
    );
}

export default Footer;
