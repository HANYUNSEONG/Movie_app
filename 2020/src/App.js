import React, { Component } from 'react';

import Layout from './containers/Layout';
import Header from './components/Header';
import Footer from './components/Footer';

import axios from 'axios';

import './default.scss';

class App extends Component {
    componentDidMount() {
        axios.get('/api')
            .then(res => this.setState(res.data))
    }
    
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