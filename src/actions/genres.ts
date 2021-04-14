export const GET_GENRES_DATA:string = "GET_GENRES_DATA";
export const GET_GENRES_DATA_REQUEST:string = "GET_GENRES_DATA_REQUEST";

export const loadGenresData = () => {
  return {
    type: GET_GENRES_DATA_REQUEST
  }
}