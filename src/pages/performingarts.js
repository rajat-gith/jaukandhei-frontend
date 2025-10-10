import React from "react";
import Marquee from "react-fast-marquee";
import "../Mycomponents/styles/performingarts.css";

export default function PerformingArts() {
  return (
    <div className="craft-container">
      <section className="craft-content">
        {/* Left Text Section */}
        <div className="craft-text">
          <h1>REVIVING PERFORMING ARTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

     <div className="craft-gallery">
  {/* Column 1 */}
  <Marquee
    direction="up"
    speed={50}
    gradient={false}
    className="scroll-column1"
    pauseOnHover={true}
  >
    <div className="image-column1">
      <img src="/dance1.jpg" alt="Performance 1" />
      <img src="/dance2.jpg" alt="Performance 2" />
      <img src="/dance3.jpeg" alt="Performance 3" />
      <img src="/dance9.jpg" alt="Performance 9" />
      <img src="/dance7.jpeg" alt="Performance 7" />
      <img src="/dance11.jpg" alt="Performance 11" />
      <img src="/dance13.jpeg" alt="Performance 13" />
      <img src="/dance14.jpeg" alt="Performance 14" />
    </div>
  </Marquee>

  {/* Column 2 */}
  <Marquee
    direction="up"
    speed={60}
    gradient={false}
    className="scroll-column2"
    pauseOnHover={true}
  >
    <div className="image-column2">
      <img src="/dance5.jpeg" alt="Performance 5" />
      <img src="/dance4.jpeg" alt="Performance 4" />
      <img src="/dance6.jpg" alt="Performance 6" />
      <img src="/dance8.jpeg" alt="Performance 8" />
      <img src="/dance10.jpg" alt="Performance 10" />
      <img src="/dance12.jpg" alt="Performance 12" />
      <img src="/dance15.jpg" alt="Performance 15" />
    </div>
  </Marquee>
</div>
      </section>
    </div>
  );
}









