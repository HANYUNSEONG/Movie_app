import React from 'react';

const ContentBox = ({ children }) => {
    return (
        <div className="content_wrap">
            <div className="content_box" style={{width: `${children && children.length * 270}px`}}>
                {children}
                <div style={{clear:'both'}}></div>
            </div>
        </div>
    )
}

export default ContentBox;