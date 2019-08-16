import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import GoogleApiWrapper from './Map';
import ContactUs from './ContactUs';
import SectionHeading from '../SectionHeading';
import Connect from './Connect';

import './Footer.scss';

const contacts = [
    {
        title: 'Come and meet us',
        icon: 'map-marker',
        content: '142, Boulevard Plaza, Aram Street 64',
        info: 'Yerevan, Armenia'
    },
    {
        title: 'Send us a message',
        icon: 'envelope-o',
        content: 'contact@steadfast.tech'
    },
    {
        title: 'Chat with us',
        icon: 'globe',
        content: 'www.steadfast.tech'
    }
];
const connect = [
    {
        href: 'https://www.facebook.com/techsteadfast',
        icon: 'facebook'
    },
    {
        href: 'https://www.linkedin.com/company/steadfast.tech',
        icon: 'linkedin'
    },
    {
        href: 'https://twitter.com/Steadfast_Tech',
        icon: 'twitter'
    }
];

const Footer = ({ ...props }) => {
    return (
        <footer id="sf-footer" style={ { backgroundColor: '#1f1f1f' } } {...props}>
            <section className="section" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <Container className='container'>
                    <Row className='row'>
                        <Col lg = {12} align = 'center'>
                            <SectionHeading
                                title='Get in touch'
                                content='We design, build and support websites and apps for clients worldwide. We make your business stand out. Interested? Lets chat.'
                            />
                            <Row className="row">
                                {contacts.map((item, index) => <ContactUs key={`contact-${index}`} item={item} />)}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="footer-form" style={ { backgroundColor: '#ffffff' } }>
                <div className="footer-map">
                    <GoogleApiWrapper />
                </div>
            </div>
            <div className="upper-footer">
                <Container style = {{ width: '90%' }}>
                    <Row>
                        <Col lg = {5} md = {5}>
                            <div className="footer-widget">
                                <h5>Steadfast</h5>
                                <div className="content-box">
                                    We ensure that the web services your customers, staff and other systems rely on are steadfast.
                                </div>
                            </div>
                        </Col>
                        <Col lg = {2} md = {2}></Col>
                        <Col lg = {5} md = {5}>
                            <div className="footer-widget info">
                                <h5>GET CONNECTED</h5>
                                <Row className="row">
                                    <Col className="col-lg-12">
                                        <ul>
                                            {
                                                connect.map(item =>
                                                    <Connect key={item.icon} connect={item} />
                                                )
                                            }
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row className="lower-footer">
                <Container>
                    <Col md = {12} className='text-center'>
                        <span className='content-box'>Copyright 2017 - Steadfast LLC. All rights reserved.</span>
                    </Col>
                </Container>
            </Row>
        </footer>
    );
};

export default Footer;