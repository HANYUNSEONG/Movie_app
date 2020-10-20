import React from 'react';

import './Movie.scss';

const Movie = ({ title, backimg, poster, id, idx }) => {
    return (
        <div
            className={`movie_item movie_item_${id}`}
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${backimg})`}}
            // style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${poster})`}}
        >
            {/* <img
                src={`https://image.tmdb.org/t/p/w200${poster}`}
                alt={id}
            /> */}
            <div className="text_box">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Movie;