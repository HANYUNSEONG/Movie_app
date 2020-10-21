import React from 'react';

import Modal from './Modal';

import './Movie.scss';

const Movie = ({ title, backdrop_path, poster_path, id, idx, overview }) => {
    return (
        <>
            <Modal
                id={id}
                backdrop_path={backdrop_path}
                poster_path={poster_path}
                title={title}
                overview={overview}
            />
            <div
                className={`movie_item movie_item_${id}`}
                style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${backdrop_path})`}}
                // style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${poster_path})`}}
                onClick={() => {
                    for(let i = 0; i < document.querySelectorAll('.modal_wrap').length; i++) {
                        document.querySelectorAll('.modal_wrap')[i].classList.remove('show_modal');
                    }
                    document.getElementById(`${id}_modal`).classList.add('show_modal')
                }}
            >
                {/* <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt={id}
                /> */}
                <div className="text_box">
                    <h4 title={title}>{title}</h4>
                </div>
            </div>
        </>
    )
}

export default Movie;