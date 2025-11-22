import React, { useState, useEffect, useRef } from 'react';
import './styles/Shop.css';

export default function Shop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollRef = useRef(null);

    const storeImages = [
        '/shop/craft2.jpg',
        '/shop/craft3.jpg',
        '/shop/craft4.jpg',
        '/shop/craft6.jpeg',
        '/shop/craft7.jpg',
        '/shop/craft8.jpg',
        '/shop/craft9.jpg',
        '/shop/craft10.jpg',
        '/shop/craft11.jpg',
        '/shop/craft12.jpg',
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollPosition += scrollSpeed;
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
        };

        const intervalId = setInterval(scroll, 20);

        return () => clearInterval(intervalId);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="shops-section" id="shops">
            <span className="shops-title">STORES</span>
            <div className="underline"></div>

            <div className="shops-scroll" ref={scrollRef}>
                {storeImages.map((src, index) => (
                    <div className="shop-card" key={index}>
                        <img src={src} alt={`Store ${index + 1}`} className="shop-image" />
                    </div>
                ))}
            </div>

            <button className="buy-now-btn" onClick={openModal}>
                Buy Now →
            </button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 className="modal-title">Store Contact Details</h3>
                        <p className="modal-text">📧 Email: contact@store.com</p>
                        <p className="modal-text">📱 Phone: +91 98765 43210</p>
                        <button className="close-btn" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
