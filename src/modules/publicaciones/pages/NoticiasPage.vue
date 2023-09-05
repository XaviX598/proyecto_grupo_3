<template>
  <div class="container">
    <div>
      <button @click="agregarNoticia">Ingresa tu noticia</button>
    </div>
    <div class="noticia">
      <tr class="individual" v-for="(noticia, id) in noticias" :key="id">
        <div class="encabezado">
          <h1>{{ noticia.usuario.usuario }}</h1>
          <h1>{{ formatearFecha(noticia.fecha) }}</h1>
        </div>

        <h1>{{ noticia.titulo }}</h1>
        <p>{{ noticia.descripcion }}</p>
        <div>
          <img v-if="comprobar(noticia.imagen)" :src="noticia.imagen" alt="No se pudo encontrar la imagen" />
        </div>

        <iframe v-if="comprobar(noticia.video)" width="560" height="315"
          :src="'https://www.youtube.com/embed/' + noticia.video" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </tr>
    </div>
  </div>
</template>

<script>
import { buscarTodosFachada } from "../../helpers/noticiasCliente";

export default {
  data() {
    return {
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

    comprobar(contenido) {
      if (contenido != "" && contenido != null) {
        return true;
      } else {
        return false;
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
  },

  mounted() {
    this.obtener();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(188, 212, 255);
}

.noticia {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.individual {
  background: white;
  width: 70%;
  margin: 10px;
  border-radius: 15px;
  padding-inline: 20px;
}

.encabezado {
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 2vmax;
}

img {
  width: 50vmin;
  margin-bottom: 20px;
}

iframe {
  width: 60vmin;
  margin-bottom: 20px;
}
</style>