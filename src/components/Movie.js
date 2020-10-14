import React from 'react';

import './Movie.scss';

const Movie = ({ name, backimg, poster, id, idx }) => {
    return (
        <div
            id='movie_item'
            className={`movie_item_${id}`}
            // style={{backgroundImage:`url(https://image.tmdb.org/t/p/w200${poster})`}}
        >
            <h4>{name}</h4>
            <img
                // src={`https://image.tmdb.org/t/p/w200${poster}`}
                alt={id}
            />
        </div>
    )
}

export default Movie;