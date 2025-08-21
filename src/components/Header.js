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

