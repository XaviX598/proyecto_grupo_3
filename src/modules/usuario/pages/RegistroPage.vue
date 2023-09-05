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
  left: 0;
  width: 100%;
  height: 150%;
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
  height: 1000px;
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
  font-weight: bold;
  align-content: center;
  justify-content: center;
  margin: 14px;
}

#button {
  margin-top: 10px;
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
    max-width: 100%;
    border: 0;
  }

  .form-box {
    padding: 10px;
  }

  .form-box h2 {
    font-size: 1.2em;
  }
}
</style>