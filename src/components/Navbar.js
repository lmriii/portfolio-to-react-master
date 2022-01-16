import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import '../App.css';
import { NavLink } from 'react-router-dom';
import logo from '../resources/new-logo.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar
                    light
                    expand="md"
                    style={{
                        marginTop: "0",
                        textAlign: "center",
                        backgroundColor: "rgba(129, 129, 129, .9)",
                        color: "white",
                        height: "55px"
                    }}>
                    <div className="container">
                        <NavbarBrand
                            className="mr-auto"
                            href="/"><img src={logo}
                                height="65"
                                width="65"
                                alt="Koel Memories Logo"
                                className="rounded-circle"
                            />
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={this.toggleNav}
                        />
                        <Collapse
                            isOpen={this.state.isNavOpen}
                            navbar
                        >
                            <Nav
                                navbar>
                                <NavItem>
                                    <NavLink
                                        style={{ color: 'white' }}
                                        className="nav-link"
                                        to='/'>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/about'
                                        style={{ color: 'white' }}>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/contact'
                                        style={{ color: 'white' }}>
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/maternity'
                                        style={{ color: 'white' }}>
                                        Maternity
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/family'
                                        style={{ color: 'white' }}>
                                        Family
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        to='/newborn'
                                        style={{ color: 'white' }}>
                                        Newborn
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Navigation;