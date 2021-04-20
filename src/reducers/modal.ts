import {
  SET_MODAL_DATA
} from '../actions/modal';

const initialState = {
  isModal: false as boolean,
  modalData: {} as object
}

const modal = (state = initialState, action: any) => {
  switch(action.type) {
    case SET_MODAL_DATA:
      return {
        ...state,
        isModal: !state.isModal,
        // 모달 닫을 때는 아무 값이 안 넘어와서 이전 데이터 유지함
        modalData: action.modalData === undefined ? state.modalData : action.modalData
      }
    default:
      return state;
  }
}

export default modal;