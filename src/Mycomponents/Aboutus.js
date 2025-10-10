import React from 'react';
import './styles/About.css';

export default function Aboutus() {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <section className="hero-section">
                <img src="headerimg.jpeg" alt="Jau Kandhei Bahaghara" className="hero-image" />
                <div className="hero-text">
                    <p>
                        {/* Jau Kandhei Bahaghara The Doll Marriage of Odisha */}
                    </p>
                </div>
            </section>

            {/* Description Section */}
            <section className="about-content">
                <p>
                    Jau Kandhei Bahaghara is one of the most charming folk traditions of Odisha,
                    where dolls (kandhei), usually handcrafted from wood or clay, are married in a
                    symbolic wedding ceremony. This playful custom, deeply rooted in Odia culture,
                    reflects the essence of community life, childhood creativity, and the importance
                    of rituals in everyday celebrations.
                </p>
                <p>
                    Traditionally, children would gather to create miniature weddings, imitating the
                    grandeur of real Odia marriages. From barajatri (wedding procession) and
                    kanyadaan (giving away the bride) to havan (sacred fire rituals), every step is
                    performed with joy, laughter, and imagination. Songs, dances, and folk games
                    often accompany the ceremony, turning it into a lively festival of togetherness.
                </p>

                {/* Image Grid */}
                <div className="image-grid">
                    <img src="img1.jpg" alt="Jau Kandhei 1" />
                    <img src="img2.jpg" alt="Jau Kandhei 2" />
                    <img src="img3.jpg" alt="Jau Kandhei 3" />
                    <img src="img4.jpg" alt="Jau Kandhei 4" />
                </div>

                <h3>
                    Today, Jau Kandhei Bahaghara is more than just a game. It has become a way to:
                </h3>
                <ul>
                    <li>Preserve Odia heritage and showcase traditional rituals.</li>
                    <li>Promote folk art, especially wooden and clay doll-making.</li>
                    <li>Bring communities together through cultural events and fairs.</li>
                    <li>
                        Educate children about values of love, unity, and traditions in a fun way.
                    </li>
                </ul>

                <p className="closing-text">
                    This unique tradition beautifully blends innocence, artistry, and culture,
                    reminding us that even simple dolls can carry the weight of age-old customs and
                    timeless joy.
                </p>

                {/* Bottom Gallery */}
                <div className="image-grid bottom-gallery">
                    <img src="img5.jpg" alt="Performance 1" />
                    <img src="img6.jpg" alt="Performance 2" />
                    <img src="img7.jpg" alt="Performance 3" />
                </div>
            </section>
        </div>
    );
}
