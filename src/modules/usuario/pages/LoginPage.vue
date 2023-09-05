<template>
  <div class="pageLogin">
    <div class="wrapper">
      <div class="form-box login">
        <div class="user">
          <font-awesome-icon class="userIcon" icon="fa-regular fa-user" style="color: #ffffff;" />
        </div>
        <form @submit.prevent="verificarLogin">
          <div class="input-box">
            <!-- <div>
              <font-awesome-icon icon="fa-solid fa-user" style="color: #4a4a4a;" />
            </div> -->
            <div>
              <input v-model="usuario" type="text" required />
              <label>Usuario</label>
            </div>

          </div>
          <div class="input-box">
            <input v-model="contraseña" type="password" required />
            <label>Contraseña</label>
          </div>
          <button id="button" type="submit" class="btn">Ingresar</button>
          <div class="login-register">
            <p>
              No tienes una cuenta?
              <router-link to="/registro" class="register-link">Registrate</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginUsuarioFachada } from "../../helpers/usuarioCliente";
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      usuario: null,
      contraseña: null,
      error: null,
      user: null,
    };
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
  methods: {
    ...mapMutations(["setUsuarioLogin"]),
    cambiarUsuario(objeto) {
      const nuevoObjeto = objeto;
      this.setUsuarioLogin(nuevoObjeto);
    },
    async verificarLogin() {
      const data = await loginUsuarioFachada(
        this.usuario,
        this.reverse(this.contraseña)
      );
      if (data.id != null) {
        this.user = data;
        this.cambiarUsuario(this.user);
        this.$router.push("/bienvenida");
      } else {
        alert("Usuario o contraseña Incorrectos");
      }
    },
    reverse(input) {
      return input.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.pageLogin {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('C:\Users\kevin\Documents\Visual_workspace\PaginaProyectoGrupal\proyecto_grupo_3\src\assets\degradado.png');
  background-size: cover;
  background-repeat: repeat;
}

.fa-user {
  font-size: 4vw;
}

.user {
  display: flex;
  background: #A68D37;
  width: 10vw;
  height: 10vw;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -10px;
  left: 35%;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35%;
  background: rgb(255, 235, 210, 0.5);
  border-radius: 15px;
  box-shadow: 0 0 30px 10px rgb(0, 28, 44, 0.8);
}

.wrapper .form-box {
  width: 100%;
  padding: 40px;
}

.input-box {
  position: relative;
  background: white;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #1d1b1b;
  margin: 30px 0;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: #ff5555;
  font-weight: 500;
  pointer-events: none;
  transition: 0.5s;
}

.input-box input:focus~label,
.input-box input:valid~label {
  top: -5px;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.1em;
  color: #1d1b1b;
  font-weight: 600;
}

.input-box .icon {
  position: absolute;
  right: 8px;
  font-size: 1.2em;
  color: #1d1b1b;
  line-height: 57px;
}

.error-message {
  display: flex;
  color: #ff5555;
  font-size: 1.2em;
  font-weight: bold;
  align-content: center;
  justify-content: center;
  margin-bottom: 20px;
}

h2 {
  margin: 0;
}

#button {
  background: #27dbd5;
  border: 2px solid #00afa9;
  padding-block: 10px;
  padding-inline: 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>