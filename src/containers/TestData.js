import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { testDataGet } from '../actions';

import Movie from '../components/Movie';

const TestData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(testDataGet())
    }, []);

    const movieData = useSelector(state => state.testData.movies, []) || [];
    
    let lists = movieData.data && movieData.data.results.map((data, idx) =>
        <Movie
            key={idx}
            id={data.id}
            img={data.backdrop_path}
            name={data.name}
        />
    );
    console.log(movieData)

    return (
        <>
            {lists}
        </>
    )
}

export default TestData;