import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar1">
            <div className="navbar">
                {/* Logo (optional) */}
                {/* <div className="logo">Logo</div> */}

                {/* Mobile Toggle Button */}
                <button className="menu-toggle" onClick={handleToggle}>
                    {menuOpen ? '✖' : '☰'}
                </button>

                {/* Menu Items */}
                <div className={`menu ${menuOpen ? 'menu-open' : ''}`}>
                    <Link
                        className="menu-item"
                        to="intro"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={() => setMenuOpen(false)} // Close menu on click
                    >
                        Home
                    </Link>
                    <Link
                        className="menu-item"
                        to="skils"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        className="menu-item"
                        to="skills"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </Link>
                    <Link
                        className="menu-item"
                        to="contactPage"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>  
        </nav>
    );
};
