import React, { useState, useRef, useEffect } from 'react';
import './styles/Karta.css';
import { FaChevronLeft, FaChevronRight, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const cards = [
    {
        id: 1,
        name: 'Jayanta weds Usha',
        description:
            'Barakarta: Rabindra Jena and Subasini Jena. Kanyakarta: Bhagaban Mohini and Parivar.',
        tenure: '2011',
        endDate: '',
        location: 'Bhubaneswar, Odisha',
        imgs: ['/kartas/2011.jpg'],
    },
    {
        id: 2,
        name: 'Abhimanyu weds Akansha',
        description:
            'Barakarta: Upendra Patra and Kanchanabala Patra. Kanyakarta: Kaylashchandra Behera and Labanyabati Behera.',
        tenure: '2012',
        endDate: '',
        location: 'Puri, Odisha',
        imgs: ['/kartas/2012.jpg'],
    },
    {
        id: 3,
        name: 'Achyuta weds Malika',
        description: 'Barakarta: Dr.Rabinarayan Dash. Kanyakarta: Madhusudan Das and Sanjukta Das.',
        tenure: '2013',
        endDate: '',
        location: 'Cuttack, Odisha',
        imgs: ['/kartas/2013.jpg'],
    },
    {
        id: 4,
        name: 'Bhagiya weds Sariya',
        description:
            'Barakarta: Prof.Rabinarayana Dash. Kanyakarta: Jaminikanta Chand and Subashini Chand.',
        tenure: '2014',
        endDate: '',
        location: 'Rourkela, Odisha',
        imgs: ['/kartas/2014.jpg'],
    },
    {
        id: 5,
        name: 'Purrusottam weds Padmavati',
        description:
            'Barakarta: Ashoka Ku. Mahapatra and Rekha Mohapatra. Kanyakarta: Binoy Ku. Das and Anita Das.',
        tenure: '2015',
        endDate: '',
        location: 'Bhubaneswar, Odisha',
        imgs: ['/kartas/2015.jpg'],
    },
    {
        id: 6,
        name: 'Padmamali weds Parikhyit',
        description: 'Barakarta: Bimal Jena and Ranjita Das. Kanyakarta: Bimal Aas and Sindhu Sen.',
        tenure: '2016',
        endDate: '',
        location: 'Puri, Odisha',
        imgs: ['/kartas/2016.jpg'],
    },
    {
        id: 7,
        name: 'Taopoi weds Sumanta',
        description:
            'Barakarta: Pradip Bhowmik and Rini Bhowmik. Kanyakarta: Harmohan Dash and Subhalaxmi Dash.',
        tenure: '2017',
        endDate: '',
        location: 'Cuttack, Odisha',
        imgs: ['/kartas/2017.jpg'],
    },
    {
        id: 8,
        name: 'Siba weds Kalijai',
        description: 'Barakarta: Diabandhu Lenka. Kanyakarta: Mahendra nath Jena.',
        tenure: '2018',
        endDate: '',
        location: 'Rourkela, Odisha',
        imgs: ['/kartas/2018.jpg'],
    },
    {
        id: 9,
        name: 'Sankara weds Tusu',
        description:
            'Barakarta: Suranjana Mohapatra and Jhansi Das Mohapatra. Kanyakarta: Rajkishor Rana and Santilata Rana.',
        tenure: '2019',
        endDate: '',
        location: 'Bhubaneswar, Odisha',
        imgs: ['/kartas/2019.jpg'],
    },
    {
        id: 10,
        name: 'Sunrise Garden', // No data provided for 2020, reusing old placeholder
        description: 'A peaceful garden filled with sunshine and serenity.', // Reusing old description
        tenure: '2020',
        endDate: '',
        location: 'Puri, Odisha',
        imgs: ['/kartas/2020.jpg'],
    },
    {
        id: 11,
        name: 'Sambhunath weds Samalei',
        description:
            'Barakarta: Madanmohan Sahu and Sukanti Sahu. Kanyakarta: Bhabendranath dey and Kabita Dey.',
        tenure: '2021',
        endDate: '',
        location: 'Cuttack, Odisha',
        imgs: ['/kartas/2021.jpg'],
    },
    {
        id: 12,
        name: 'Bara weds Kaniya',
        description:
            'Barakarta: Kailash Chandra Parida and Supriya Parida. Kanyakarta: Madan Saraogi and Anju Saraogi.',
        tenure: '2022',
        endDate: '',
        location: 'Rourkela, Odisha',
        imgs: ['/kartas/2022.jpg'],
    },
    {
        id: 13,
        name: 'Exotic Blossom', // No data provided for 2023, reusing old placeholder
        description: 'A rare and vibrant flower that adds elegance to any garden.', // Reusing old description
        tenure: '2023',
        endDate: '',
        location: 'Bhubaneswar, Odisha',
        imgs: ['/kartas/2023.jpg'],
    },
    {
        id: 14,
        name: 'Sunrise Garden', // No Bara/Kanya names provided for 2024, reusing old placeholder
        description:
            'Barakarta: Kalikinkar Das and Soubhagini Mishra. Kanyakarta: Pankaj Ku. Jena and Suchitra Jena.', // Using available info as description
        tenure: '2024',
        endDate: '',
        location: 'Puri, Odisha',
        imgs: ['/kartas/2024.jpg'],
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
                    <span>{card.tenure}</span>
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
