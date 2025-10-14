import React from 'react';
import './styles/Events.css';

const eventData = [
    {
        img: 'event1.jpg',
        description: 'Traditional wedding rituals of Jaukandhei Bahaghara',
    },
    {
        img: 'event2.jpeg',
        description: 'Dramatic performances depicting local folklore',
    },
    {
        img: 'event3.jpeg',
        description: 'Cultural procession celebrating unity and devotion',
    },
    {
        img: 'event4.JPG',
        description: 'Ceremonial turmeric rituals filled with joy',
    },
    {
        img: 'event5.jpg',
        description: 'Community gathering sharing laughter and memories',
    },
    {
        img: 'event6.jpg',
        description: 'Pious rituals symbolizing heritage and purity',
    },
    {
        img: 'event7.JPG',
        description: 'Pious rituals symbolizing heritage and purity',
    },
    {
        img: 'event8.jpg',
        description: 'Pious rituals symbolizing heritage and purity',
    },
];

export default function Events() {
    return (
        <section className="events-section" id="events"> 
            <h2 className="events-title">EVENTS</h2>
            <div className="events-grid">
                {eventData.map((event, index) => (
                    <div className="event-card" key={index}>
                        <img src={event.img} alt={`Event ${index + 1}`} />
                        <div className="event-overlay">
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
