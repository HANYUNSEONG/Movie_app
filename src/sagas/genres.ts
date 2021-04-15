import { put, call, takeEvery } from 'redux-saga/effects';
import { getGenres } from '../apis';
import {
  GET_GENRES_DATA,
  GET_GENRES_DATA_REQUEST,
  SET_GENRES,
  SET_GENRES_REQUEST
} from '../actions/genres';

export function* fetchGenresData() {
  const result: object = yield call(getGenres);
  yield put({ type: GET_GENRES_DATA, data: result });
}

export function* setGenersFilter(params: any) {
  const { id } = params;
  yield put({ type: SET_GENRES, data: id });
}

export function* genresSaga() {
  yield takeEvery(GET_GENRES_DATA_REQUEST, fetchGenresData);
  yield takeEvery(SET_GENRES_REQUEST, setGenersFilter)
}