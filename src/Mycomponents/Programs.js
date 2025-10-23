import React from 'react';
import './styles/Programs.css';
import { Link } from 'react-router-dom';

import {
    FaTools,
    FaUsers,
    FaBullhorn,
    FaHeartbeat,
    FaHandsHelping,
    FaTheaterMasks,
} from 'react-icons/fa';

export default function Programs() {
    const programs = [
        { icon: <FaTools />, title: 'REVIVING CRAFTMANSHIP', link: '/craftmenship' },
        { icon: <FaHandsHelping />, title: 'JOINING COMMUNITIES', link: '/communities' },
        // { icon: <FaBullhorn />, title: 'EVENTS', link: '/awareness' },
        // { icon: <FaHeartbeat />, title: 'HEALTHCARE', link: '/healthcare' },
        { icon: <FaUsers />, title: 'SOCIAL WORKS', link: '/socialwork' },
        { icon: <FaTheaterMasks />, title: 'REVIVING PERFORMING ARTS', link: '/performingarts' },
    ];

    return (
        <section className="programs" id="programs">
            <h2 className="programs-title">OUR WORKS</h2>
            <div className="programs-grid">
                {programs.map((program, index) => (
                    <Link to={program.link} key={index} className="program-card-link">
                        <div className="program-card" key={index}>
                            <div className="program-icon">{program.icon}</div>
                            <h3 className="program-title">{program.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
