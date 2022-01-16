import React from "react";
import Footer from './Footer'
import HeroCarousel from "./HeroCarousel";
import Hero from "./Hero";
import { Col, Row } from "reactstrap";


function Home() {
    return (
        <>
            <Hero />
            <h1 style={{
                marginTop: '50px'
            }} >Freezing Moments in Time with Pictures</h1>
            <HeroCarousel />
            <Row className='row justify-content-center mt-5'>
                <Col className='col-md-8'>
                    <h2>
                        Photography <sub>definition</sub> - 
                    </h2>
                    <h4>the art of freezing a moment in time, while the time itself moves on, and the moment disappears.</h4>
                </Col>
            </Row>
            <Footer />
        </>
    );
}

export default Home;
