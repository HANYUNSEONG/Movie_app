import React, { Component } from 'react';

import Layout from './containers/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

import './default.scss';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Layout />
                <Footer />
            </>
        )
    }
}

export default App;