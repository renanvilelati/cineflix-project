import { Link, NavLink } from "react-router-dom"

import './styles.css'

export const Header = () => {
    return (
        <header>
            <Link className="logo" to='/'>Prime Flix</Link>
            <NavLink className='favoritos' to='/movies'>My movies</NavLink>
        </header>
    )
}