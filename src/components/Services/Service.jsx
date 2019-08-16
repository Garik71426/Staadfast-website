import React from 'react';

const Service = ({ item }) => {
    return (
        <div className='service-item-hex'>
            <div className="roundHex">
                <p>{item}</p>
            </div>
        </div>
    );
};

export default Service;