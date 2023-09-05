<template>
  <NavBarVue v-if="usuariologin == null" />
  <div class="main-content">
    <router-view />
  </div>
  <ContactosVue v-if="usuariologin == null" />
  <FooterVue v-if="usuariologin == null" />
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

body {
  margin: 0;
}

.main-content {
  flex-grow: 1; 
}
</style>
