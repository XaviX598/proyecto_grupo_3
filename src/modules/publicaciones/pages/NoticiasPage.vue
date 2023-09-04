<template>
  <div class="noticia">
      <tr v-for="(noticia, id) in noticias" :key="id">
        <h1>{{ noticia.usuario }}</h1>
        <h1>{{ noticia.fecha }}</h1>
        <h1>{{ noticia.titulo }}</h1>
        <p>{{ noticia.descripcion }}</p>

        <img :src="noticia.imagen" alt="No se encontro la imagen" />

        <iframe :src="noticia.video" frameborder="0"></iframe>
      </tr>
  </div>

  <div>
    <button @click="agregarNoticia">Ingresa tu noticia</button>
  </div>
</template>

<script>
import {
  buscarTodosFachada,
  ingresarNoticiasFachada,
} from "../../helpers/noticiasCliente";

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

    agregarNoticia() {
      this.$router.push({ path: "/ingresarNoticias" });
    },
  },

  mounted() {
    this.obtener();
  },
};
</script>

<style>

.noticia{

display: flex;
flex-direction: column;
justify-content: center;
align-items: center
;

}
</style>