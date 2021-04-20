import React from 'react';
import { Modal as ModalAntd, Row } from 'antd';
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

  const { title, genre_ids, backdrop_path } = (modalData !== undefined && modalData) && modalData;

  return (
    <ModalAntd title={title} visible={isModal} onCancel={handleCancel} footer={null}>
      <Row gutter={[0, 8]} style={{columnGap: "8px"}}>
        <Genreses genre_ids={genre_ids} />
      </Row>
    </ModalAntd>
  )
}

export default Modal;