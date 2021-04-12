import {
  GET_MOVIE_DATA
} from '../actions/movie';

export const movie = (state: any = [], action: any) => {
  switch(action.type) {
    case GET_MOVIE_DATA:
      return {
        ...state,
        result: action.data
      }
    default:
      return state;
  }
}

export default movie;