import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const user = useSelector(state => state.user);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (path) => {
        setActiveLink(path);
        setIsMenuOpen(false); // Chiudi il menu quando un link viene cliccato
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="navbar">
            <button onClick={toggleMenu} className="burger-menu">
                {isMenuOpen ? '✖' : '☰'}
            </button>
            <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/' className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link>
                <Link to='/about' className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>Informazioni</Link>
                <Link to='/contact' className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contatti</Link>
                <Link to='/courses' className={activeLink === '/courses' ? 'active' : ''} onClick={() => handleLinkClick('/courses')}>Corsi</Link>
                {user.isLogged ?
                    <Link to='/logout' className={activeLink === '/logout' ? 'active' : ''} onClick={() => handleLinkClick('/logout')}>Logout</Link> :
                    <Link to='/login' className={activeLink === '/login' ? 'active' : ''} onClick={() => handleLinkClick('/login')}>Login</Link>
                }
            </div>
            {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
        </nav>
    );
}

export default Navbar;
