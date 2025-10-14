import React from 'react';
import './styles/Karta.css';

export default function KartaCards({ cards }) {
    return (
        <div className="karta-card">
            <img src={cards.imgs[0]} alt={cards.name} className="cards-img" />
            <h2>{cards.name}</h2>
            <p>{cards.description}</p>
            <div className="karta-info">
                <p>
                    <strong>Location:</strong> {cards.location}
                </p>
                <p>
                    <strong>Start Date:</strong> {cards.startDate}
                </p>
                <p>
                    <strong>End Date:</strong> {cards.endDate}
                </p>
            </div>
        </div>
    );
}
