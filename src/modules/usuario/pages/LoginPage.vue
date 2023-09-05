<template>
  <div class="pageLogin">
    <div class="wrapper">
      <div class="form-box login">
        <h2>Login</h2>
        <form @submit.prevent="verificarLogin">
          <div class="input-box">
            <input v-model="usuario" type="text" required />
            <label>Usuario</label>
          </div>
          <div class="input-box">
            <input v-model="contraseña" type="password" required />
            <label>Contraseña</label>
          </div>
          <button id="button" type="submit" class="btn">Ingresar</button>
          <div class="login-register">
            <p>
              No tienes una cuenta?
              <router-link to="/registro" class="register-link"
                >Registrate</router-link
              >
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
        //console.log(this.user);
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c2ffd3;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 440px;
  background: #ffebd2;
  border: 6px solid #93e3d4;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
.wrapper .form-box {
  width: 100%;
  padding: 40px;
}
.form-box h2 {
  font-size: 2.2em;
  color: #000000;
  text-align: center;
}
.input-box {
  position: relative;
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
.input-box input:focus ~ label,
.input-box input:valid ~ label {
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

#button {
  background: #27dbd5;
  border: 2px solid #00afa9;
  padding-block: 10px;
  padding-inline: 20px;
  font-size: 20px;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .wrapper {
    width: 90%;
    height: auto;
    max-width: 400px; 
  }
  .form-box {
    padding: 20px;
  }
  h2 {
    font-size: 1.8em;
  }
  .input-box {
    margin: 20px 0;
  }
  #button {
    font-size: 18px;
  }
}

@media screen and (max-width: 480px) {
  .wrapper {
    width: 90%;
    max-width: none; 
  }
  .form-box {
    padding: 10px;
  }
  h2 {
    font-size: 1.5em;
  }
  .input-box {
    margin: 15px 0;
  }
  #button {
    font-size: 16px;
  }
}
</style>