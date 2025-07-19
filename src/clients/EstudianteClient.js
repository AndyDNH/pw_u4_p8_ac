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
    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdWNlLmVkdS5lYyIsInVwbiI6Im1pY29ycmVvQHVjZS5lZHUuZWMiLCJncm91cHMiOlsiZXN0dWRpYW50ZXMiXSwiaWF0IjoxNzUyODg0Mzg5LCJleHAiOjE3NTI4ODQ0MTksImp0aSI6IjgzNTM0OWY0LTFjNTMtNDRhYS1iNDExLTY2Y2NmNWVkMzg2NCJ9.C2dLxxHNbm8awY3rUCH2rKi-KuSiq0fuw7pWCA-qCTpCWU3avGwqdrz7lzZsLTw1MlmTIxFNAwU6t40klpMk4wEn477sKBdrn5c8uhE2HDcJc_ch4PJ2w9wEIUHTBYwCewmn0mb3jjGVea0y3_5OqqNhgnNgbvz90GQYLo1FX4z-7gbbMbowTSNUdcQhFyOZ6t8Tcmqo-yTwRB_YhK2ld-h2phuBm6tWAhplP5c7BhqRfzePwTCrC9WRJZagDuBCPwdUfxU5GEZjjafGzH-cEJ5BxN1A31iUJLYKc64RhMpTWq_eD457OpnoonUIJNkPU2aj1bh1_xGUaDuxSjTp-g'
    axios.post('http://localhost:8081/api/matricula/v1/estudiantes/', body , 
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    ).then(r => r.data);

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