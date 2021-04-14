import axios from 'axios';
import { API_KEY } from './config';

// 영화 데이터
export const getMovieDatas = async (page : number = 1) => {
  return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`)
}

// 이미지
export const getImage = async (iamge_path: string) => {
  return await axios.get(`https://image.tmdb.org/t/p/w500/${iamge_path}`);
}

// 장르
export const getGenres = async () => {
  return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-KR`);
}