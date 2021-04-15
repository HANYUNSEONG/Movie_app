import axios from 'axios';
import { API_KEY } from './config';

// 영화 데이터
let tmpGenres:number | string;
export const getMovieDatas = async (page : number = 1, genres? : number | string) => {
  // 장르 값을 tmp에다가 저장해놓고 장르값 비어있는 상태에서 오면 tmp에 있는 장르 값 씀
  genres = genres === undefined && tmpGenres !== undefined ? tmpGenres : genres;
  tmpGenres = genres;

  let genresVal = genres !== undefined ? `&with_genres=${genres}` : '';
  return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}${genresVal}`)
}

// 이미지
export const getImage = async (iamge_path: string) => {
  return await axios.get(`https://image.tmdb.org/t/p/w500/${iamge_path}`);
}

// 장르
export const getGenres = async () => {
  return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`);
}