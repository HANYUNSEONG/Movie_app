import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TopratedData } from '../actions';

import Movie from '../components/Movie';
import SectionTitle from '../components/SectionTitle';

const TopRated = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TopratedData());
    }, [])

    const datas = useSelector(state => state.toprated.movies) || [];

    return (
        <div className="wrap">
            <SectionTitle title="Top Rated" />
        </div>
    )
}

export default TopRated;