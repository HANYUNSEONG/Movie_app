import React from 'react';

const Movie = ({ img, name }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img
                src={`https://image.tmdb.org/t/p/w200${img}`}
                alt="img"
            />
        </div>
    )
}

export default Movie;