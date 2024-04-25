import { React, useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavorite';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Star Wars');

  const urlBase = import.meta.env.VITE_OMDB_API_BASEURL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const getMovieRequest = async (searchValue) => {
    const url = `${urlBase}/?s=${searchValue}&apikey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    //console.log(responseJson.Search);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    document.title = 'Movie Search App';
  }, []);

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorite}
        />
      </div>
    </div>
  );
}

export default App;
