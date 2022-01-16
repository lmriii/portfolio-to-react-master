import React from 'react';
import { Col, Nav, Navbar, NavItem, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';



function Footer() {

    return (
        <footer
            className="site-footer"
            style={{
                marginTop: "0",
                textAlign: "center",
                backgroundColor: "rgba(129, 129, 129, .9)",
                color: "white",
            }}>
            <div className="container">
                <Row>
                    <Col>
                        <ul className="list-unstyled">
                            <Navbar>
                                <Nav
                                    navbar>
                                    <Row>

                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    style={{ color: 'white' }}
                                                    className="nav-link"
                                                    to='/'>
                                                    Home
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    style={{ color: 'white' }}
                                                    className="nav-link"
                                                    to='/about'>
                                                    About
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    style={{ color: 'white' }}
                                                    className="nav-link"
                                                    to='/contact'>
                                                    Contact
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    className="nav-link"
                                                    to='/maternity'
                                                    style={{ color: 'white' }}>
                                                    Maternity
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    className="nav-link"
                                                    to='/family'
                                                    style={{ color: 'white' }}>
                                                    Family
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                        <Col>
                                            <NavItem>
                                                <NavLink
                                                    className="nav-link"
                                                    to='/newborn'
                                                    style={{ color: 'white' }}>
                                                    Newborn
                                                </NavLink>
                                            </NavItem>
                                        </Col>
                                    </Row>
                                </Nav>
                            </Navbar>

                        </ul>
                    </Col>
                    <Col>
                        <div style={{ marginTop: 15 }}>
                            <SocialIcon
                                url="https://www.instagram.com/koelmemoriesphotography/"
                                style={{
                                    marginLeft: 10,
                                    height: 35,
                                    width: 35
                                }}
                                fgColor='#D3C5B4'
                                target= '_blank'
                            />
                            <SocialIcon
                                url="https://www.facebook.com/KoelMemoriesPhotography"
                                style={{
                                    marginLeft: 10,
                                    height: 35,
                                    width: 35
                                }}
                                fgColor='#D3C5B4'
                                target= '_blank'
                            />
                            <SocialIcon
                                url="mailto:koelmemoriesphotography@gmail.com"
                                
                                style={{
                                    marginLeft: 10,
                                    height: 35,
                                    width: 35
                                }}
                                fgColor='#D3C5B4'
                                bgColor='black'
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;