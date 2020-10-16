import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NetfilxOriginalData } from '../actions';

import Movie from '../components/Movie';
import SectionTitle from '../components/SectionTitle';
import ContentBox from '../components/ContentBox';

const NetflixOriginal = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(NetfilxOriginalData());
    }, []);

    const result = useSelector(state => state.netflixoriginal.movies) || [];

    let lists = result.data && result.data.results.map((data, idx) => 
        <Movie
            key={data.id}
            id={data.id}
            idx={idx}
            name={data.name}
            poster={data.poster_path}
            backimg={data.backdrop_path}
        />
    );

    return (
        <div className="wrap">
            <SectionTitle title="Netflix Original" />
            <ContentBox>
                {lists}
            </ContentBox>
        </div>
    )
}

export default NetflixOriginal;