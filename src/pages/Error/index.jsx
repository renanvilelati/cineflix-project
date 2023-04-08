import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div>
            Error page
            <Link to='/'>Voltar a página principal</Link>
        </div>
    )
}