import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './actions/movie';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const data = useSelector(state => state);

  return (
    <>App</>
  )
}

export default App;