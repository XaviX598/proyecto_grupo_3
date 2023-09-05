<template>
  <nav class="container">
    <div class="logo">
      <img id="imgLogo" src="../assets/logo_uce.png" />
      <h1>Facultad de Ingeniería y Ciencias Aplicadas</h1>
    </div>
    <div class="menu">
      <router-link to="/bienvenida">Inicio</router-link>
      <router-link to="/noticias">Noticias</router-link>
      <router-link to="/foro">Foro</router-link>
      <router-link to="/quejas">Quejas</router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 2.2vh;
  text-decoration: none;
  color: white;
}

.container {
  display: flex;
  background: #017DC7;
  width: 100%;
  border-bottom: 2px solid #00395a;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  padding: 7px;
}

.menu {
  padding-block: 7px;
  align-items: center;
}

a {
  margin-right: 30px;
  position: relative;
  top: 1.7vh;
}

h1 {
  margin-left: 7px;
}

#imgLogo {
  height: 6vh;
}
</style>