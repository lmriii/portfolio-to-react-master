import React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Maternity from "./MaternityGallery";
import Family from "./FamilyGallery";
import Newborn from "./NewbornGallery";
import ScrollButton from "./ScrollButton";
import { FadeTransform } from 'react-animation-components';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs style={{
                    marginTop: '20px'
                }} className='justify-content-center m-4'>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Maternity Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Family Gallery
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Newborn Gallery
                        </NavLink>
                    </NavItem>
                </Nav>
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateX(90%)'
                    }}>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row style={{
                                marginTop: '50px'
                            }} className='justify-content-center'>
                                <Col lg='11'>
                                    <div><Maternity /></div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row style={{
                                marginTop: '50px'
                            }} className='justify-content-center'>
                                <Col lg='11'>
                                    <div><Family /></div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row style={{
                                marginTop: '50px'
                            }} className='justify-content-center'>
                                <Col lg='11'>
                                    <div><Newborn /></div>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </FadeTransform>
                <ScrollButton />
            </div>

        );
    }
}

export default Gallery;