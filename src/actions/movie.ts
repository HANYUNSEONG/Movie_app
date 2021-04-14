export const GET_MOVIE_DATA:string = "GET_MOVIE_DATA";
export const GET_MOVIE_DATA_REQUEST:string = "GET_MOVIE_DATA_REQUEST";

export const loadMovieData = (page?: number) => {
  return {
    type: GET_MOVIE_DATA_REQUEST,
    page: page
  }
}