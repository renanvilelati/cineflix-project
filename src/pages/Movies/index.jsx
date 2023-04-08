import { useEffect, useState, } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { toast } from "react-toastify"

import './styles.css'

export const Movies = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie() {
            const response = await api.get(`/movie/${id}`, {
                params: {
                    api_key: '916b3d045649e2789aeb4cab5a2dc88d',
                    language: 'pt-BR'
                }
            })
                .then(response => {
                    setMovie(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log('Movie not found!');
                    navigate('/', { replace: true })
                    return
                })
        }

        loadMovie()

        return () => {
            console.log('Disassembled component!');
        }
    }, [navigate, id])




    const handleSaveMovie = () => {
        // are movies saved in the localStorage?
        const myMovieList = localStorage.getItem('@cineflix')

        // if there are, parse it into JSON, if not, create an array
        let savedMovies = JSON.parse(myMovieList) || []

        const hasMovie = savedMovies.some((movieSaved) => movieSaved.id === movie.id)

        if (hasMovie) {
            toast.warning('Movie already saved in the list')
            return
        }

        savedMovies.push(movie)
        localStorage.setItem('@cineflix', JSON.stringify(savedMovies))
        toast.success('Successfully saved movie!')

    }




    if (loading) {
        return (
            <div className="movie-info">
                <h2>Loading movie details...</h2>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title} />
            <h3>Overview</h3>
            <p>
                {movie.overview}
            </p>
            <strong>Average: {movie.vote_average} / 10</strong>
            <div className="area-buttons">
                <button onClick={handleSaveMovie}>Save</button>
                <button>
                    <a
                        href={`https://youtube.com/results?search_query=${movie.title} trailer`}
                        rel='external'
                        target='_blank'> Trailer </a>
                </button>
            </div>
        </div>
    )
}
