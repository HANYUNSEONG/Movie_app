import {
  GET_MOVIE_DATA
} from '../actions/movie';

const initialState = {
  page: 0 as number,
  movieData: [] as object
}

const movie = (state: any = initialState, action: any) => {
  switch(action.type) {
    case GET_MOVIE_DATA:
      return {
        ...state,
        movieData: [...state.movieData, ...action.data.data.results],
        page: action.data.data.page
      }
    default:
      return state;
  }
}

export default movie;