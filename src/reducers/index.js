import { combineReducers } from 'redux';

import { testData } from './testData';

export const rootReducer = combineReducers({
    testData: testData
});