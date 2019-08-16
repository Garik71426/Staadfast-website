import React from 'react';

const ServiceItem = ({ item, ...props }) => {
    return (
        <div className='service-item' {...props}>
            <h4 className="service-heading">{item.title}</h4>
            <div className="heading-separator"></div>
            <p className="content-box">{item.content}</p>
        </div>
    );
};

export default ServiceItem;