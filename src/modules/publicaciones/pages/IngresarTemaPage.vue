<template>
  <label for="">Titulo: </label>
  <input placeholder="Ingrese el Titulo" type="text" v-model="titulo" />
  <label for="">Descripcion: </label>

  <input
    placeholder="Ingrese la descripcion"
    type="text"
    v-model="descripcion"
  />
  <div class="btn_guardar">
    <button @click="ingresarTema">Ingresar Tema</button>
  </div>

  <div class="btn_regresar">
    <button @click="regresar">Regresar al foro</button>
  </div>
</template>
  
  
  <script>
import { ingresarTemaFachada } from "../../helpers/Foro";
import { mapState } from "vuex";

export default {
  data() {
    return {
      titulo: null,
      descripcion: null,
      fecha: null,
      usuario: null,
    };
  },
  methods: {
    ingresarTema() {
      if (!this.descripcion || !this.titulo) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
      }
      const fechaActual = new Date().toISOString();

      const objeto = {
        usuario: this.usuariologin,
        descripcion: this.descripcion,
        titulo: this.titulo,
        fecha: fechaActual,
      };

      ingresarTemaFachada(objeto);
      this.descripcion = "";
      this.titulo = "";

      this.valoracion = "";

      const confirmacion = confirm(
        "Nuevo Tema agregada con éxito"
      );


      if (confirmacion) {
      } else {
        this.$router.push({ path: "/foro" });
      }

    },

    regresar() {
      this.$router.push({ path: "/foro" });
    },
  },

  computed: {
    ...mapState(["usuariologin"]),
  },
};
</script>
  
  <style>
</style>