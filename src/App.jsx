import { React, useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavorite';
import RemoveFavorite from './components/RemoveFavorite';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Star Wars');
  const [favorites, setFavorites] = useState([]);
  const urlBase = import.meta.env.VITE_OMDB_API_BASEURL;
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  // Get movie request
  const getMovieRequest = async (searchValue) => {
    const url = `${urlBase}/?s=${searchValue}&apikey=${apiKey}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  // Add favorite movie
  const addFavoriteMovie = (movie) => {
    if (favorites.indexOf(movie) > -1) {
      return;
    }

    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  // Remove favorite movie
  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter((favorite) => favorite.imdbID !== movie.imdbID);
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  // Save to Local Storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  // Set document title
  useEffect(() => {
    document.title = 'Movie Search App';
  }, []);

  // Get movie request
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // Get Favorites from Local Storage
  useEffect(() => {
    const movieFavorites = JSON.parse(localStorage.getItem('react-movie-app-favorites'));

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="row d-flex align-items-center">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorite}
          handleFavoritesClick={addFavoriteMovie}
          favorStyle="add"
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favorites" />
      </div>
      <div className="row">
        <MovieList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
          favoriteComponent={RemoveFavorite}
          favorStyle="remove"
        />
      </div>
    </div>
  );
}

export default App;
