import { combineReducers } from 'redux';

import { netflixoriginal } from './NetflixoriginalApi';
import { toprated } from './TopRatedApi';
import { trend } from './TrendApi';

export const rootReducer = combineReducers({
    netflixoriginal,
    toprated,
    trend
});