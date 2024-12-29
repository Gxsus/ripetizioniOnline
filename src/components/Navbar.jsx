import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    const user = useSelector(state => state.user);

    return (
        <nav id="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contatti</Link>
            <Link to='/courses'>Corsi</Link>
            {user.isLogged ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>}
        </nav>
    );
}

export default Navbar;
