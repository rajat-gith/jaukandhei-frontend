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


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/about" Component={AboutUs} />
                    <Route path="/media" Component={mediacenter} />
                    <Route path="/ourwork" Component={Programs} />
                    {/* Program routes */}
                    <Route path="/performingarts" Component={performingarts} />
                    <Route path="/Craftmenship" Component={Craftmenship} />
                    <Route path="/SocialWork" Component={SocialWork} />
                    <Route path="/community" Component={community} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
