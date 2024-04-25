import PropTypes from 'prop-types';

const MovieList = (props) => {
  MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  const FavoriteComponent = props.favoriteComponent;

  const filteredMovies = props.movies
    .filter((movie) => {
      return movie.Poster != 'N/A';
    })
    .sort(function (y) {
      return y.Year;
    })
    .reverse()
    .map((movie) => {
      return (
        <div
          key={movie.imdbID}
          className="col-auto image-container justify-content-start m-3">
          <div className="image-container-inner">
            <img
              src={movie.Poster}
              alt="movie"
            />
          </div>
          <div
            className={`overlay ${props.favorStyle}`}
            onClick={() => props.handleFavoritesClick(movie)}>
            <FavoriteComponent />
          </div>

          <div className="movieTitle">
            {movie.Title} ({movie.Year})
          </div>
        </div>
      );
    });

  return filteredMovies;
};

export default MovieList;
