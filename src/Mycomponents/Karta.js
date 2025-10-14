import React, { useState, useRef } from "react";
import "./styles/Karta.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import KartaCards from "./KartaCards";

const cards = [
  { 
    id: 1, name: "Exotic Blossom", 
    description: "A rare and vibrant flower that adds elegance to any garden.", 
    startDate: "2025-01-10", 
    endDate: "2025-12-31", 
    location: "Bhubaneswar, Odisha", 
    imgs: ["https://tse4.mm.bing.net/th/id/OIP.RG58DaO7kXIPA2oTSLS6kAHaE8?pid=Api&P=0&h=180"] 
  },

  { 
    id: 2, name: "Sunrise Garden",
     description: "A peaceful garden filled with sunshine and serenity.", 
     startDate: "2025-02-15",
      endDate: "2025-08-15", 
      location: "Puri, Odisha",
       imgs: ["https://wallpaperaccess.com/full/1238364.jpg"] 
  },

  { 
    id: 3, name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

  { 
    id: 4, name: "Blooming Beauty",
     description: "The perfect blend of nature’s charm and vibrant energy.", 
     startDate: "2025-04-10", 
     endDate: "2025-09-20",
    location: "Rourkela, Odisha",
     imgs: ["https://youmeandtrends.com/wp-content/uploads/2018/03/most-beautiful-flower-wallpaper-world-colourful-4-desktop-worlds-top-beautiful-flowers-images-photos-with-most-flower-wallpaper-world-colourful-high-quality-for-computer-colorful-latest.jpg"] 
  },

   { 
    id: 5, 
    name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 6,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 7,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 8,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 9,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 10, 
    name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 11, 
    name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 12,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 13, 
    name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

   { 
    id: 14,
     name: "Petal Paradise",
     description: "An enchanting display of colorful flowers from around the world.", 
     startDate: "2025-03-01", 
     endDate: "2025-10-01",
      location: "Cuttack, Odisha",
      imgs: ["https://webneel.com/wallpaper/sites/default/files/images/01-2014/2-flower-wallpaper.jpg"] 
  },

 
];

export default function Karta() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = [4, 4, 4, 2]; // 4 slides
  const totalSlides = cardsPerSlide.length;
  const sliderRef = useRef(null);

  const scrollToSlide = (index) => {
    const cardWidth = sliderRef.current.children[0].offsetWidth + 25; // width + gap
    const offset = cardsPerSlide.slice(0, index).reduce((a, b) => a + b, 0) * cardWidth;
    sliderRef.current.scrollTo({ left: offset, behavior: "smooth" });
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % totalSlides;
    setCurrentSlide(newIndex);
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
    scrollToSlide(newIndex);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  return (
    <div className="stories-section">
      <h2 className="stories-title">Karta</h2>
      <div className="underline"></div>

      <div className="carousel-container">
        <button className="arrow-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="card-slider" ref={sliderRef}>
          {cards.map((card) => (
            <KartaCards key={card.id} cards={card} />
          ))}
        </div>

        <button className="arrow-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
