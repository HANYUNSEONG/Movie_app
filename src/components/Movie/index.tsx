import React from 'react';
import { Col, Card } from 'antd';

const Movie:React.FC<any> = (props) => {
  const { title, overview } = props;
  return (
    <Col span={24}>
      <Card title={title}>
        <p>{overview}</p>
      </Card>
    </Col>
  )
}

export default Movie;