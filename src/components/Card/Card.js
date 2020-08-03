import React from 'react';
import propTypes from 'prop-types';

const Card = ({ movie }) => {
  return (
    <div className='card'>
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} className='card-img-top' />
      <div className='card-body'>
        <h3 className='card-title'>{movie.title}</h3>
        <p>{`Vote: ${movie.vote_average}`}</p>
        <p>{`Release: ${movie.release_date}`}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  movie: propTypes.shape({
    title: propTypes.string,
    vote_average: propTypes.number,
    release_date: propTypes.string,
    poster_path: propTypes.string
  }).isRequired
};

export default Card;