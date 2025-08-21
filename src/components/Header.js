// src/components/Header.js
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h1>Dhananjaya</h1>
                </div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button
                    className="dark-mode-toggle"
                    onClick={toggleDarkMode}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
}

export default Header;

