<template>
  <Estudiante :listaEstudiantes="estudiantes" />
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
      estudiantes: []

    };
  },
  mounted() {
    this.obtenerEstudiantes()
  },
  methods: {
    async obtenerEstudiantes() {
      return this.estudiantes = await consultarEstudiantesFachada();
    }

  },



}
</script>

<style></style>