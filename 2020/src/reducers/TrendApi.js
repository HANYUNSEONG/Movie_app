import { GET_TREND } from '../actions';

export const trend = (state = [], action) => {
    switch(action.type) {
        case GET_TREND:
            return {
                ...state,
                movie: action.data,
                status: action.status
            }
        default:
            return state
    }
}