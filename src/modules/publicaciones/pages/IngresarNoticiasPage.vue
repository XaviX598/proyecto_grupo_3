<template>
  <div>
    <h1>Inserte una noticia</h1>
    <label for="">Usuario</label>
    <input placeholder="Ingrese su usuario" type="text" v-model="usuario" />
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
import { ingresarNoticiasFachada } from "../helpers/noticiasCliente";

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

  methods: {
    async agregarNoticia() {
      if (!this.usuario || !this.descripcion || !this.titulo) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();
      const objeto = {
        usuario: null,
        descripcion: this.descripcion,
        titulo: this.titulo,
        video: this.video,
        imagen: this.imagen,
        fecha: fechaActual,
      };
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
  },
};
</script>

<style>
</style>




