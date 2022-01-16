import React from "react";
import Home from "./Home";
import Navigation from "./Navbar";
import Gallery from "./GalleryContainer";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from 'react-router-dom';
import Maternity from "./MaternityGallery";
import Newborn from "./NewbornGallery";
import Family from "./FamilyGallery";


class Main extends React.Component {

    render() {
        return (
            <div>

                <Navigation />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='maternity' element={<Maternity />} />
                    <Route path='family' element={<Family />} />
                    <Route path='newborn' element={<Newborn />} />
                </Routes>

            </div>
        )
    }
}

export default Main;