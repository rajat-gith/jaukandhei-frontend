import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Body1 from '../Mycomponents/Body1';
import Programs from '../Mycomponents/Programs';
import Footer from '../Mycomponents/Footer';

function HomePage() {
    return (
        <div className="HomePage">
            <Body1 />
            {/* ✅ Our Programs section */}
            <Programs />
            <Footer />
        </div>
    );
}

export default HomePage;
