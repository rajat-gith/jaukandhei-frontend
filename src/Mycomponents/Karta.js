import React, { useState, useRef, useEffect } from 'react';
import './styles/Karta.css';
import { FaChevronLeft, FaChevronRight, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const cards = [
    {
        id: 1,
        name: 'Exotic Blossom',
        description: 'A rare and vibrant flower that adds elegance to any garden.',
        startDate: '2025-01-10',
        endDate: '2025-12-31',
        location: 'Bhubaneswar, Odisha',
        imgs: ['https://tse4.mm.bing.net/th/id/OIP.RG58DaO7kXIPA2oTSLS6kAHaE8?pid=Api&P=0&h=180'],
    },
    {
        id: 2,
        name: 'Sunrise Garden',
        description: 'A peaceful garden filled with sunshine and serenity.',
        startDate: '2025-02-15',
        endDate: '2025-08-15',
        location: 'Puri, Odisha',
        imgs: ['https://wallpaperaccess.com/full/1238364.jpg'],
    },
    {
        id: 3,
        name: 'Petal Paradise',
        description: 'An enchanting display of colorful flowers from around the world.',
        startDate: '2025-03-01',
        endDate: '2025-10-01',
        location: 'Cuttack, Odisha',
        imgs: [
            'https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg',
        ],
    },
    {
        id: 4,
        name: 'Blooming Beauty',
        description: "The perfect blend of nature's charm and vibrant energy.",
        startDate: '2025-04-10',
        endDate: '2025-09-20',
        location: 'Rourkela, Odisha',
        imgs: [
            'https://youmeandtrends.com/wp-content/uploads/2018/03/most-beautiful-flower-wallpaper-world-colourful-4-desktop-worlds-top-beautiful-flowers-images-photos-with-most-flower-wallpaper-world-colourful-high-quality-for-computer-colorful-latest.jpg',
        ],
    },
    {
        id: 1,
        name: 'Exotic Blossom',
        description: 'A rare and vibrant flower that adds elegance to any garden.',
        startDate: '2025-01-10',
        endDate: '2025-12-31',
        location: 'Bhubaneswar, Odisha',
        imgs: ['https://tse4.mm.bing.net/th/id/OIP.RG58DaO7kXIPA2oTSLS6kAHaE8?pid=Api&P=0&h=180'],
    },
    {
        id: 2,
        name: 'Sunrise Garden',
        description: 'A peaceful garden filled with sunshine and serenity.',
        startDate: '2025-02-15',
        endDate: '2025-08-15',
        location: 'Puri, Odisha',
        imgs: ['https://wallpaperaccess.com/full/1238364.jpg'],
    },
    {
        id: 3,
        name: 'Petal Paradise',
        description: 'An enchanting display of colorful flowers from around the world.',
        startDate: '2025-03-01',
        endDate: '2025-10-01',
        location: 'Cuttack, Odisha',
        imgs: [
            'https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg',
        ],
    },
    {
        id: 4,
        name: 'Blooming Beauty',
        description: "The perfect blend of nature's charm and vibrant energy.",
        startDate: '2025-04-10',
        endDate: '2025-09-20',
        location: 'Rourkela, Odisha',
        imgs: [
            'https://youmeandtrends.com/wp-content/uploads/2018/03/most-beautiful-flower-wallpaper-world-colourful-4-desktop-worlds-top-beautiful-flowers-images-photos-with-most-flower-wallpaper-world-colourful-high-quality-for-computer-colorful-latest.jpg',
        ],
    },
];

const KartaCard = ({ card }) => (
    <div className="karta-card">
        <div className="karta-card-image">
            <img src={card.imgs[0]} alt={card.name} />
        </div>
        <div className="karta-card-content">
            <h3 className="karta-card-title">{card.name}</h3>
            <p className="karta-card-description">{card.description}</p>
            <div className="karta-card-info">
                <div className="karta-card-info-item">
                    <FaCalendar className="karta-icon" />
                    <span>
                        {card.startDate} - {card.endDate}
                    </span>
                </div>
                <div className="karta-card-info-item">
                    <FaMapMarkerAlt className="karta-icon" />
                    <span>{card.location}</span>
                </div>
            </div>
        </div>
    </div>
);

export default function Karta() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    const CARDS_PER_VIEW = 4; // Number of cards visible at once on desktop
    const totalSlides = Math.ceil(cards.length / CARDS_PER_VIEW);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Track scroll position to update dots
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || isMobile) return;

        const handleScroll = () => {
            const cardWidth = slider.children[0].offsetWidth + 25;
            const scrollLeft = slider.scrollLeft;
            const slideWidth = cardWidth * CARDS_PER_VIEW;

            // Calculate which slide we're on based on scroll position
            const detectedSlide = Math.round(scrollLeft / slideWidth);
            setCurrentSlide(Math.min(detectedSlide, totalSlides - 1));
        };

        slider.addEventListener('scroll', handleScroll);
        return () => slider.removeEventListener('scroll', handleScroll);
    }, [isMobile, totalSlides]);

    const scrollToSlide = (index) => {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 25;
        const offset = index * CARDS_PER_VIEW * cardWidth;
        sliderRef.current.scrollTo({ left: offset, behavior: 'smooth' });
    };

    const nextSlide = () => {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 25;
        if (isMobile) {
            sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        } else {
            const newIndex = (currentSlide + 1) % totalSlides;
            scrollToSlide(newIndex);
        }
    };

    const prevSlide = () => {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 25;
        if (isMobile) {
            sliderRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        } else {
            const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
            scrollToSlide(newIndex);
        }
    };

    const handleDotClick = (index) => {
        scrollToSlide(index);
    };

    return (
        <section className="stories-section">
            <h2 className="stories-title">KARTA</h2>
            <div className="underline"></div>

            <div className="carousel-container">
                <button className="arrow-btn left" onClick={prevSlide} aria-label="Previous">
                    <FaChevronLeft />
                </button>

                <div className="card-slider" ref={sliderRef}>
                    {cards.map((card) => (
                        <KartaCard key={card.id} card={card} />
                    ))}
                </div>

                <button className="arrow-btn right" onClick={nextSlide} aria-label="Next">
                    <FaChevronRight />
                </button>
            </div>

            {!isMobile && totalSlides > 1 && (
                <div className="dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            )}
        </section>
    );
}
