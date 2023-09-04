<template>
  <label for="">Titulo:</label>
  <p>{{ temaobjeto.titulo }}</p>
  <label for="">Usuario:</label>
  <p>{{ temaobjeto.usuario }}</p>

  <label for="">Descripcion</label>
  <p>{{ temaobjeto.descripcion }}</p>
  <label for="">Comentarios:</label>

  <table border="1">
    <tr>
      <th>Usuario</th>
      <th>Fecha</th>
      <th>Comentario</th>
    </tr>
    <tr v-for="(tema, index) in temas" :key="index">
      <td>{{ tema.usuario }}</td>
      <td>{{ formatearFecha(tema.fecha) }}</td>
      <td>{{ tema.titulo }}</td>
      <td><button @click="buscarTema(tema.id)">Ver</button></td>
    </tr>
  </table>
  <Label>Agregar comentario:</Label>
  <input placeholder="Ingrese su comentario" type="text" v-model="comentario" />
  <button @click="ingresarComentario">Ingresar Comentario</button>
</template>

<script>
import { ingresarComentarioFachada } from "../../helpers/Comentario";
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
      tema: null
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
        tema: temaobjeto.id
      };

      ingresarComentarioFachada(objeto);
    },
  },
};
</script>


<style>
</style>