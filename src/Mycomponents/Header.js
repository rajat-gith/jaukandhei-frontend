import React, { useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false); // Close menu after clicking link
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Work', path: '/' },
        { name: 'Media Centers', path: '/media' },
        { name: 'Contact Us', path: '/' },
        { name: 'Shop', path: '/' },
    ];

    return (
        <div className="App">
            <nav>
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <div className="logo">
                        <img src="logo2.jpeg" alt="Logo" />
                    </div>
                </Link>

                {/* Hamburger */}
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </div>

                {/* Menu Links */}
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map(({ name, path }) => (
                        <li key={name}>
                            <Link
                                to={path}
                                className={activeLink === name ? 'active' : ''}
                                onClick={() => handleLinkClick(name)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Register Button */}
                {/* <div className="nav-action">
                    <button className="register-btn">Register</button>
                </div> */}
            </nav>
        </div>
    );
}

export default Header;
