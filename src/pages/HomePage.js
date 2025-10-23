import React from 'react';
import Body1 from '../Mycomponents/Body1';
import Programs from '../Mycomponents/Programs';
import Footer from '../Mycomponents/Footer';
import Karta from '../Mycomponents/Karta';
import Events from '../Mycomponents/Events';

function HomePage() {
    return (
        <div className="HomePage">
            <Body1 />
            <Programs />
            <Karta />
            <Events />
            <Footer />
        </div>
    );
}

export default HomePage;
