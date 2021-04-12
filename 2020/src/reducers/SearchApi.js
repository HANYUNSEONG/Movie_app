import { GET_MOVIEIDSEARCH } from '../actions';

export const search = (state = [], action) => {
    switch(action.type) {
        case GET_MOVIEIDSEARCH:
            return {
                ...state,
                movies: action.data,
                status: action.status
            }
    }
}