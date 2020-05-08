import React, { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = (props) => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  return (
    <div>
    <SavedList list ={savedList} />
    <Route exact path="/">
      <MovieList movies={movieList} />
    </Route>
    <Route path="/movies/:movieId">
      <Movie />
    </Route>
    </div>
  );
};

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>

    <Route>
    <App />
    </Route>
    
    </div>



  )
  

export default App;
