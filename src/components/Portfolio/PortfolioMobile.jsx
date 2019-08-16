import React from 'react';
import Proptypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';

import SlideItem from './SlideItem';

const PortfolioMobile = ({ portfolioInfo, ...props }) => {
    return (
        <div className = 'row mobileScreen'>
            <div className="col-lg-12 text-center">
                <AliceCarousel 
                    mouseDragEnabled 
                    fadeOutAnimation={true}
                    autoPlay={true}
                    autoPlayInterval={5000}
                    duration={500}
                    dotsDisabled={false}
                    buttonsDisabled={true}
                >
                    {portfolioInfo.map(item => <SlideItem key = {item.imgHref} item = {item} />)}
                </AliceCarousel>
            </div>
        </div>
    );
};

PortfolioMobile.prototype = {
    portfolioInfo: Proptypes.array.isRequired
};

export default PortfolioMobile;