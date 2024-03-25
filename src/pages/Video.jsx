import React from "react"
import { useParams } from "react-router-dom"
import './Video.css'

const Video = () => {
    const { id } = useParams()


    console.log('este es el id =',id)

    
    return(
        <div className="cola">
            <h1>Este es el ID del video {id} </h1>
        </div>
    )
}


export default Video