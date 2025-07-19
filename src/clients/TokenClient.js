import axios from "axios";

const obtenerToken = async() =>{
    const respuesta = await axios.get("http://localhost:8081/api/matricula/v1/generate").then(res => res.data);
    localStorage.setItem("token", respuesta)
}

export const obtenerTokenFachada = async() =>{
    await obtenerToken()
}