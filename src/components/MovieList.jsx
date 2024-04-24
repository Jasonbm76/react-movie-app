import React from 'react';
import PropTypes from 'prop-types';

const MovieList = (props) => {
  MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  return (
    <>
      {props.movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="col image-container d-flex justify-content-start m-3">
          <img
            src={movie.Poster}
            alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
