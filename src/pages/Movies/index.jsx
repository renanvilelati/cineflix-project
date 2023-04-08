import { useEffect, useState, } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

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
                    console.log('Filme não encontrado!');
                    navigate('/', { replace: true })
                    return
                })
        }

        loadMovie()

        return () => {
            console.log('Componente desmontado');
        }
    }, [navigate, id])

    if (loading) {
        return (
            <div className="movie-info">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return (
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title} />
            <h3>Sinopse</h3>
            <p>
                {movie.overview}
            </p>
            <strong>Avaliação: {movie.vote_average} / 10</strong>
            <div className="area-buttons">
                <button>Salvar</button>
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
