export const GET_GENRES_DATA:string = "GET_GENRES_DATA";
export const GET_GENRES_DATA_REQUEST:string = "GET_GENRES_DATA_REQUEST";

export const SET_GENRES:string = "SET_GENRES";
export const SET_GENRES_REQUEST:string = "SET_GENRES_REQUEST";

export const loadGenresData = () => {
  return {
    type: GET_GENRES_DATA_REQUEST
  }
}

export const filterGenres = (id: number) => {
  return {
    type: SET_GENRES_REQUEST,
    id
  }
}