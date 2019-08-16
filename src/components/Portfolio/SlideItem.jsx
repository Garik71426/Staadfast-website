import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SlideItem = ({ item, ...props }) => {
    let [ slideActive, setSlideActive ] = useState(false);
    return (
        <div 
            className = {`protfolio-item ${item.style === 'mobile' ? 'mobile' : item.style === 'web' ? 'web' : ''} slide ${slideActive ? 'slide-hover' : ''}`} 
            onClick = {() => setSlideActive(!slideActive)}    
        >
            <div className="title">{item.title}</div>
            <div className="content-box">
                {item.content}
            </div>
            <img src = {item.imgHref} alt = {item.title} className="protfolio-item-image" />
        </div>
    );
};

SlideItem.prototype = {
    item: PropTypes.object.isRequired
};

export default SlideItem;