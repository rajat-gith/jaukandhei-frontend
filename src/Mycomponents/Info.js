import React from 'react';
import '../Mycomponents/styles/Info.css';

const featuredData = [
    {
        image: '/info/Subhasini Jena President.jpeg',
        name: 'Subhasini Jena',
        position: 'President',
        message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
        image: '/info/Upendra Patra Working president.jpeg',
        name: 'Upendra Patra',
        position: 'Working President',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
];

const infoData = [
    {
        image: '/info/Anjali Panda Vice-President.jpeg',
        content: 'Anjali Panda Vice President',
    },
    {
        image: '/info/Raghunath_Lenka_Asst_Secretary.jpeg',
        content: 'Raghunath Lenka Assistant Secretary',
    },
    {
        image: '/info/Rajesh_Giri_Asst_Secretary.jpeg',
        content: 'Rajesh Giri Assistant Secretary',
    },
    {
        image: '/info/Byomanath Rath Cashier.jpeg',
        content: 'Byomanath Rath Cashier',
    },
];

function Info() {
    const duplicatedData = [...infoData, ...infoData];

    return (
        <div className="info-main-wrapper">
            {/* Featured Sections */}
            {featuredData.map((person, index) => (
                <div key={index} className="info-featured-section">
                    <div className="info-featured-wrapper">
                        <div className="info-featured-image-box">
                            <img src={person.image} alt={person.name} className="info-featured-image" />
                        </div>
                        <div className="info-featured-header">
                            <h3 className="info-featured-name">{person.name}</h3>
                            <h4 className="info-featured-position">{person.position}</h4>
                            <p className="info-featured-message">{person.message}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Scrolling Marquee Section */}
            <div className="info-container">
                <div className="info-scroll-wrapper">
                    <div className="info-scroll-content">
                        {duplicatedData.map((item, index) => (
                            <div key={index} className="info-item">
                                <div className="info-square-box">
                                    <img
                                        src={item.image}
                                        alt={item.content}
                                        className="info-image"
                                    />
                                </div>
                                <div className="info-text-content">
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;