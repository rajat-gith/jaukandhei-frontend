import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/Navbar.css';

function Header({ links }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLinkClick = (link) => {
        setActiveLink(link.name);
        setMenuOpen(false);

        if (link.type === 'section') {
            if (location.pathname !== link.path) {
                navigate(link.path);
                setTimeout(() => {
                    const element = document.getElementById(link.sectionId);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 300); // wait for navigation
            } else {
                const element = document.getElementById(link.sectionId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="App">
            <nav>
                <Link to="/" className="nav-logo" onClick={() => setActiveLink('Home')}>
                    <div className="logo">
                        <img src="logo2.jpeg" alt="Logo" />
                    </div>
                </Link>

                <div className="hamburger" onClick={toggleMenu}>
                    <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {links.map((link) => (
                        <li key={link.name}>
                            {link.type === 'section' ? (
                                <span
                                    className={activeLink === link.name ? 'active' : ''}
                                    onClick={() => handleLinkClick(link)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {link.name}
                                </span>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={activeLink === link.name ? 'active' : ''}
                                    onClick={() => handleLinkClick(link)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
