<template>
    <Estudiante :listaEstudiantes="estudiantes" :estudiante="estudiante" @consultar-estudiante="obtenerEstudiantes" />
</template>

<script>
import { consultarEstudiantesFachada } from "@/clients/EstudianteClient";
import Estudiante from "@/components/Estudiante.vue";

export default {
  components: {
    Estudiante
  },
  data() {
    return {
      estudiantes: [], 
      estudiante : {
        nombre :'',
        apellido: '',
        fechaNacimiento: '',
        genero: '',
      }
    };
  },
  methods: {
    async obtenerEstudiantes(id) {
      const datos = await consultarEstudiantesFachada(id);
      let fecha = datos.fechaNacimiento.substring(0,10)
      
      if (datos != null ) {
        this.estudiante = {
            nombre: datos.nombre,
            apellido: datos.apellido,
            fechaNacimiento: fecha,
            genero: datos.genero
        }
      }
    }
  },
}
</script>

<style></style>