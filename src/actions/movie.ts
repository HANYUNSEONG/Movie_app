export const GET_MOVIE_DATA:string = "GET_MOVIE_DATA";
export const GET_MOVIE_DATA_REQUEST:string = "GET_MOVIE_DATA_REQUEST";

export const RESET_MOVIE_DATA:string = "RESET_MOVIE_DATA";

export const loadMovieData = (page?: number, genres?: number) => {
  return {
    type: GET_MOVIE_DATA_REQUEST,
    page: page,
    genres: genres
  }
}

export const resetMovieData = () => {
  return {
    type: RESET_MOVIE_DATA
  }
}