/** @jsx jsx */
import React from 'react';
import { useDispatch } from 'react-redux';
import { jsx, css } from '@emotion/react';
import { Row, Col, Card } from 'antd';
import { GenresCard } from '../../theme';
import { setModalData } from '../../actions/modal';
import Genreses from '../Genreses';

const MovieStyle = css`
  height: 100%;
  transition: .3s;
  &:hover {
    box-shadow: 0 0 10px 5px #eaeaea;
  }

  .ant-card-body {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1em;
  }
`;

const MovieImageStyle = css`
  width: 200px;
  height: 300px;
  background-color: #eee;
  cursor: pointer;
`;

const MovieContentStyle = css`
  padding: 0 1em;
  flex: 1;
`;

const RowStyle = css`
  column-gap: 8px;
`;

const Movie:React.FC<any> = (props) => {
  const dispatch = useDispatch();
  const { title, overview, poster_path, genre_ids } = props;

  const handleModalOpen = () => {
    dispatch(setModalData(props))
  }

  return (
    <Col xs={24} md={12}>
      <Card title={title} css={MovieStyle}>
        <div css={MovieImageStyle} onClick={handleModalOpen}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`${title}_poster`} />
        </div>
        <div css={MovieContentStyle}>
          <p>{overview}</p>
          <Row gutter={[0, 8]} css={RowStyle}>
            <Genreses genre_ids={genre_ids} />
          </Row>
        </div>
      </Card>
    </Col>
  )
}

export default Movie;