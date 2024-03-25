import { useState } from "react";
import VideoGrid from "./VideoGrid";



import './Navbar2.css'


const Navbar2 = ({categoria, video, usuario}) => {
    const [videoUniqueCategoria, setVideoUniqueCategoria] = useState ([])

    //filtrado de categoria
    const handleCategoriaClick = (categoriaID) => {
        const filtroVideos = video.filter( k => k.categoriaId === categoriaID)
        setVideoUniqueCategoria(filtroVideos)
    }
    
    
    //console.log('este es el usuario en navbar2 ', usuario)

    return(
        <div>
            <div className="navbar-container">
                <ul className="navbar-list" > 
                    {categoria.map( cate => 
                    <li key={cate.id} onClick={() => handleCategoriaClick(cate.id)}>{cate.nombreCategoria}</li>
                    )}
                </ul>
            </div>

            <div>
                {videoUniqueCategoria.length === 0 ? (
                    <VideoGrid video={video} usuario={usuario}/>
                ) : (
                    <VideoGrid video={videoUniqueCategoria} usuario={usuario}/>
                )}
            </div>
  
        </div>
    )
}

export default Navbar2
