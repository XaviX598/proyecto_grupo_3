<template>
  <div class="tabla">
    <table border="1">
      <tr>
        <th>Usuario</th>
        <th>Fecha</th>
        <th>Titulo</th>
        <th>Accion</th>
      </tr>
      <tr v-for="(tema, index) in temas" :key="index">
        <td>{{ tema.usuario }}</td>
        <td>{{ formatearFecha(tema.fecha) }}</td>
        <td>{{ tema.titulo }}</td>
        <td><button @click="buscarTema(tema.id)">Ver</button></td>
      </tr>
    </table>

    <label for="">Titulo:</label>
    <p>{{ tema.titulo }}</p>
    <label for="">Usuario:</label>
    <p>{{ tema.usuario }}</p>

    <label for="">Descripcion</label>
    <p>{{ tema.descripcion }}</p>
    <label for="">Comentarios:</label>
    <Label>Agregar comentario:</Label>
    <input
      placeholder="Ingrese su comentario"
      type="text"
      v-model="comentario"
    />
    <button @click="ingresarComentario">Ingresar Comentario</button>
  </div>
  <div class="btn_irQuejas">
    <button @click="agregarTema()">Ingresa un nuevo tema en el foro</button>
  </div>
</template>

<script>
import { buscarTodosTemasFachada } from "../../helpers/Foro";
import { buscarTemaFachada } from "../../helpers/Foro";
import TemaVue from "../components/Tema.vue";
import { ingresarComentarioFachada } from "../../helpers/Comentario";

export default {
  components: {
    TemaVue,
  },
  data() {
    return {
      temas: [],
      tema: {},
      comentario: null,
      fecha: null,
      usuario: null,
    };
  },

  methods: {

    ingresarComentario() {
      if (!this.comentario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: null,
        comentario: this.comentario,
        fecha: fechaActual,
        tema: this.tema
      };

      ingresarComentarioFachada(objeto);
    },


    formatearFecha(fecha) {
      if (!fecha) return ""; // Manejar el caso en el que la fecha es nula o indefinida

      // Formatear la fecha al formato "YYYY-MM-DD"
      const fechaFormateada = new Date(fecha);
      const dia = fechaFormateada.getDate().toString().padStart(2, "0");
      const mes = (fechaFormateada.getMonth() + 1).toString().padStart(2, "0");
      const año = fechaFormateada.getFullYear();

      return `${año}-${mes}-${dia}`;
    },
    agregarTema() {
      this.$router.push({ path: "/ingresarTema" });
    },

    async buscarTema(id) {
      const data = await buscarTemaFachada(id);
      console.log(data);
      this.tema = data;
    },
  },
  mounted() {
    buscarTodosTemasFachada()
      .then((temas) => {
        // Formatear las fechas antes de almacenarlas en opiniones
        this.temas = temas.map((tema) => {
          return {
            ...tema,
            fechaFormateada: this.formatearFecha(tema.fecha),
          };
        });
      })
      .catch((error) => {
        console.error("Error al obtener opiniones:", error);
      });
  },
};
</script>

<style>
</style>