import {
  GET_GENRES_DATA
} from '../actions/genres';

const genres = (state: any = [], action: any) => {
  switch(action.type) {
    case GET_GENRES_DATA:
      return {
        ...state,
        genresData: action.data
      }

    default:
      return state;
  }
}

export default genres