import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '916b3d045649e2789aeb4cab5a2dc88d',
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 12));
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className='loading'>
        <h2>Carregando conteúdo...</h2>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='movie-list'>
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`movie/${movie.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};
