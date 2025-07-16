import axios from "axios";

// Guardar
//  @POST
//     @Path("")
//     @Operation(summary = "Guardar Estudiante", description = "Esta capacidad permite guardar un estudiante ....")
//     public Response guardar(@RequestBody EstudianteTo estudianteTo) {
//         this.estudianteService.guardar(estudianteTo);
//         return Response.status(Response.Status.OK).build();

//     }

const HEADER = {
    headers: {
                "Content-Type": "application/json"
            }
};

const guardar = async(body) =>{
    axios.post('http://localhost:8081/api/matricula/v1/estudiantes/', body).then(r => r.data);

}

const actualizar = async(body,id) =>{
    axios.put(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,body, HEADER).then(resp => resp.data)

}

const actualizarParcial = async(body,id) =>{
    axios.patch(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`,body).then(resp => resp.data)

}

const borrar = async (id) => {
    axios.delete(`http://localhost:8081/api/matricula/v1/estudiantes/${id}`).then(resp => resp.data)
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