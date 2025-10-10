import React, { useEffect, useRef } from "react";
import "../Mycomponents/styles/Craftmenship.css";

const PerformingArts = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollStep);
    };

    requestAnimationFrame(scrollStep);
  }, []);

  return (
    <div className="performing-arts-section">
      <div className="image-scroll-container" ref={scrollRef}>
        <div className="scroll-images">
         <img src="craft1.jpeg" alt="Craft 1" />
            <img src="craft2.jpg" alt="Craft 2" />
            <img src="craft3.jpg" alt="Craft 3" />
            <img src="craft4.jpg" alt="Craft 4" />
            <img src="craft7.jpg" alt="Craft 7" />
            <img src="craft8.jpg" alt="Craft 8" />
            <img src="craft6.jpeg" alt="Craft 6" />
              {/* Duplicate images for seamless looping */}
            <img src="craft1.jpeg" alt="Craft 1 duplicate" />
            <img src="craft2.jpg" alt="Craft 2 duplicate" />
            <img src="craft3.jpg" alt="Craft 3 duplicate" />
            <img src="craft4.jpg" alt="Craft 4 duplicate" />
            <img src="craft7.jpg" alt="Craft 7 duplicate" />
            <img src="craft6.jpeg" alt="Craft 6 duplicate" />
            <img src="craft8.jpg" alt="Craft 8 duplicate" />
          
          
          
        </div>
      </div>

      <div className="performing-arts-content">
        <h1>CRAFTMANSHIP</h1>
        <div className="underline"></div>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </div>
    </div>
  );
};

export default PerformingArts;