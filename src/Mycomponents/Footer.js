import React, { useState } from 'react';
import '../Mycomponents/styles/Footer.css';
import { Link } from 'react-router-dom';

// Centralized navigation links (same can be shared with Navbar)
const navLinks = [
    { name: 'Home', path: '/', type: 'route' },
    { name: 'About', path: '/about', type: 'route' },
    { name: 'Our Work', path: '/', type: 'section', sectionId: 'programs' },
    { name: 'Events', path: '/', type: 'section', sectionId: 'events' },
    { name: 'Media', path: '/media', type: 'route' },
    { name: 'Shop', path: '/shop', type: 'route' },
];

export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    const handleSectionScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80, // adjust for navbar height
                behavior: 'smooth',
            });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-overlay">
                <div className="footer-content">
                    {/* === Become a Member Section === */}
                    {/* <div className="footer-section member-section">
                        <h2>Subscribe for Newsletter</h2>
                        <form className="member-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Mobile No." />
                            <input type="email" placeholder="Email Id" />
                            <button type="submit">SUBMIT</button>
                        </form>
                        <button className="support-btn">Support Us</button>
                    </div> */}
                    {/* === Donation Form Section === */}
                    {/* === Donation Button Section === */}
                    <div className="footer-section donation-section">
                        <h2>Support Us — Donate</h2>
                        <button className="support-btn" onClick={() => setShowModal(true)}>
                            Donate Now
                        </button>
                    </div>

                    {/* === Donation Modal === */}
                    {showModal && (
                        <div className="donation-modal-overlay" onClick={() => setShowModal(false)}>
                            <div className="donation-modal" onClick={(e) => e.stopPropagation()}>
                                <button className="close-btn" onClick={() => setShowModal(false)}>
                                    ✖
                                </button>
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSd0tGYPK5naFfp5CLDv1CVnAL_KWxrJ8hcsu5TMg5IGMxLTFQ/viewform?embedded=true"
                                    width="640"
                                    height="640"
                                    frameborder="0"
                                    marginheight="0"
                                    marginwidth="0"
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </div>
                    )}

                    {/* === Quick Links Section === */}
                    <div className="footer-section quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    {link.type === 'route' ? (
                                        <Link to={link.path}>
                                            <span>{link.name}</span>
                                        </Link>
                                    ) : (
                                        <span
                                            onClick={() => handleSectionScroll(link.sectionId)}
                                            className="footer-link-btn"
                                        >
                                            {link.name}
                                        </span>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link to="/get-involved">
                                    <span>Get Involved</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* === Contact Section === */}
                    <div className="footer-section contact-section">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <span>📍</span> Jaukandhei Bahaghara utsav commitee,<br /> Biswashree Press,F.M collage road, Cinema Bazar, Balasore, 756001.
                            </li>
                            <li>
                                <span>✉️</span> jaukandheibahaghara.utsav11@gmail.com
                            </li>
                            <li>
                                <span>📞</span> +91 94371 60005 <br />
                                                 +91 94395 39229
                            </li>
                        </ul>
                    </div>
                </div>

                {/* === Copyright Section === */}
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Your Organization. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
