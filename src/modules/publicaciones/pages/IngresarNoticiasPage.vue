<template>
  <div>
    <h1>Inserte una noticia</h1>
    <label for="">Titulo</label>
    <input placeholder="Ingrese su usuario" type="text" v-model="titulo" />
    <label for="">Descripcion</label>
    <input placeholder="Ingrese su usuario" type="text" v-model="descripcion" />
    <label for="">Imagen</label>
    <input placeholder="Ingrese su usuario" type="text" v-model="imagen" />
    <label for="">Video</label>
    <input placeholder="Ingrese su usuario" type="text" v-model="video" />
    <div class="btn_guardar">
      <button @click="agregarNoticia">Ingresa tu noticia</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ingresarNoticiasFachada } from "../../helpers/noticiasCliente";

export default {
  data() {
    return {
      titulo: null,
      usuario: null,
      descripcion: null,
      imagen: null,
      video: null,
      fecha: null,
    };
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
  methods: {
    async agregarNoticia() {
      if (!this.descripcion || !this.titulo) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const user = {
        id: this.usuariologin.id
      };

      this.comprobar();
      const objeto = {
        usuario: user,
        descripcion: this.descripcion,
        titulo: this.titulo,
        video: this.video,
        imagen: this.imagen,
        fecha: fechaActual,
      };

      console.log(objeto)
      ingresarNoticiasFachada(objeto);
      this.usuario = "";
      this.descripcion = "";
      this.titulo = "";
      this.imagen = "";
      this.video = "";

      const confirmacion = confirm(
        "Noticia agregada con éxito, ¿Desea agregar otra noticia?"
      );

      if (confirmacion) {
      } else {
        this.$router.push({ path: "/noticias" });
      }
    },
    comprobar() {
      const url = this.video
      const regex1 = /https:\/\/www\.youtube\.com\/watch\?v=/;
      const regex2 = /https:\/\/youtu\.be\//;
      if (regex1.test(url)) {
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoID = urlParams.get("v");
        this.video = videoID;
      } else if (regex2.test(url)) {
        const videoID = url.split("/").pop();
        this.video = videoID;
      } else {
        this.video = url;
      }
    },
  },
};
</script>

<style></style>


