import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled';
import { Row, Col } from 'antd'
import { loadGenresData, filterGenres } from '../../actions/genres';
import { loadMovieData, resetMovieData } from '../../actions/movie';
import { RootState } from '../../reducers';
import { GenresCard } from '../../theme';

const GenresFilterBox = styled.div`
  margin: 1em 0;
`;

const GenresFilter: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGenresData())
  }, []);

  const handleFilter = async (id: number) => {
    await dispatch(filterGenres(id));
    await dispatch(resetMovieData())
    await dispatch(loadMovieData(1, id));
  }

  const genresData = useSelector((state: RootState) => {
    return state.genres.genresData && state.genres.genresData.data.genres
  })

  return (
    <GenresFilterBox>
      <Row gutter={[8, 8]}>
        {
          genresData && genresData.map((data: any, idx: any) =>
            <Col key={idx}>
              <GenresCard onClick={e => handleFilter(data.id)}>{data.name}</GenresCard>
            </Col>
          )
        }
      </Row>
    </GenresFilterBox>
  )
}

export default GenresFilter;