<template>
  <div class="container">
    <h1>
      Suscríbete a nuestra ASO
    </h1>
    <div class="form-box">
      <div class="input-box">
        <label>Usuario {{ this.usuario.usuario }}</label>
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
        <label>Cédula</label>
      </div>
      <div class="input-box">
        <input v-model="usuario.direccion" type="text" required />
        <label>Dirección</label>
      </div>
    </div>
    <button @click="registrarse">Suscribirse</button>
    <label class="error-message" v-show="mostrar" v-text="mensaje"></label>
  </div>
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
        const usuario = {
          usuario: this.usuariologin.usuario
          , user: this.usuario
        };
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(188, 212, 255);
}

.form-box {
  width: 70%;
  background: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 15px;
}

.form-box label {
  color: #A68D37;
}

.input-box {
  position: relative;
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #A68D37;
  margin-bottom: 30px;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  font-size: 0.8em;
  transform: translateY(-70%);
  font-weight: bold;
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
  font-size: 0.9em;
  color: #1d1b1b;
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

h1 {
  font-size: 2.2vmax;
}

</style>