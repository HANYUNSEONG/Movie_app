import { GET_TOPRATED } from '../actions';

export const toprated = (state = [], action) => {
    switch(action.type) {
        case GET_TOPRATED:
            return {
                ...state,
                movies: action.data,
                status: action.status
            }

        default:
            return state;
    }
}