import React from 'react';

const SectionHeading = ({ title, content }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className="heading-separator"></div>
            <p className="content-box">{content}</p>
        </>
    );
};

export default SectionHeading;