<template>
    <div class="tabla">
        <table border="1">
            <tr>
                <th>Usuario</th>
                <th>Fecha</th>
                <th>Detalles</th>
                <th>Valoración</th>
            </tr>
            <tr v-for="(opinion, index) in opiniones" :key="index">
                <td>{{ opinion.usuario.usuario }}</td>
                <td>{{ formatearFecha(opinion.fecha) }}</td>
                <td>{{ opinion.descripcion }}</td>
                <td>{{ opinion.valoracion }}</td>
            </tr>
        </table>
    </div>
    <div class="btn_irQuejas">
        <button @click="agregarQueja">Ingresa tu opinión sobre nuestro sitio</button>
    </div>
</template>

<script>
import { buscarQuejaFachada } from "../../helpers/QuejasCliente";
export default {
    data() {
        return {
            opiniones: []
        };
    },
    methods: {
        formatearFecha(fecha) {
            if (!fecha) return ""; // Manejar el caso en el que la fecha es nula o indefinida

            // Formatear la fecha al formato "YYYY-MM-DD"
            const fechaFormateada = new Date(fecha);
            const dia = fechaFormateada.getDate().toString().padStart(2, '0');
            const mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, '0');
            const año = fechaFormateada.getFullYear();

            return `${año}-${mes}-${dia}`;
        },
        agregarQueja() {
            this.$router.push({ path: "/ingresarQueja" });
        }
    },
    mounted() {
        buscarQuejaFachada()
            .then(opiniones => {
                // Formatear las fechas antes de almacenarlas en opiniones
                this.opiniones = opiniones.map(opinion => {
                    return {
                        ...opinion,
                        fechaFormateada: this.formatearFecha(opinion.fecha)
                    };
                });
            })
            .catch(error => {
                console.error("Error al obtener opiniones:", error);
                console.error("Detalles del error:", error.message);
            });
    }

};
</script>
<style></style>