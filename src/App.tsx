import React from 'react';
import { useSelector } from 'react-redux';

// antd 적용
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// emotion 적용
import { Global } from '@emotion/react';
import { GlobalStyle } from './theme';

// 컴포넌트
import Wrap from './components/Wrap';
import MovieList from './components/MovieList';
import GenresFilter from './components/GenresFilter';
import Modal from './components/Modal';

import { RootState } from './reducers';

const App: React.FC = () => {
  const { Header } = Layout;
  const { isModal } = useSelector((state: RootState) => {
    return {
      isModal: state.modal.isModal
    }
  })
  return (
    <>  
      {/* 글로벌 스타일 적용 */}
      <Global styles={GlobalStyle} />
      <Header>header</Header>
      <Modal />
      <Wrap>
        <GenresFilter />
        <MovieList />
      </Wrap>
    </>
  )
}

export default App;