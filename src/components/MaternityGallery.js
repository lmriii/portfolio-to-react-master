import React from "react";
import { Card, CardImg, CardColumns, Row, Col } from 'reactstrap';
import { maternity } from "../resources/photosMaternity";
import ScrollButton from "./ScrollButton";
import { FadeTransform } from 'react-animation-components';
import Footer from "./Footer";


// Simple card element displaying images
class Maternity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matPhotos: maternity
        }
    }
    render() {
        const maternityCard = this.state.matPhotos.map(
            photo =>
                <Card>
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
                    duration='1500'
                >
                    <Row style={{
                        marginTop: '50px'
                    }} className='justify-content-center'
                    >
                        <Col lg='8'>
                            <h1>Maternity Photos</h1>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">Everything grows rounder and wider and weirder, and I sit here in the middle of it all and wonder who in the world you will turn out to be.</p>
                                <footer className="blockquote-footer">Carrie Fisher</footer>
                            </blockquote>
                            <blockquote className="blockquote">
                                <p className="mt-5 mb-0">A baby will make love stronger, days shorter, nights longer, bankroll smaller, home happier, clothes shabbier, the past forgotten and the future worth living for.</p>
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
                        className="mx-auto"
                    >
                        <CardColumns>
                            {maternityCard}
                        </CardColumns>
                        <ScrollButton />
                    </Col>
                </Row>
                <Footer />
            </>
        )
    }
}

export default Maternity;