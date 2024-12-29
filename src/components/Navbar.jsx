import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const user = useSelector(state => state.user);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

    return (
        <nav id="navbar">
            <Link to='/' className={activeLink === '/' ? 'active' : ''} onClick={() => handleLinkClick('/')}>Home</Link>
            <Link to='/about' className={activeLink === '/about' ? 'active' : ''} onClick={() => handleLinkClick('/about')}>Informazioni</Link>
            <Link to='/contact' className={activeLink === '/contact' ? 'active' : ''} onClick={() => handleLinkClick('/contact')}>Contatti</Link>
            <Link to='/courses' className={activeLink === '/courses' ? 'active' : ''} onClick={() => handleLinkClick('/courses')}>Corsi</Link>
            {user.isLogged ?
                <Link to='/logout' className={activeLink === '/logout' ? 'active' : ''} onClick={() => handleLinkClick('/logout')}>Logout</Link> :
                <Link to='/login' className={activeLink === '/login' ? 'active' : ''} onClick={() => handleLinkClick('/login')}>Login</Link>
            }
        </nav>
    );
}

export default Navbar;
