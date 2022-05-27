import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
    return (
        <header className="app__header mb-5">
            <h1 className="app__title">
                <Link to="/marvel-page">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink  to="/marvel-page/">Characters</NavLink></li>
                    /
                    <li><NavLink to="/marvel-page/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;