import React from 'react';

const Connect = ({ connect, ...props }) => {
    return (
        <li {...props}>
            <a href={connect.href} target="blank">
                <i className={`fa fa-${connect.icon}`} aria-hidden='true'></i>
            </a>
        </li>
    );
};

export default Connect;