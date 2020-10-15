import React from 'react';

import NetflixOriginal from './NetflixOriginalContainer';
import TopRated from './TopRatedContainer';

import './Layout.scss';

const Layout = () => {
    return (
        <section>
            <TopRated />
            <NetflixOriginal />
            <div style={{clear:'both'}}></div>
        </section>
    )
}

export default Layout;