

<template>
  <label for="">Titulo:</label>
  <p>{{ temaobjeto.titulo }}</p>

  <label for="">Descripcion</label>
  <p>{{ temaobjeto.descripcion }}</p>
  <label for="">Comentarios:</label>

  <table border="1">
    <tr>
      <th>Usuario</th>
      <th>Fecha</th>
      <th>Comentario</th>
    </tr>
    <tr v-for="(comentario, index) in comentarios" :key="index">
      <td>{{ comentario.usuario.usuario }}</td>
      <td>{{ formatearFecha(comentario.fecha) }}</td>
      <td>{{ comentario.comentario }}</td>
    </tr>
  </table>

  <Label>Agregar comentario:</Label>
  <input placeholder="Ingrese su comentario" type="text" v-model="comentario" />
  <button @click="ingresarComentario">Ingresar Comentario</button>
</template>

<script>
import { ingresarComentarioFachada } from "../../helpers/Comentario";
import { buscarTodosComentariosFachada } from "../../helpers/Comentario";
import { mapState } from "vuex";

export default {
  props: {
    temaobjeto: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      comentario: null,
      fecha: null,
      usuario: null,
      tema: null,
      comentarios: [],
    };
  },
  methods: {
    async ingresarComentario() {
      if (!this.comentario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: this.usuariologin,
        comentario: this.comentario,
        fecha: fechaActual,
        tema: this.temaobjeto,
      };

      ingresarComentarioFachada(objeto);

      this.comentario = "";
      this.valoracion = "";

      const confirmacion = confirm(
        "Comentario agregado con exito"
      );

      if (confirmacion) {
        this.$router.go(0);
      } else {
        this.$router.push({ path: "/foro" });
      }
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

    async buscarTodos() {
      console.log(this.temaobjeto);
      const data = await buscarTodosComentariosFachada(this.temaobjeto.id);

      console.log("Comentarios", data);
      if (data) {
        this.comentarios = data;
      } else {
        this.comentarios = [];
      }
    },
  },

  computed: {
    ...mapState(["usuariologin"]),
  },

  mounted() {
    if (this.temaobjeto) {
      this.buscarTodos();
    }
  },
};
</script>


<style>
</style>