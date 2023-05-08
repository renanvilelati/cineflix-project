import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { toast } from 'react-toastify';

export const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem('@cineflix');
    setMovies(JSON.parse(myList) || []);
  }, []);

  function deleteMovie(id) {
    let movieFilter = movies.filter((movie) => {
      return movie.id !== id;
    });

    setMovies(movieFilter);
    localStorage.setItem('@cineflix', JSON.stringify(movieFilter));
    toast.success('successfully deleted movie!');
  }

  return (
    <div className='my-movies'>
      <h1>My movies</h1>

      {movies.length === 0 && <h2>You don't have any saved movies 🙁</h2>}

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>

              <div className='mymovies-btn'>
                <Link to={`../movie/${movie.id}`}>Ver detalhes</Link>
                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
