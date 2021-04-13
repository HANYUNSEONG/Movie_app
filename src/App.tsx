import React from 'react';

// antd 적용
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// emotion 적용
import { Global } from '@emotion/react';
import { GlobalStyle } from './theme';

// 컴포넌트
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const { Header } = Layout;
  return (
    <>  
      {/* 글로벌 스타일 적용 */}
      <Global styles={GlobalStyle} />
      <Header>header</Header>
      <MovieList />
    </>
  )
}

export default App;