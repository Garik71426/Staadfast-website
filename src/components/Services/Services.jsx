import React from 'react';

import Service from './Service';
import ServiceItem from './ServiceItem';
import { Container, Row, Col } from 'reactstrap';

import './Services.scss';

const technologies = ['Javascript', 'Html 5', 'CSS 3', 'Socket.io', 'Angular JS', 'Sass', 'React', 'Mongo DB', 'Kafka', 'Node JS', 'Less', 'React Native', 'Redis', 'Nginx', 'Docker', 'Grafana', 'InfluxDB', 'Cassandra', 'Aerospike', 'Cordova', 'RabbitMQ', 'ZeroMQ', 'Nats.io', 'Scala', 'Python', 'Jquery', 'Bootstrap', 'Native Script', 'Phonegap'];
const serviceListItems = [
    {
        id: 'web',
        title: 'High performance API development',
        content: 'We provide  well-structured API development and integration services. We integrate APIs for web, cloud, mobile applications, which provides high performance of your software applications.'
    }, {
        id: 'devops',
        title: 'Networking, load balancing and devops',
        content: 'We ensure  big data solutions and time series analytics that are scalable, inexpensive, and form the foundation for future business intelligence needs.'
    }, {
        id: 'web',
        title: 'Web apps and custom dashboards',
        content: 'We create customized web based software that can make your online business future ready. Cloud based computing is the thing of the future and early adopter of this technology will be ahead of the curve when it comes to going up against competitors.'
    }, {
        id: 'mobile',
        title: 'Hybrid mobile apps  and games',
        content: 'As a Mobile cross platform our Hybrid apps offer the portability of browser-based applications with the user experience of native applications and offer a more cost-effective rapid development alternative to native apps for most enterprises.'
    }, {
        id: 'design',
        title: 'UX and UI design',
        content: 'We create simple elegant UI/UX solutions that compel users to stay, to fill out forms, and to make purchases.We’ll help you create a memorable, positive environment that’ll set you up for success.'
    }
];

const Services = ({ ...props }) => {
    return (
        <section id="sf-service" className="section" style={{ backgroundColor: '#f8f8f8' }} {...props}>
            <Container>
                <Row>
                    <Col lg='4' md='12'>
                        <h2>Technologies we use</h2>
                        <div className='service-items-list'>
                            {
                                technologies.map((item, index) =>
                                    <Service key={`tech-${index}`} item={item} />
                                )
                            }
                        </div>
                    </Col>
                    <Col lg='8' md='12'>
                        <Row>
                            <Col lg='12' md='12'>
                                <div className="service-items-text-list">
                                    {
                                        serviceListItems.map((item, index) => 
                                            <ServiceItem key={index} item={item} />
                                        )
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Services;