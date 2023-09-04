<template>
    <div class="container">
        <div class="datos">
            <label for="">Ingrese su usuario</label>
            <input placeholder="Ingrese su usuario" type="text" v-model="usuario" />
            <label for="">Detalles</label>
            <input placeholder="Coloca aqui tu opinión" type="text" v-model="descripcion" />
            <label for="">Valoracion</label>
            <input placeholder="Danos una valoración de tu experiencia siendo 1 el mas bajo y 5 el mas alto" type="number"
                v-model="valoracion" />

        </div>
        <div class="btn_guardar">
            <button @click="agregarQueja">Ingresa tu opinion</button>
        </div>
        <div class="btn_regresar">
            <button @click="regresar">Regresar a la interfaz de quejas</button>
        </div>
    </div>
</template>

<script>
import { guardarQuejaFachada } from "../../helpers/QuejasCliente";
export default {
    data() {
        return {
            usuario: null,
            descripcion: null,
            valoracion: null,
            fecha: null
        };
    },
    methods: {
        async agregarQueja() {
            if (!this.usuario || !this.descripcion || !this.valoracion) {
                alert("Por favor, complete todos los campos obligatorios.");
                return;
            }
            const fechaActual = new Date().toISOString();
            const objeto = {
                usuario: null,
                descripcion: this.descripcion,
                valoracion: this.valoracion,
                fecha: fechaActual
            };
            guardarQuejaFachada(objeto);
            this.usuario = "";
            this.descripcion = "";
            this.valoracion = "";

            const confirmacion = confirm("Opinión agregada con éxito, ¿Desea agregar otra queja?");

            if (confirmacion) {

            } else {
                this.$router.push({ path: "/quejas" });
            }
        },
        regresar() {
            this.$router.push({ path: "/quejas" });
        }
    },
}
</script>

<style></style>