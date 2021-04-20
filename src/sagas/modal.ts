import { put, takeEvery } from 'redux-saga/effects';
import { SET_MODAL_DATA, SET_MODAL_REQUEST } from '../actions/modal';

export function* setModal(param: any) {
  const { modalData } = param;
  yield put({ type: SET_MODAL_DATA, modalData: modalData })
}

export function* modalSaga() {
  yield takeEvery(SET_MODAL_REQUEST, setModal);
}