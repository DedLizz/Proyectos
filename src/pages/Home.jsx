//servicios
import sevicesVideo from '../services/videos'
import servicesCategoria from '../services/Categorias'

//otros
import { useState, useEffect } from 'react'
import Carrusel from '../component/Carrusel'
import Navbar2 from '../component/Navbar2'
import Banner from '../component/Banner'
import { useLocation } from 'react-router-dom'

//stilo
import './Home.css'




const Home = () => {
    const [videos, setVideos] = useState([]);
    const [categoria, setCategoria] = useState([])

    //videos según categoriapara el carrusel
    const [matematicas, setMatematicas] = useState([])
    const [ciencias, setCiencias] = useState([])
    const [Historia, setHistoria] = useState([])
    const [programacion, setProgramacion] = useState([])

    //recivir datos de el login
    const localizacion = useLocation()
    const loggedInUser = localizacion.state && localizacion.state.user




    //entrega datos de videos
    const hookVideo = ()=> {
      sevicesVideo.getAll().then(p => {
        setVideos(p.data.response)
      })
    }

    //entrega datos de categoria
    const hookCategoria = () => {
      servicesCategoria.getAll().then(p => {
        setCategoria(p.data.response)
      })
    }

    useEffect(() => {
      hookVideo()
      hookCategoria()
    }, [])

    // Esto filtra y lo guarda en las variables de eventos
    const filterMatematicas = () => {
        const filteredVideos = videos.filter(video => video.categoriaId === 1);
        setMatematicas(filteredVideos);
    };

    const filterCiencias = () => {
        const filteredVideos = videos.filter(video => video.categoriaId === 2);
        setCiencias(filteredVideos);
    };

    const filterHistoria = () => {
        const filteredVideos = videos.filter(video => video.categoriaId === 3);
        setHistoria(filteredVideos);
    };

    const filterProgramacion = () => {
        const filteredVideos = videos.filter(video => video.categoriaId === 4);
        setProgramacion(filteredVideos);
    };

    useEffect(() => {
        filterMatematicas();
        filterCiencias();
        filterHistoria();
        filterProgramacion();
    }, [videos]);




  
    console.log('este es el dato de usuario en Home',loggedInUser)


 

    return(
        <div className='cuerpo'>
            
            <Banner />

            <div className='carruseles'>
                <Carrusel video={matematicas} categoria={"Matematicas"}/> 
                <Carrusel video={ciencias} categoria={"Ciencias"}/>
                <Carrusel video={Historia} categoria={"Historia"} />
                <Carrusel video={programacion} categoria={"Programación"}/>
            </div>
            
            <Navbar2  categoria={categoria} video={videos} usuario={loggedInUser} />

            <h1>cuerpo</h1>
            <div>
          <ul>
            {videos.map(p =>
            <li key={p.id}>{p.titulo}</li>  
            )}
          </ul>
        </div>
        </div>

    )
}

export default Home