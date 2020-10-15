import { GET_TOPRATED } from '../actions';

export const toprated = (state = [], action) => {
    switch(action.type) {
        case GET_TOPRATED:
            console.log(action.status)
            return {
                ...state,
                movies: action.data
            }

        default:
            return state;
    }
}