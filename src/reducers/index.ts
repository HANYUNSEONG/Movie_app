import { combineReducers } from 'redux';
import movie from './movie';
import genres from './genres';

const rootReducer = combineReducers({
  movie,
  genres
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;