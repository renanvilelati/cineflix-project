import { useEffect, useState } from "react"
import { api } from "../../services/api"

export const Home = () => {

    // https://api.themoviedb.org/3/movie/550?api_key=916b3d045649e2789aeb4cab5a2dc88d

    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function loadMovies() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '916b3d045649e2789aeb4cab5a2dc88d',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setMovies(response.data.results.slice(0, 10))
        }

        loadMovies()

    }, [])


    return (
        <div className="container">
            <div className="movie-list">
                {
                    movies.map(movie => {
                        return (
                            <article key={movie.id}>
                                <strong>{movie.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}
