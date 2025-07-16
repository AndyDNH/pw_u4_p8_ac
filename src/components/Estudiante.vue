<template>

    <div>
        <button v-on:click="guardar()"> Guardar  </button>
        <button v-on:click="actualizar()">Actualizar</button>
        <button v-on:click="actualizarParcial()">Actualizar Parcial</button>
        <button v-on:click="borrar()">Borrar</button>
        <!-- <button v-on:click="guardar()">Consutlar</button> -->
    </div>

</template>

<script>
import { guardarFachada,actualizarFachada, actualizarParcialFachada,borrarFachada } from "@/clients/EstudianteClient";
export default {

    methods:{
        async guardar(){
            let formatoHora = 'T00:00:00';
            const estudianteToBody = {
                nombre:'Andres',
                apellido:'Guaman',
                fechaNacimiento:'2000-10-04' + formatoHora,
                genero:'M'
            };
            await guardarFachada(estudianteToBody);
            console.log('guardado');
            

        }, 
        async actualizar(){
            let formatoHora = 'T00:00:00';
            let id = 10
            const estudianteToBody = {
                nombre:'Damian',
                apellido:'Guaman',
                fechaNacimiento:'2010-10-04' + formatoHora,
                genero:'M'
            };
            await actualizarFachada(estudianteToBody,id);
            console.log('actualizar');
            
            
        },
        async actualizarParcial(){
            let formatoHora = 'T00:00:00';
            let id = 10
            const estudianteToBody = {
                apellido:'Guzman',
            };
            await actualizarParcialFachada(estudianteToBody,id);
            console.log('actualizar parcial');
            
        },

        async borrar(){
            let id = 4
            await borrarFachada(id);
            console.log('borrar');
            
        },


        consultar(){

        }

    }
}
</script>

<style>

</style>