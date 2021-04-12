import { GET_NETFLIXORIGINAL } from '../actions';

export const netflixoriginal = (state = [], action) => {
    switch(action.type) {
        case GET_NETFLIXORIGINAL:
            return {
                ...state,
                movies: action.data
            }

        default:
            return state;
    }
}