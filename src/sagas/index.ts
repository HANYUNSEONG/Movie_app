import { all } from 'redux-saga/effects';
import { movieSaga } from './movie';
import { genresSaga } from './genres';

export default function* rootSaga() {
  yield all([
    movieSaga(),
    genresSaga()
  ])
}