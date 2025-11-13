import React from 'react';
import '../Mycomponents/styles/Craftmenship.css';

export default function PerformingArts() {
    const images = [
        '/shop/craft1.jpeg',
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

    return (
        <section className="craftsmanship-section">
            <div className="carousel-overlay"></div>
            <div className="carousel-container">
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {images.concat(images).map((img, idx) => (
                            <div key={idx} className="carousel-slide">
                                <img src={img} alt={`Craft ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="performing-arts-content">
                <h1>CRAFTMANSHIP</h1>
                <div className="underline"></div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate
                    ipsa iure perferendis similique. Labore provident nisi architecto corrupti illo
                    nesciunt debitis amet, quam cum rerum obcaecati! Possimus, ipsa eveniet?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nemo eligendi
                    consectetur, tempore rerum perferendis quae nobis quibusdam doloremque eos eius
                    architecto libero aliquam autem. Animi neque non labore expedita!
                </p>
            </div>
        </section>
    );
}
