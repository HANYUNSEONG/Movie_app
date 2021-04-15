import {
  GET_GENRES_DATA,
  SET_GENRES
} from '../actions/genres';

const genres = (state: any = [], action: any) => {
  switch(action.type) {
    case GET_GENRES_DATA:
      return {
        ...state,
        genresData: action.data
      }

    case SET_GENRES:
      return {
        ...state,
        genres: action.data
      }
    default:
      return state;
  }
}

export default genres