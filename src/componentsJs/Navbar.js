import logo from '../assets/logo-color.png';
import '../sass/main.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <nav>
        <div className="navbar">
            <NavLink to="/" className="navbar__logo">
                <img className="navbar__logo-img" alt="logo Kasa" src={logo}></img>
            </NavLink>
            <NavLink className="navbar__links" to="/" >
                Accueil
            </NavLink>
            <NavLink className='navbar__links' to="/about">
                A Propos
            </NavLink>
        </div>
    </nav>
}
export default Navbar;