    import axios from "axios";


    const token = localStorage.getItem('token');
    const HEADER = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };


    const consultar = async(id) =>{
        const respuesta = await axios.get(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,HEADER).then(res => res.data);
        return respuesta;
    }


    const guardar = async(body) =>{
        axios.post('http://localhost:8081/api/matricula/v1/estudiantes/', body , HEADER).then(r => r.data);
        
    }

    const actualizar = async(body,id) =>{
        axios.put(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,body, HEADER).then(resp => resp.data)

    }

    const actualizarParcial = async(body,id) =>{
        axios.patch(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,body,HEADER).then(resp => resp.data)

    }

    const borrar = async (id) => {
        axios.delete(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,HEADER).then(resp => resp.data)
    }


    export const guardarFachada = async(body) =>{
        await guardar(body);

    }

    export const actualizarFachada = async(body,id) =>{
        await actualizar(body,id);

    }

    export const actualizarParcialFachada = async(body,id) =>{
        await actualizarParcial(body,id);


    }

    export const borrarFachada = async (id) => {
        await borrar(id);
    }

    export const consultarEstudiantesFachada = async(id) =>{
        return await consultar(id)
    }