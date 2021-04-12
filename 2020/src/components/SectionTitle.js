import React from 'react';

import './SectionTitle.scss';

const SectionTitle = ({ title }) => {
    return (
        <>
            <h1 className="section_title">{ title }</h1>
        </>
    )
}

export default SectionTitle;