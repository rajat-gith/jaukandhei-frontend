import React from "react";
import "./styles/Body1.css"; // optional: for styling
export default function Body1() {
	return (
		<div>
			{/* Intro Section */}
			<section className="intro-section">
				{/* Left Content */}
				<div className="intro-text">
					<h1>
						Jau Kandhei
						<br />
						Bahaghara
					</h1>
					<div className="orange-line"></div>
					<h2>Celebrating Tradition</h2>
					<p id="short-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia des. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et
					</p>

					<a className="read-more" id="toggle-btn" href="#">
						Read more &gt;
					</a>
				</div>

				{/* Right Image */}
				<div className="intro-image">
					<div className="intro-image1">
						<img src="karta1.jpeg" alt="Community Collage" />
					</div>
					<div className="intro-image2">
						<img src="karta2.jpeg" alt="Community Collage" />
					</div>
				</div>
			</section>

			{/* Info Box */}
			<div className="info-box">
				<div className="black-box"></div>
				<p>
					The President of the Jau Kandhei Bhaghara Community is the
					guiding force behind the revival and promotion of this
					unique folk tradition. With deep respect for our cultural
					roots, the President leads initiatives to preserve the art
					of clay dolls and traditional wedding dramas, ensuring that
					the richness of our heritage is passed on to future
					generations. The President of the Jau Kandhei Bahaghara
					Community is the guiding force behind the revival and
					promotion of this unique folk tradition. With deep respect
					for our cultural roots, the President leads initiatives to
					preserve the art of clay dolls and traditional wedding
					dramas, ensuring that the richness of our heritage is passed
					on to future generations. By fostering awareness, organizing
					cultural events, and supporting local artisans, the
					President plays a key role in keeping this symbolic festival
					vibrant and relevant in today’s times.
				</p>
			</div>
		</div>
	);
}
