import axios from "axios";
const baseUrl = 'http://www.bibliotecavideo.somee.com/api/Favorito'

const getAll = () => {
    return axios.get(`${baseUrl}/Lista`)
}

const create = newObject => {
    return axios.post(`${baseUrl}/Guardar`, newObject)
}
 
const eliminar = id => {
    return axios.delete(`${baseUrl}/Eliminar/${id}`)
}

const Obtener= id => {
    return axios.get(`${baseUrl}/Obtener/${id}`);
}

export default {getAll, create, eliminar, Obtener}