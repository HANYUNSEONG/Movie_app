import { call, all, put, takeEvery } from 'redux-saga/effects';
import * as API from '../apis';
import { GET_MOVIE_DATA, GET_MOVIE_DATA_REQUEST } from '../actions/movie';

export function* requestGetData() {
  yield takeEvery(GET_MOVIE_DATA_REQUEST, getfetchData);
}

export function* getfetchData() {
  let result: object = yield call(API.getMovieDatas);
  yield put({ type: GET_MOVIE_DATA, data: result });
}

export function* movieSaga() {
  yield all([
    requestGetData(),
  ])
}