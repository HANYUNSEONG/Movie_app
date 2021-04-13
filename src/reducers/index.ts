import { combineReducers } from 'redux';
import movie from './movie';

const rootReducer = combineReducers({
  movie: movie
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;