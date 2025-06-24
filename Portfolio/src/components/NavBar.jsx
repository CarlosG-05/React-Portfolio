import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Carlos G</Link>
            </div>
            <div>
                <Link to="/" className="nav-link">About</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/contacts" className="nav-link">Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar;