import React from 'react';

import NetflixOriginal from './NetflixOriginal';

import './Layout.scss'

const Layout = () => {
    return (
        <section>
            <NetflixOriginal />
            <div style={{clear:'both'}}></div>
        </section>
    )
}

export default Layout;