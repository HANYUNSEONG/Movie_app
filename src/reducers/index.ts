import { combineReducers } from 'redux';
import movie from './movie';
import genres from './genres';
import modal from './modal';

const rootReducer = combineReducers({
  movie,
  genres,
  modal
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;