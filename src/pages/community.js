import React from "react";
import "../Mycomponents/styles/community.css";

const Community = () => {
  return (
    <div className="community-page">
      <section className="community-section">
        <div className="community-content">
          <img
            src="/images/kinnar-group-1.jpg"
            alt="Kinnar Community Collaboration"
            className="community-image"
          />
          <div className="community-text">
            <h2>
              The Jau Kandhei Community’s Collaboration with the Kinnar Community
            </h2>
            <p>
              The Jau Kandhei Bahaghara community has collaborated with the Kinnar
              (transgender) community to promote social inclusion and cultural
              revival by engaging them in traditional folk arts, puppet-making,
              and performing arts. This collaboration provides members of the
              Kinnar community with platforms to showcase their talents, gain
              livelihood opportunities, and participate in cultural events,
              thereby helping break societal stigma and fostering acceptance,
              dignity, and mutual respect between diverse communities.
            </p>
          </div>
          <img
            src="kinnar-group-2.jpg"
            alt="Kinnar Community Performance"
            className="community-image"
          />
        </div>
      </section>

      <section className="community-section">
        <div className="community-content">
          <img
            src="drdo-collaboration-1.jpg"
            alt="DRDO Collaboration Group"
            className="community-image"
          />
          <div className="community-text">
            <h2>
              The Jau Kandhei Bahaghara community in collaboration with the DRDO
            </h2>
            <p>
              The Jau Kandhei Bahaghara community, in collaboration with the DRDO
              team and the Kinnar (transgender) community, has undertaken
              initiatives to promote social inclusion and cultural revival by
              involving Kinnar members in traditional folk arts, puppet-making,
              and performing arts. This joint effort not only provides them with
              platforms to showcase their talents and earn sustainable livelihoods
              but also works towards breaking societal stigma, fostering dignity,
              and building mutual respect between diverse communities through
              cultural and creative engagement.
            </p>
          </div>
          <img
            src="drdo-collaboration-2.jpg"
            alt="DRDO Collaboration Celebration"
            className="community-image"
          />
        </div>
      </section>

      <section className="community-section">
        <div className="community-content">
          <img
            src="marwadi-collaboration.jpg"
            alt="Marwadi Collaboration"
            className="community-image"
          />
          <div className="community-text">
            <h2>
              The Jau Kandhei Bahaghara community in collaboration with the
              Marwadi community of Balasore
            </h2>
            <p>
              This collaboration bridges communities through art, empathy, and
              shared cultural experiences. Together, they create opportunities for
              cross-community learning, sustainable livelihoods, and inclusive
              cultural growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
