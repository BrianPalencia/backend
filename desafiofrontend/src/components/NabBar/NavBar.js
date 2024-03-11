import CartWidget from "../CartWidget/CartWidget";
import Auth from "../auth/Auth"
import { NavLink, Link } from "react-router-dom";

const NavBar = ({total}) => {
    return (
        <nav className="nav-container columns" role="navigation" aria-label="main navigation">
            <Link to="/">
            <h3 className="column is-2 nav-title"><b>CapKing</b></h3>
            </Link>
            <div className="navbar-menu">
                <div className="columns">
                    <div className="column">
                        <NavLink to={`/category/gorras`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                        <button className="button is-link is-light is-small btn">Gorras</button>
                        </NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/gorros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                        <button className="button is-link is-light is-small btn">Gorros</button>
                        </NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`/category/sombreros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                        <button className="button is-link is-light is-small btn">Sombreros</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <CartWidget total={total} />
            <Auth />
        </nav>
    )
}

export default NavBar;