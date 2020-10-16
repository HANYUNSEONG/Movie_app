import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TopratedData } from '../actions';

import Movie from '../components/Movie';
import SectionTitle from '../components/SectionTitle';
import ContentBox from '../components/ContentBox';

const TopRated = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TopratedData());
    }, [])

    const datas = useSelector(state => state.toprated) || [];
    const status = datas.status && datas.status;
    const movies = datas.movies && datas.movies;

    const lists = movies && movies.data.results.map((data, idx) =>
        <Movie
            key={data.id}
            id={data.id}
            idx={idx}
            name={data.title}
            poster={data.poster_path}
            backimg={data.backdrop_path}
        />
    )

    return (
        <div className="wrap">
            <SectionTitle title="Top Rated" />
            {
                status === 'ERROR' && "에러가 발생했습니다."
            }
            <ContentBox>
                {lists}
            </ContentBox>
        </div>
    )
}

export default TopRated;