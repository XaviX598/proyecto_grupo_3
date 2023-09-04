<template>
  <button @click="registrarse">Registrarse</button>
  <label for="" v-show="mostrar" v-text="mensaje"></label>
</template>

<script>
import { suscribirseFachada } from "../../helpers/SuscripcionCliente";
export default {
  data() {
    return {
      usuario: "flores",
      mensaje: "",
      mostrar: null,
    };
  },
  props: {
    usuarioDato: {
      type: String,
      required: true,
    },
  },
  methods: {
    async registrarse() {
      this.mostrar = false;
      //Poner este dato de aqui cuando se mande, se debe enviar solo en usuario, no todo el objeto
      //const usuario = { usuario: this.usuarioDato};
      const usuario = { usuario: this.usuario };
      const suscrito = await suscribirseFachada(usuario);
      if (suscrito) {
        this.mensaje = "Se a suscrito a la ASO";
      } else {
        this.mensaje = "¡¡¡Usted ya esta suscrito a la ASO!!!!";
      }
      this.mostrar = true;
    },
  },
};
</script>

<style>
</style>