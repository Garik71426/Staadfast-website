import React from 'react';
import Proptypes from 'prop-types';

const PortfolioWeb = ({ portfolioInfo, ...props }) => {
    return (
        <div className="row webScreen">
            <div className="protfolio-items">
                <div>
                    {portfolioInfo.map(item => {
                        return <div key = {item.imgHref} className = {`protfolio-item ${item.style === 'mobile' ? 'mobile' : item.style === 'web' ? 'web' : ''}`}>
                            <div className="title">{item.title}</div>
                            <div className="content-box">
                                {item.content}
                            </div>
                            <div className="protfolio-item-image" style={ { backgroundImage: `url(${item.imgHref})` } }></div>
                        </div>;
                    })}
                </div>
            </div>
        </div>
    );
};

PortfolioWeb.prototype = {
    portfolioInfo: Proptypes.array.isRequired
};

export default PortfolioWeb;