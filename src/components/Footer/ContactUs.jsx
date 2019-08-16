import React from 'react';

import { Col } from 'reactstrap';

const ContactUs = ({ item, ...props }) => {
    return (
        <Col lg = {4} className='get-in-touch-item' {...props}>
            <div>{item.title}</div>
            <div className='content-box'>
                <div><i className={`fa fa-${item.icon}`} aria-hidden='true'></i>{` ${item.content}`}</div>
                {item.info && <div>{item.info}</div>}
            </div>
        </Col>
    );
};

export default ContactUs;