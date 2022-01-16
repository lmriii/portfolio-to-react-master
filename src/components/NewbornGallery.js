import React from "react";
import { Card, CardImg, CardColumns, Row, Col } from 'reactstrap';
import { newborn } from "../resources/photosNewborn";
import ScrollButton from "./ScrollButton";
import { FadeTransform } from 'react-animation-components';
import Footer from "./Footer";


// simple cards containing images
class Newborn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPhotos: newborn
        }
    }
    render() {
        const newbornCard = this.state.newPhotos.map(
            photo =>
                <Card>
                    <CardImg
                        top width="100%"
                        src={photo.url}
                        alt={photo.name}
                        key={photo.id}
                    />
                </Card>
        );

        return (
            <>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}
                    duration='1500'>
                    <Row style={{
                        marginTop: '50px'
                    }} className='justify-content-center'>
                        <Col lg='8'>
                            <h1>Newborn Photos</h1>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">A new baby is like the beginning of all things - wonder, hope, a dream of possibilities.</p>
                                <footer className="blockquote-footer">Eda LaShan</footer>
                            </blockquote>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">You are going to get advice from a lot of people, and you can take bits and pieces, but you know innately what your child needs. You should trust that.</p>
                                <footer className="blockquote-footer">Lucy Liu</footer>
                            </blockquote>
                        </Col>
                    </Row>
                </FadeTransform>
                <Row>
                    <Col
                        sm="12"
                        md={{ size: 10 }}
                        lg='11'
                        className="mx-auto"
                    >
                        <CardColumns>
                            {newbornCard}
                        </CardColumns>
                        <ScrollButton />
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}

export default Newborn;