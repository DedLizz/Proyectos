//servicio de favoritos
import favoritoServices from '../services/favoritos'



import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './VideoGrid.css'

const VideoGrid = ({ video, usuario }) => {
    const [visibleVideos, setVisibleVideos] = useState(7);
    const [favorito, setFavorito] = useState([])


    //Lista del servicio favorito
    const hookFavoritos = () => {
        favoritoServices.getAll().then(p => {
            setFavorito(p.data.response)
            //console.log('Array de favoritos del API', p.data.response)
        })
    }
    useEffect(hookFavoritos, [])


    //para agregar o eliminar de favoritos
    const toggleFavorite = (event, ID) => {
        event.preventDefault()
        const favoritoExiste = favorito.some(fav => fav.usuarioId === usuario.id && fav.videoId === ID)

        if(favoritoExiste){
            const favoritoDelete = favorito.find(fav => fav.usuarioId === usuario.id && fav.videoId === ID)
            favoritoServices.eliminar(favoritoDelete.id).then( respuesta => {
                //console.log(respuesta.data.mensaje)
            })
            //elimina el elemento de variable favorito
            setFavorito(favorito.filter(filtro => filtro.id !== favoritoDelete.id));

        } else {
            const newFavorito = {
                usuarioId: usuario.id,
                videoId: ID,
            }


            favoritoServices.create(newFavorito).then(reotornarFav => {
                //console.log('este es retorno de dato agregado a favorito',reotornarFav.data.mensaje)
            })
            hookFavoritos()
        }
    }



    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setVisibleVideos(prevVisibleVideos => prevVisibleVideos + 5);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [visibleVideos]);



    //console.log('este es el array favorito',favorito)
    //console.log('usuario en VideoGrid', usuario)

    return (
        <div className="grid-container">
            {video.slice(0, visibleVideos).map(video => (
                <div key={video.id} className="element-grid">
                    <div>
                        <iframe 
                            src={video.enlaceUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="video"
                        ></iframe>

                        {usuario && (
                            <button onClick={(event) => toggleFavorite(event, video.id)}>
                                {favorito.some(fav => fav.usuarioId === usuario.id && fav.videoId === video.id) ? 'Delete' : 'Add' }
                            </button>
                        )}

                        <Link to={`/Video/${video.id}`}>
                            <h6>{video.titulo}</h6> 
                        </Link>
                        
                    </div>
                </div>
                
            ))}
        </div>
    );
};

export default VideoGrid;

