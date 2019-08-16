import React from 'react';

import './OpenSource.scss';

const CircularButton = ({ onClick, ...props }) => {
    return (
        <button className='circular-button' onClick={onClick} title='Zeronode' {...props}></button>
    );
};

export default CircularButton;