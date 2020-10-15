import { combineReducers } from 'redux';

import { netflixoriginal } from './NetflixoriginalApi';
import { toprated } from './TopRatedApi';

export const rootReducer = combineReducers({
    netflixoriginal,
    toprated
});