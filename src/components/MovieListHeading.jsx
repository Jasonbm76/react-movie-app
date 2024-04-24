import React from 'react';
import PropTypes from 'prop-types';

const MovieListHeading = (props) => {
  MovieListHeading.propTypes = {
    heading: PropTypes.string.isRequired,
  };

  return (
    <div className="col-12 col-sm-8">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
