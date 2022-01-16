import React from "react";
import { Jumbotron, Row, Col } from 'reactstrap';
import background from '../resources/maternity2.jpg';
import '../App.css';

function Hero() {
    return (
        <>
            <Jumbotron
                fluid
                style={{
                    backgroundImage: 'URL(' + background + ')',
                    backgroundSize: 'cover',
                    height: '100vh',
                    marginBottom: '0'
                }}>
                <div className="container">
                    <Row>
                        <Col>
                            <p
                                style={{
                                    fontFamily: "'tangerine', cursive",
                                    fontSize: "5.5rem",
                                    textAlign: "center",
                                    backgroundColor: "rgba(128, 128, 128, .1)",
                                    paddingTop: "3rem",
                                    color: "white",
                                    textShadow: "2px 2px rgba(128, 128, 128, .3)"
                                }}>
                                Koel Memories Photography
                            </p>
                        </Col>
                    </Row>
                </div>
            </Jumbotron>



        </>
    );
}

export default Hero;