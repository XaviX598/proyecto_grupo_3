<template>
    <div class="btn_irQuejas">
        <button class="btnQuejas" @click="agregarQueja">Ingresar opinión</button>
    </div>
    <div class="conversacion">
        <div v-for="(opinion, index) in opiniones" :key="index" class="mensaje">
            <div class="usuario-fecha">
                <div class="usuario">{{ opinion.usuario.usuario }}</div>
                <div class="fecha">{{ formatearFecha(opinion.fecha) }}</div>
            </div>
            <div class="descripcion"> {{ opinion.descripcion }}</div>
            <div class="valoracion">Valoración: {{ opinion.valoracion }}</div>
        </div>
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
            if (!fecha) return "";
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
                this.opiniones = opiniones.map(opinion => {
                    return {
                        ...opinion,
                        fechaFormateada: this.formatearFecha(opinion.fecha)
                    };
                });
                this.opiniones = this.opiniones.reverse();
            })
            .catch(error => {
                console.error("Error al obtener opiniones:", error);
                console.error("Detalles del error:", error.message);
            });
    }
};
</script>

<style scoped>
.conversacion {
    width: 100%;
}

.mensaje {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.usuario-fecha {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.fecha {
    font-size: 12px;
    color: #888;
}

.descripcion {
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
    text-align: start;
}

.valoracion {
    align-self: flex-end;
    margin-top: 10px;
}

.btnQuejas {
    padding: 10px 30px;
    background-color: #017DC7;
    color: white;
    border-radius: 5px;
}

.btnQuejas:hover {
    cursor: pointer;
    color: #017DC7;
    background-color: #ddd;

}

.btn_irQuejas {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
    text-align: start;
}
</style>