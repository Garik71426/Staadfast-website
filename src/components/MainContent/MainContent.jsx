import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import './MainContent.scss';

const MainContent = () => {
    return (
        <div id="sf-main">
            <div className="main-bg-image"></div>
            <div className="main-content">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>We Are Web & Mobile App Development Company</h1>
                            <div className="heading-separator"></div>
                            <h4>Software solutions with best possible options</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg='12'>
                            <div className="check-portfolio">
                                <a href="#portfolio" data-scroll-on-click className="btn btn-default">OUR WORK</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MainContent;