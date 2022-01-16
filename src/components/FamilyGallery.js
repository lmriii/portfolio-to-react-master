import React from "react";
import { Card, CardImg, CardColumns, Row, Col } from 'reactstrap';
import { family } from "../resources/photosFamily";
import ScrollButton from "./ScrollButton";
import { FadeTransform } from 'react-animation-components';
import Footer from "./Footer";

// The number of columns change by resizing the window
class Family extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            famPhotos: family
        }
    }
    render() {
        const familyCard = this.state.famPhotos.map(
            photo =>
                <Card className="col border border-dark m-0 p-0 mb-3">
                    <CardImg
                        top
                        width="100%"
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
                    <Row
                        style={{
                            marginTop: '50px'
                        }}
                        className='justify-content-center'>
                        <Col
                            lg='8'>
                            <h1>Family Photos</h1>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">Being a family means you are part of something very wonderful. It means you will love and be loved for the rest of your life.</p>
                                <footer className="blockquote-footer">Author Unknown</footer>
                            </blockquote>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">The love in our family runs strong and deep, leaving us memories to treasure and keep.</p>
                                <footer className="blockquote-footer">Author Unknown</footer>
                            </blockquote>
                        </Col>
                    </Row>
                </FadeTransform>
                <Row>
                    <Col
                        sm="12"
                        md={{ size: 10 }}
                        lg='11'
                        className="mx-auto">
                        <CardColumns>
                            {familyCard}
                        </CardColumns>
                        <ScrollButton />
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}

export default Family;