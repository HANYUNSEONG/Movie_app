import { TEST_DATA } from '../actions';

export const testData = (state = [], action) => {
    switch(action.type) {
        case TEST_DATA:
            return {
                ...state,
                movies: action.data
            }

        default:
            return state;
    }
}