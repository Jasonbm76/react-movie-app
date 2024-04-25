import PropTypes from 'prop-types';

const MovieListHeading = (props) => {
  MovieListHeading.propTypes = {
    heading: PropTypes.string.isRequired,
  };

  return (
    <div className="col-12 col-sm-8">
      <h2>{props.heading}</h2>
    </div>
  );
};

export default MovieListHeading;
