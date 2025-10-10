import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Mycomponents/styles/performingarts.css';

export default function PerformingArts() {
    const leftImages = [
        '/dance1.jpg',
        '/dance2.jpg',
        '/dance3.jpeg',
        '/dance9.jpg',
        '/dance7.jpeg',
        '/dance11.jpg',
    ];

    const rightImages = [
        '/dance5.jpeg',
        '/dance4.jpeg',
        '/dance6.jpg',
        '/dance8.jpeg',
        '/dance10.jpg',
        '/dance12.jpg',
    ];

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        swipe: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 3000,
                },
            },
        ],
    };

    return (
        <>
            <div className="performing-arts-container">
                <div className="content-wrapper">
                    <section className="main-section">
                        {/* Text Section */}
                        <div className="text-section">
                            <div className="text-content">
                                <h1 className="main-title">REVIVING PERFORMING ARTS</h1>
                                <div className="description">
                                    <p>
                                        The Jau Kandhei Bahaghara Community is deeply committed to
                                        preserving and promoting the traditional performing arts of
                                        Odisha. With rapid modernization, many folk dances and
                                        dramas were losing their identity, but this community has
                                        taken the initiative to revive and celebrate them. They
                                        focus on highlighting age-old traditions like Pala,
                                        Daskathia, Gotipua, Jatra, and various regional folk dances
                                        that reflect the cultural soul of Odisha.
                                    </p>
                                    <p>
                                        To encourage these art forms, the community organizes
                                        festivals, stage performances, and cultural gatherings where
                                        local artists get a chance to showcase their talents. They
                                        also arrange training workshops and awareness programs to
                                        involve younger generations, ensuring that these traditional
                                        skills are not forgotten but carried forward with pride.
                                        This creates both recognition and livelihood opportunities
                                        for the artists.
                                    </p>
                                    <p>
                                        Beyond entertainment, their efforts serve as a bridge
                                        between the past and present. By giving folk performers a
                                        platform and connecting audiences with Odisha's heritage,
                                        the Jau Kandhei Bahaghara Community instills cultural pride
                                        and strengthens community bonds. Their work keeps the spirit
                                        of Odisha's performing arts alive and inspires people to
                                        cherish and support their own traditions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="gallery-section">
                            {/* Left Slider */}
                            <div className="slider-container">
                                <Slider {...sliderSettings}>
                                    {leftImages.map((src, i) => (
                                        <div key={i} className="slide-wrapper">
                                            <div className="image-container">
                                                <img
                                                    src={src}
                                                    alt={`Performance ${i + 1}`}
                                                    className="slide-image"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            {/* Right Slider */}
                            <div className="slider-container">
                                <Slider {...sliderSettings}>
                                    {rightImages.map((src, i) => (
                                        <div key={i} className="slide-wrapper">
                                            <div className="image-container">
                                                <img
                                                    src={src}
                                                    alt={`Performance ${i + 1}`}
                                                    className="slide-image"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
