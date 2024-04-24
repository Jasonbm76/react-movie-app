import { React, useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('s=star wars');

  const urlBase = import.meta.env.VITE_OMDB_API_BASEURL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const getMovieRequest = async () => {
    const url = `${urlBase}/?${searchValue}&apikey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    //console.log(responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
