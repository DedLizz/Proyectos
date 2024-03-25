import { useState } from 'react'
import { Navigate } from 'react-router-dom';


//estilos

import './Login.css'
import Navbar from '../component/Navbar';

const Login = ({ usuario }) => {
    const [password, setPassword] = useState('')
    const [correo, setCorreo] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    //este es una variable de evento que almacenara los datos del usuario con la funcion
    const [loginUsuario, setLoginUsuario] = useState(null);


    const handleLogin = (event) => {
        event.preventDefault()

        const usuarioEncontrado = usuario.find( usu => usu.correoElectronico === correo)

        if (!usuarioEncontrado) {
            setErrorMessage('El usuario no existe')
            return
        }

        if (usuarioEncontrado.contrasena !== password) {
            setErrorMessage('Contraseña incorrecta')
            return
        }

        console.log('inicio sesion exitoso')
        setLoginUsuario(usuarioEncontrado)
    }

    console.log('el dato del cliente en el componente Login', loginUsuario)

    
    if (loginUsuario) {
        // Redireccionar al usuario a "/Home" y pasar toda la información del usuario como estado
        return (
            <Navigate to="/" state={{user:loginUsuario}} />
        );
    }





    return(
        <div className="login-container">
            <h2 className="login-title" >Iniciar Sesion</h2>

            {errorMessage && <p style={{color: 'red'}} >{errorMessage}</p> }

            <form className="login-form" onSubmit={handleLogin}>

                <div className="form-group" >
                    <label className="form-label" htmlFor="">Nombre de usuario</label>
                    <input className="form-input" type="text" 
                        id="correo"
                        value={correo}
                        onChange={(e)=>setCorreo(e.target.value)}
                    />
                </div>

                <div>
                    <label className="form-label" htmlFor="">Contraseña</label>
                    <input className="form-input" type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button className="form-button" type='submit' >Iniciar Sesión</button>

            </form>



           

        </div>
    )
}

export default Login