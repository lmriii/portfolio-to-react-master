import React, { Component } from 'react';
import { Button, Label, Col, Row } from 'reactstrap';
import logo from '../resources/logo.png';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { SocialIcon } from 'react-social-icons';
import Footer from './Footer';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(val);

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <>
                <div className="container">
                    <Row className="mt-5 row">
                        <Col className="col">
                            <h2>Let's Connect</h2>
                            <hr />
                        </Col>
                    </Row>
                    <Row className="mx-auto row row-content align-items-center">
                        
                        <Col className="col-sm-4">
                            
                            <a
                                href='https://www.instagram.com/koelmemoriesphotography/'
                                target='_blank'
                                rel="noreferrer">
                                <img
                                    src={logo}
                                    height="100"
                                    width="100"
                                    alt="Koel Memories Logo"
                                    className="rounded-circle" />
                            </a>
                        </Col>
                        <Col className="col-4">
                            <SocialIcon
                                url="https://www.instagram.com/koelmemoriesphotography/"
                                style={{
                                    marginLeft: 10,
                                    height: 65,
                                    width: 65
                                }}
                                fgColor='#D3C5B4'
                                target='_blank'
                            />
                            <SocialIcon
                                url="https://www.facebook.com/KoelMemoriesPhotography"
                                style={{
                                    marginLeft: 10,
                                    height: 65,
                                    width: 65
                                }}
                                fgColor='#D3C5B4'
                                target='_blank'
                            />
                            <SocialIcon
                                url="mailto:koelmemoriesphotography@gmail.com"
                                style={{
                                    marginLeft: 10,
                                    height: 65,
                                    width: 65
                                }}
                                fgColor='#D3C5B4'
                                bgColor='black'
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5 row row-content">
                        <Col className="col-12">
                            <h2>Tell me a little bit about your photography needs</h2>
                            <hr />
                        </Col>
                        <Col className="col-md-10">
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className="form-group">

                                </Row>
                                <Row className='form-group'>
                                    <Col md={{ size: 3, offset: 2 }}><strong>Select photography needs</strong></Col>
                                    <Col md={3}> {/*eslint-disable-next-line*/}
                                        <Control.select model=".photoType" name="photoType"
                                            className="form-control">
                                            <option>Family</option>
                                            <option>Newborn & Maternity</option>
                                            <option>Elopements</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className='text-danger'
                                            model='.firstName'
                                            show='touched'
                                            component='div'
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className='text-danger'
                                            model='.lastName'
                                            show='touched'
                                            component='div'
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(10),
                                                maxLength: maxLength(15),
                                                isNumber
                                            }}
                                        />
                                        <Errors
                                            className='text-danger'
                                            model='.phoneNum'
                                            show='touched'
                                            component='div'
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 10 numbers',
                                                maxLength: 'Must be 15 numbers or less',
                                                isNumber: 'Must be a number'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors
                                            className='text-danger'
                                            model='.email'
                                            show='touched'
                                            component='div'
                                            messages={{
                                                required: 'Required',
                                                validEmail: 'Invalid email address'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="referralname" md={2}>Referred by <small>(optional)</small></Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.text model=".referralname" id="referralname" name="referralname"
                                            placeholder="Name"
                                            className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="needs" md={2}>Your Photography Needs</Label>
                                    <Col md={10}> {/* eslint-disable-next-line */}
                                        <Control.textarea model=".needs" id="needs" name="needs"
                                            rows="12"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(20)
                                            }}
                                        />
                                        <Errors className='text-danger'
                                            model='.needs'
                                            show='touched'
                                            component='div'
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 20 characters'
                                            }} />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Send Contact Form
                                        </Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </Col>
                    </Row>
                </div>
                <Footer />
            </>
        );
    }
}

export default Contact;