import { put, call, all, takeEvery } from 'redux-saga/effects';
import { getGenres } from '../apis';
import { GET_GENRES_DATA, GET_GENRES_DATA_REQUEST } from '../actions/genres';

export function* requestGenresData() {
  yield takeEvery(GET_GENRES_DATA_REQUEST, fetchGenresData);
}

export function* fetchGenresData() {
  const result: object = yield call(getGenres);
  yield put({ type: GET_GENRES_DATA, data: result });
}

export function* genresSaga() {
  yield all([
    requestGenresData()
  ])
}