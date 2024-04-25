import PropTypes from 'prop-types';

const MovieList = (props) => {
  MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
  };

  const FavoriteComponent = props.favoriteComponent;

  console.table(props.movies);

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
          <div className="overlay">
            <FavoriteComponent />
          </div>

          <div className="movieTitle">
            {movie.Title} ({movie.Year})
          </div>
        </div>
      );
    });

  return filteredMovies;

  // const movieMap = props.movies;

  // //console.info(movieMap);

  // return (
  //   <>
  //     {props.movies.map((movie) => (
  //       <div
  //         key={movie.imdbID}
  //         className="col-auto m-3">
  //         <img
  //           src={movie.Poster}
  //           alt="movie"
  //         />
  //         <div className="overlay d-flex align-items-center justify-content-center">Add to Favorites</div>
  //       </div>
  //     ))}
  //   </>
  // );
};

export default MovieList;
