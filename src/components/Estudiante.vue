<template>
    <div class="container-estudiante">
        <div class="form-container">
            <form @submit.prevent="guardar">
                <h2>Registro de Estudiante</h2>
                <div class="form-group">
                    <label for="id">Id</label>
                    <input id="id" v-model="id" type="text" placeholder="No ingresar para crear un estudiante" />
                </div>
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input id="nombre" v-model="localEstudiante.nombre" type="text" placeholder="Ingresa tu Nombre"  />
                </div>
                <div class="form-group">
                    <label for="apellido">Apellido</label>
                    <input id="apellido" v-model="localEstudiante.apellido" type="text" placeholder="Ingresa tu Apellido"  />
                </div>
                <div class="form-group">
                    <label for="fechaNacimiento">Fecha Nacimiento</label>
                    <input id="fechaNacimiento" v-model="localEstudiante.fechaNacimiento" type="date" />
                </div>
                <div class="form-group">
                    <label for="genero">Género</label>
                    <select id="genero" v-model="localEstudiante.genero" required>
                        <option value="" >Seleccione</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <button type="submit">Guardar</button>
            </form>
            <div class="acciones">
                <button @click.prevent="$emit('consultar-estudiante', id)">Consultar</button>
                <button @click="actualizar">Actualizar</button>
                <button @click="actualizarParcial">Actualizar Parcial</button>
                <button @click="borrar">Borrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { consultarEstudiantesFachada, guardarFachada, actualizarFachada, actualizarParcialFachada, borrarFachada } from "@/clients/EstudianteClient";

export default {
    props: {
        listaEstudiantes: {
            type: Array,
            required: true
        },
        estudiante: {
            type: Object,
            required: false,
            default: () => ({
                nombre: '',
                apellido: '',
                fechaNacimiento: '',
                genero: ''
            })
        }
    },
    data() {
        return {
            localEstudiante: {
                nombre: null,
                apellido: null,
                fechaNacimiento: null,
                genero: null,
            },
            id: '',
            formatoHora: 'T00:00:00'
        };
    },
    methods: {
        async guardar() {
            const estudianteToBody = {
                nombre: this.localEstudiante.nombre,
                apellido: this.localEstudiante.apellido,
                fechaNacimiento: this.localEstudiante.fechaNacimiento + this.formatoHora,
                genero: this.localEstudiante.genero
            };
            await guardarFachada(estudianteToBody);
            console.log('guardado');
        },
        async consultar() {
        },
        async actualizar() {
            const estudianteToBody = {
                nombre: this.localEstudiante.nombre,
                apellido: this.localEstudiante.apellido,
                fechaNacimiento: this.localEstudiante.fechaNacimiento + this.$propsformatoHora,
                genero: this.localEstudiante.genero
            };
            await actualizarFachada(estudianteToBody, this.id);
            console.log('actualizar');
        },
        async actualizarParcial() {

            const estudianteToBody = {};
            for (const indice in this.localEstudiante) {
                const campo = this.localEstudiante[indice];
                if (campo === '') {
                    estudianteToBody[indice] = null;
                } else {
                    estudianteToBody[indice] = campo;
                }
            }

            if (estudianteToBody.fechaNacimiento !== null) {
                estudianteToBody.fechaNacimiento += this.formatoHora;
            }
            await actualizarParcialFachada(estudianteToBody, this.id);
            console.log('actualizar parcial');
        },
        async borrar() {
            await borrarFachada(this.id);
            console.log('borrar');
        }
    },
    watch: {
        estudiante(nuevoValor, valorAnterior) {
            if (nuevoValor) {
                this.localEstudiante = nuevoValor;
            }
        }
    },
}
</script>

<style>
.form-container {
    max-width: 400px;
    margin: 40px auto;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
    padding: 32px 24px;
}

h2 {
    text-align: center;
    margin-bottom: 24px;
    color: #007bff;
}

.form-group {
    margin-bottom: 18px;
}

label {
    display: block;
    margin-bottom: 6px;
    color: #333;
    font-weight: 500;
}

input,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #bdbdbd;
    border-radius: 6px;
    font-size: 16px;
    background: #fff;
    transition: border-color 0.2s;
}

input:focus,
select:focus {
    border-color: #007bff;
    outline: none;
}

button[type="submit"] {
    width: 100%;
    padding: 12px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.2s;
}

button[type="submit"]:hover {
    background: #0056b3;
}

.acciones {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
}

.acciones button {
    flex: 1;
    margin: 0 4px;
    padding: 10px;
    background: #6c757d;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.2s;
}

.acciones button:hover {
    background: #495057;
}
</style>