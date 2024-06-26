import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const toDetails = (id) => {
    history.push(`/${id}`)
  };
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}
              onClick={(e) => {toDetails(movie.id)}}
            >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} data-testid="toDetails"/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
