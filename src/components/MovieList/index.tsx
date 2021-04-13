import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'antd';
import { css } from '@emotion/css';

import { loadData } from '../../actions/movie';
import { RootState } from '../../reducers';
import Movie from '../../components/Movie';

const MovieList:React.FC<any> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const movieData = useSelector((state: RootState) => { return state.movie.result });
  
  return (
    <Row gutter={[12, 12]} className="antd_grid_custom">
        {
          movieData && movieData.data.results.map((data: any, idx: any) =>
            <Movie
              key={idx}
              {...data}
            />
          )
        }
    </Row>
  )
}

export default MovieList;