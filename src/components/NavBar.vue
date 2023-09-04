<template>
  <nav class="container">
    <router-link to="/bienvenida"
      >Bienvenida
      <!-- <img id="imgLogo" src="" alt="No se pudo mostrar la imagen." /> -->
    </router-link>
    <router-link to="/noticias">Noticias</router-link>
    <router-link to="/foro">Foro</router-link>
    <router-link to="/ingresarQueja">IQuejas</router-link>
    <router-link to="/quejas">Quejas</router-link>
  </nav>
</template>
  
<script>
export default {
  data() {
    return {

    };
  },
};
</script>
  
<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

#imgLogo {
  height: 45px;
  position: relative;
  top: 17px;
}

#imgPerfil {
  height: 45px;
  position: relative;
  top: 17px;
}

a {
  padding: 0px 70px;
  position: relative;
  color: black;
}

.container {
  background: #27dbd5;
  padding: 10px;
  width: 100%;
  top: 0;
  border-bottom: 2px solid #00afa9;
}
</style>