import React, { useState } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';

import CircularButton from './CircularButton';

import './OpenSource.scss';

const Source = ({ source, ...props }) => {
    const [isOpen, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!isOpen);
    };

    return (
        <Col lg={2} xs={4} className='text-center' {...props} >
            <CircularButton onClick={onClick}/>
            <Modal isOpen={isOpen} toggle={onClick}>
                <ModalHeader toggle={onClick}>{source.title.toUpperCase()}</ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col sm={12} lg={5}>
                                <div className='modal-icon'>
                                    <img src={source.logo} alt='logo' />
                                    <h3>{source.title.toUpperCase()}</h3>
                                </div>
                                <div className='description'>
                                    <p>{source.description}</p>
                                </div>
                            </Col>
                            <Col className='modal-image' sm={12} lg={7}>
                                <img src={source.microserviceImg} alt='microoservices' width='80%' />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className='link-items'>
                                <ul>
                                    <li>
                                        <a href={source.twitter} rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-twitter' aria-hidden='true'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={source.npm} rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-npm' aria-hidden='true'>npm</i>
                                        </a>                                        
                                    </li>
                                    <li>
                                        <a href={source.github} rel='noopener noreferrer' target='_blank'>
                                            <i className='fa fa-github' aria-hidden='true'></i>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        </Col>
    );
};

export default Source;