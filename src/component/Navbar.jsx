import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ({usuario}) => {

    console.log('es navbar',usuario)
    

    return (
        <header>
            <nav className="navbar">
                <Link to="/" className="brand">VideoTeca</Link>
                <div className="search-box">
                    <input type="text" placeholder="Buscar" />
                    <button>Buscar</button>
                </div>
                <ul className="opciones">
                    {usuario ? (
                        <>
                            <li>{usuario.nombreUsuario} {usuario.apellidoUsuario}</li>
                            <li><button>Log out</button></li>
                        </>
                    ) : (
                        <li><Link to="/Login">Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;

