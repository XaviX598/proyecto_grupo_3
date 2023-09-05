<template>
  <NavBarVue v-if="usuariologin!=null"/>
  <router-view />
  <ContactosVue v-if="usuariologin!=null"/>
  <FooterVue v-if="usuariologin!=null"/>
</template>

<script>
import ContactosVue from "./components/Contactos.vue";
import FooterVue from "./components/Footer.vue";
import NavBarVue from "./components/NavBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    NavBarVue,
    ContactosVue,
    FooterVue,
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
};
</script>

<style>
#app {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  margin: 0;
}
</style>
