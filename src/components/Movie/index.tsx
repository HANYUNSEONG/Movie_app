/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Row, Col, Card } from 'antd';

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
`;

const MovieContentStyle = css`
  padding: 0 1em;
  flex: 1;
`;

const GenresCard = styled.div`
  padding: .5em 1em;
  background-color: #eee;
  border-radius: 5px;
  display: inline-block;
`;

const RowStyle = css`
  column-gap: 8px;
`;

const Movie:React.FC<any> = (props) => {
  const { title, overview, poster_path, genres } = props;
  return (
    <Col xs={24} md={12}>
      <Card title={title} css={MovieStyle}>
        <div css={MovieImageStyle}>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={`${title}_poster`} />
        </div>
        <div css={MovieContentStyle}>
          <p>{overview}</p> 
          <Row gutter={[0, 8]} css={RowStyle}>
            {
              genres && genres.map((d: any, idx: any) =>
                <GenresCard key={idx}>{d.name}</GenresCard>
              )
            }
          </Row>
        </div>
      </Card>
    </Col>
  )
}

export default Movie;