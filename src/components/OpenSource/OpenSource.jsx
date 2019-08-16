import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SectionHeading from './../SectionHeading';
import Source from './Source';

import './OpenSource.scss';

const opensources = [
    {
        title: 'zeronode',
        logo: 'img/zeronode.png',
        description: 'Application backends are becomeing complex these days and there are...',
        microserviceImg: 'img/microservices.png',
        twitter: 'https://twitter.com/Steadfast_Tech',
        github: 'https://github.com/sfast/zeronode',
        npm: 'https://www.npmjs.com/package/zeronode'
    },
    {
        title: 'opensource1',
        logo: 'img/zeronode.png',
        description: 'Application backends are becomeing complex these days and there are...',
        microserviceImg: 'img/microservices.png',
        twitter: 'https://twitter.com/Steadfast_Tech',
        github: 'https://github.com/sfast/zeronode',
        npm: 'https://www.npmjs.com/package/zeronode'
    },
    {
        title: 'opensource2',
        logo: 'img/zeronode.png',
        description: 'Application backends are becomeing complex these days and there are...',
        microserviceImg: 'img/microservices.png',
        twitter: 'https://twitter.com/Steadfast_Tech',
        github: 'https://github.com/sfast/zeronode',
        npm: 'https://www.npmjs.com/package/zeronode'
    }
];

const OpenSource = ({ ...props }) => {
    return (
        <section id='sf-opensources' className='section' style={{ backgroundColor: 'rgb(248, 248, 248)' }} {...props}>
            <Container>
                <Row>
                    <Col lg={12} className='text-center'>
                        <SectionHeading
                            title = 'Open Sources'
                            content = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias culpa, delectus neque vel nobis perferendis magni nam aliquam incidunt minus?'
                        />
                    </Col>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                    {
                        opensources.map(item => <Source source={item} key={item.title} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default OpenSource;