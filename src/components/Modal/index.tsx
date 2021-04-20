import React from 'react';
import { Modal as ModalAntd } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers';
import { setModalData } from '../../actions/modal';
import Genreses from '../Genreses';

const Modal:React.FC = () => {
  const dispatch = useDispatch();

  const { modalData, isModal } = useSelector((state: RootState) => {
    return {
      modalData: state.modal.modalData,
      isModal: state.modal.isModal
    }
  });

  const handleCancel = () => {
    dispatch(setModalData())
  }

  const { title, genre_ids } = (modalData !== undefined && modalData) && modalData;

  return (
    <ModalAntd title={title} visible={isModal} onCancel={handleCancel} footer={null}>
      <Genreses genre_ids={genre_ids} />
    </ModalAntd>
  )
}

export default Modal;