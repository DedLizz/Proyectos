import { useLocation } from "react-router-dom"
import Navbar from "../component/Navbar"

const Header = () => {

    const location = useLocation();
    const usuario = location.state ? location.state.user : null

   

    return(
        <div>
            <Navbar usuario={usuario} />
        </div>
        
    )
}

export default Header