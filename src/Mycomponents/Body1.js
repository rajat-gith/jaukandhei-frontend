import React from 'react';
import './styles/Body1.css'; // optional: for styling
import { Link } from 'react-router-dom';
export default function Body1() {
    return (
        <div>
            {/* Intro Section */}
            <section className="intro-section">
                {/* Left Content */}
                <div className="intro-text">
                    <h1>
                        Jau Kandhei
                        <br />
                        Bahaghara
                    </h1>
                    <div className="orange-line"></div>
                    <span className='intro-title'>Celebrating Tradition</span>
                    <p id="short-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia des. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et{' '}
                        <Link to="/about" className="read-more" id="read-more-link">
                            Read more &gt;
                        </Link>
                    </p>
                </div>

                {/* Right Image */}
                <div className="intro-image">
                    <div className="intro-image1">
                        <img src="karta1.jpeg" alt="Community Collage" />
                    </div>
                    <div className="intro-image2">
                        <img src="karta2.jpeg" alt="Community Collage" />
                    </div>
                </div>
            </section>
        </div>
    );
}
