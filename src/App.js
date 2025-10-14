import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Header from './Mycomponents/Header';
//import ContactPage from "./pages/ContactPage";
import mediacenter from './pages/mediacenter';
import Programs from './Mycomponents/Programs';
import performingarts from './pages/performingarts';
import Craftmenship from './pages/Craftmenship';
import SocialWork from './pages/SocialWork';
import community from './pages/community';
import Shop from './pages/Shop';

function App() {
    const navLinks = [
        { name: 'Home', path: '/', type: 'route' },
        { name: 'About', path: '/about', type: 'route' },
        { name: 'Our Work', path: '/', type: 'section', sectionId: 'programs' },
        { name: 'Events', path: '/', type: 'section', sectionId: 'events' },
        { name: 'Media', path: '/media', type: 'route' },
        { name: 'Shop', path: '/shop', type: 'route' },
    ];

    return (
        <div className="App">
            <BrowserRouter>
                <Header links={navLinks} />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about" Component={AboutUs} />
                    <Route path="/media" Component={mediacenter} />
                    <Route path="/ourwork" Component={Programs} />
                    {/* Program routes */}
                    <Route path="/performingarts" Component={performingarts} />
                    <Route path="/shop" Component={Shop} />
                    <Route path="/craftmenship" Component={Craftmenship} />
                    <Route path="/socialwork" Component={SocialWork} />
                    <Route path="/community" Component={community} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
