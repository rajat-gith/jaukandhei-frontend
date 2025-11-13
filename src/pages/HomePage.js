import React from 'react';
import Body1 from '../Mycomponents/Body1';
import Programs from '../Mycomponents/Programs';
import Footer from '../Mycomponents/Footer';
import Karta from '../Mycomponents/Karta';
import Events from '../Mycomponents/Events';
import Info from '../Mycomponents/Info';
import Shop from '../Mycomponents/Shop';

function HomePage() {
    return (
        <div className="HomePage">
            <Body1 />
            <Info />
            <Programs />
            <Karta />
            <Events />
            <Shop/>
            <Footer />
        </div>
    );
}

export default HomePage;
