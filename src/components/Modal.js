import React, { useEffect } from 'react';

import { FaTimes } from 'react-icons/fa'

import './Modal.scss';

const Modal = ({ id, backdrop_path, overview, poster_path, title }) => {
    return (
        <div id={`${id}_modal`} className="modal_wrap">
            <div className="modal_content">
                <div className="img_box">
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${title}_poster`} />
                </div>
            </div>
            <button><FaTimes /></button>
        </div>
    )
}

export default Modal;