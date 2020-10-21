import React, { useEffect } from 'react';

import './Modal.scss';

const Modal = ({ id }) => {
    return (
        <div id={`${id}_modal`} className="modal_wrap">
            Modal
        </div>
    )
}

export default Modal;