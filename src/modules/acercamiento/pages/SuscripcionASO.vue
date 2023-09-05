<template>
  <div class="form-box registro">
    <div class="input-box">
      <label>Usuario: {{ this.usuario.usuario }}</label>
    </div>
    <div class="input-box">
      <input v-model="usuario.nombre" type="text" required />
      <label>Nombre</label>
    </div>
    <div class="input-box">
      <input v-model="usuario.apellido" type="text" required />
      <label>Apellido</label>
    </div>
    <div class="input-box">
      <input v-model="usuario.correo" type="email" required />
      <label>Correo</label>
    </div>
    <div class="input-box">
      <input v-model="usuario.semestre" type="text" required />
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
  </div>
  <button @click="registrarse">Registrarse</button>
  <label for="" v-show="mostrar" v-text="mensaje"></label>
</template>

<script>
import { suscribirseFachada } from "../../helpers/SuscripcionCliente";
import { mapState } from "vuex";
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
      mensaje: "",
      mostrar: null,
    };
  },
  computed: {
    ...mapState(["usuariologin"]),
  },
  created() {
    this.cargardatos();
  },
  methods: {
    async cargardatos() {
      this.usuario.nombre = this.usuariologin.usuario;
      this.usuario.apellido = this.usuariologin.apellido;
      this.usuario.correo = this.usuariologin.correo;
      this.usuario.usuario = this.usuariologin.usuario;
      this.usuario.semestre = this.usuariologin.semestre;
      this.usuario.cedula = this.usuariologin.cedula;
      this.usuario.direccion = this.usuariologin.direccion;
    },
    async registrarse() {
      this.mostrar = false;
      const { nombre, apellido, correo, semestre, cedula, direccion } =
        this.usuario;
      if (
        !nombre ||
        !apellido ||
        !correo ||
        !semestre ||
        !cedula ||
        !direccion
      ) {
        this.mensaje = "Por favor, complete todos los campos";
      } else {
        const usuario = { usuario: this.usuariologin.usuario
          ,user:this.usuario };
        const suscrito = await suscribirseFachada(usuario);
        if (suscrito) {
          this.mensaje = "Se ha suscrito a la ASO";
        } else {
          this.mensaje = "¡Usted ya está suscrito a la ASO!";
        }
      }
      this.mostrar = true;
    },
  },
};
</script>

<style scope>
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
</style>