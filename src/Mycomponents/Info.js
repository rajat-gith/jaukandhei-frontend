import React from 'react';
import '../Mycomponents/styles/Info.css';

const featuredData = [
    {
        image: '/info/Subhasini Jena President.jpeg',
        name: 'Subhasini Jena',
        position: 'President',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        image: '/info/Upendra Patra Working president.jpeg',
        name: 'Upendra Patra',
        position: 'Working President',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
];

const infoData = [
    {
        image: '/info/Anjali Panda Vice-President.jpeg',
        content: 'Anjali Panda',
        post: 'Vice President',
    },
    {
        image: '/info/Raghunath_Lenka_Asst_Secretary.jpeg',
        content: 'Raghunath Lenka',
        post: 'Assistant Secretary',
    },
    {
        image: '/info/Rajesh_Giri_Asst_Secretary.jpeg',
        content: 'Rajesh Giri',
        post: 'Assistant Secretary',
    },
    {
        image: '/info/Byomanath Rath Cashier.jpeg',
        content: 'Byomanath Rath',
        post: 'Cashier',
    },
];

function Info() {
    return (
        <div className="info-main-wrapper">
            {/* Featured Sections */}
            {featuredData.map((person, index) => (
                <div key={index} className="info-featured-section">
                    <div className="info-featured-wrapper">
                        <div className="info-featured-image-box">
                            <img
                                src={person.image}
                                alt={person.name}
                                className="info-featured-image"
                            />
                        </div>
                        <div className="info-featured-header">
                            <h3 className="info-featured-name">{person.name}</h3>
                            <h4 className="info-featured-position">{person.position}</h4>
                            <p className="info-featured-message">{person.message}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Fixed Grid Section for 4 Members */}
            <div className="info-fixed-container">
                {infoData.map((item, index) => (
                    <div key={index} className="info-card">
                        <div className="info-card-image-box">
                            <img src={item.image} alt={item.content} className="info-card-image" />
                        </div>
                        <div className="info-card-text">
                            <p className="info-card-name">{item.content}</p>
                            <p className="info-card-post">{item.post}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Info;
