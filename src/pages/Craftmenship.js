import React from 'react';
import Slider from 'react-slick';
import '../Mycomponents/styles/Craftmenship.css';

export default function PerformingArts() {
    const images = [
        '/craft1.jpeg',
        '/craft2.jpg',
        '/craft3.jpg',
        '/craft4.jpg',
        '/craft7.jpg',
        '/craft8.jpg',
        '/craft6.jpeg',
    ];

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        vertical: false,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 0, // makes it continuous
        speed: 5000, // adjust scroll speed
        cssEase: 'linear', // smooth linear motion
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        swipe: false, //
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    speed: 3000,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 3000,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 3000,
                },
            },
        ],
    };

    return (
        <div className="performing-arts-section">
            <div className="carousel-container">
                <Slider {...sliderSettings}>
                    {images.concat(images).map((img, idx) => (
                        <div key={idx} className="carousel-slide">
                            <img src={img} alt={`Craft ${idx}`} />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="performing-arts-content">
                <h1>CRAFTMANSHIP</h1>
                <div className="underline"></div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate
                    ipsa iure perferendis similique. Labore provident nisi architecto corrupti illo
                    nesciunt debitis amet, quam cum rerum obcaecati! Possimus, ipsa eveniet? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo eligendi
                    consectetur, tempore rerum perferendis quae nobis quibusdam doloremque eos eius
                    architecto libero aliquam autem. Animi neque non labore expedita!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate
                    ipsa iure perferendis similique. Labore provident nisi architecto corrupti illo
                    nesciunt debitis amet, quam cum rerum obcaecati! Possimus, ipsa eveniet? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo eligendi
                    consectetur, tempore rerum perferendis quae nobis quibusdam doloremque eos eius
                    architecto libero aliquam autem. Animi neque non labore expedita!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate
                    ipsa iure perferendis similique. Labore provident nisi architecto corrupti illo
                    nesciunt debitis amet, quam cum rerum obcaecati! Possimus, ipsa eveniet? Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo eligendi
                    consectetur, tempore rerum perferendis quae nobis quibusdam doloremque eos eius
                    architecto libero aliquam autem. Animi neque non labore expedita!
                </p>
            </div>
        </div>
    );
}
