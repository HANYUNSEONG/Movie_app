import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testDataGet } from './actions';

import TestData from './containers/TestData';

class App extends Component {
    componentDidMount() {
        this.props.testDataGet();
    }

    render() {
        return (
            <>
                <TestData />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.testData.movies
    }
}

const mapDispatchToProps = {
    testDataGet
}

export default connect(mapStateToProps, mapDispatchToProps)(App);