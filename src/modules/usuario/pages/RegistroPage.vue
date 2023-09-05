<template>
  <div class="pageRegistro">
    <div class="wrapper">
      <div class="form-box registro">
        <h2>Registro de Usuario</h2>
        <form @submit.prevent="registrarse">
          <div class="input-box">
            <input v-model="usuario.nombre" type="text" required />
            <label>Nombre</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.apellido" type="text" required />
            <label>Apellido</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.usuario" type="text" required />
            <label>Usuario</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.correo" type="email" required />
            <label>Correo</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.contraseña" type="password" required />
            <label>Contraseña</label>
          </div>
          <div class="input-box">
            <input
              v-model="usuario.semestre"
              type="number"
              min="1"
              max="10"
              required
            />
            <label>Semestre</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.cedula" type="text" required />
            <label>Cedula</label>
          </div>
          <div class="input-box">
            <input v-model="usuario.direccion" type="text" required />
            <label>Direccion</label>
          </div>
          <button id="button" type="submit" class="btn">Registrarse</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ingresarUsuarioFachada } from "../../helpers/usuarioCliente";

export default {
  data() {
    return {
      usuario: {
        nombre: "",
        apellido: "",
        usuario: "",
        correo: "",
        contraseña: "",
        semestre: "",
        cedula: "",
        direccion: "",
      },
    };
  },
  methods: {
    async registrarse() {
      this.usuario.contraseña = this.reverse(this.usuario.contraseña);
      const data = await ingresarUsuarioFachada(this.usuario);
      if (data === true && this.validarCedula(this.usuario.cedula)) {
        alert("Registro Exitoso");
        this.$router.push("/");
      } else if (!this.validarCedula(this.usuario.cedula)) {
        alert("Cedula No Valida");
      } else {
        alert("Usuario ya registrado");
      }
    },
    validarCedula(cedula) {
      // Eliminar espacios en blanco y guiones (si los hubiera)
      cedula = cedula.replace(/\s/g, "").replace(/-/g, "");

      // Verificar si la cédula tiene exactamente 10 dígitos y si son números
      if (/^\d{10}$/.test(cedula)) {
        return true; // La cédula es válida
      } else {
        return false; // La cédula no es válida
      }
    },
    reverse(input) {
      return input.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
.pageRegistro {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/degradado.png");
  background-size: cover;
  background-repeat: repeat;
}
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;
  width: 35%;
  background: rgb(255, 235, 210, 0.5);
  border-radius: 20px;
  box-shadow: 0 0 30px 10px rgb(0, 28, 44, 0.8);
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
  transform: translateY(-100%);
  font-size: 1em;
  color: #0022ff;
  font-weight: bold;
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

#button {
  background: #27dbd5;
  border: 2px solid #00afa9;
  padding-block: 10px;
  padding-inline: 20px;
  font-size: 20px;
  cursor: pointer;
}

@media (max-width: 768px) {
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
    margin: 30px 0;
    height: 50px;
  }
  #button {
    font-size: 16px;
  }
}
</style>