export const SET_MODAL_DATA:string = "SET_MODAL_DATA";
export const SET_MODAL_REQUEST:string = "SET_MODAL_REQUEST";

export const setModalData = (modalData?: object) => {
  return {
    type: SET_MODAL_DATA,
    modalData
  }
}