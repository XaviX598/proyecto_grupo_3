<template>
  <div class="tabla">
    <table border="1">
      <tr>
        <th>Usuario</th>
        <th>Fecha</th>
        <th>Descripcion</th>
        <th>titulo</th>
        <th>Imagen</th>
        <th>Video</th>
      </tr>
      <tr v-for="(noticia, id) in noticias" :key="id">
        <td>{{ noticia.usuario }}</td>
        <td>{{ noticia.fecha }}</td>
        <td>{{ noticia.descripcion }}</td>
        <td>{{ noticia.titulo }}</td>
        <td>{{ noticia.imagen }}</td>
        <td>{{ noticia.video }}</td>
      </tr>
    </table>
  </div>

  <div>
          <button @click="agregarNoticia">Ingresa tu noticia</button>

  </div>


</template>

<script>
import {
  buscarTodosFachada,
  ingresarNoticiasFachada,
} from "../helpers/noticiasCliente";

export default {
  data() {
    return {
      usuario: "Xavier",
      noticias: [],
    };
  },

  methods: {
    async obtener() {
      const data = await buscarTodosFachada();
      this.noticias = data;
      console.log(data);
    },

    agregarNoticia(){
     this.$router.push({ path: "/ingresarNoticias" });

    }
  },

  mounted() {
    this.obtener();
  },
};
</script>

<style>
</style>