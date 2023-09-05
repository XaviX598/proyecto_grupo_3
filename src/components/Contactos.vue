<template>
  <div class="container">
    <div>
      <h1>Contacto</h1>
      <p>Cdla. Universitaria</p>
      <br>
      <p>
        <font-awesome-icon icon="fa-solid fa-location-dot" style="color: #ffffff" />
        <a id="ubicacion"
          href="https://www.google.com.ec/maps/place/Facultad+de+Ingenier%C3%ADa+y+Ciencias+Aplicadas/@-0.1979089,-78.5037863,19z/data=!3m1!4b1!4m6!3m5!1s0x91d59bb0fff6ee23:0x11e34c8a243dcbf3!8m2!3d-0.1979102!4d-78.5031426!16s%2Fg%2F11q_58brpv?hl=es&entry=ttu">Gaspar
          de Carvajal y Gilberto Gato Sobral,RF2W+RPQ, Quito 170521</a>
      </p>
      <br>
      <p>
        <font-awesome-icon icon="fa-solid fa-phone" style="color: #ffffff" />
        <a href="tel:+022542026">(02) 254 - 2026</a>
      </p>
      <br>
      <p>
        <font-awesome-icon icon="fa-solid fa-envelope" style="color: #ffffff" />
        <a href="mailto:fing.soporte@uce.edu.ec">fing.soporte@uce.edu.ec</a>
      </p>
      <br>
      <p>Redes sociales</p>
      <br>
      <div class="redes">
        <a href="https://www.facebook.com/FingUce/">
          <font-awesome-icon icon="fa-brands fa-square-facebook" style="color: #ffffff" />
        </a>
        <a href="https://www.facebook.com/messages/t/185710209608684">
          <font-awesome-icon icon="fa-brands fa-facebook-messenger" style="color: #ffffff;" />
        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 20px;
}

h2 {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}

.container {
  background: #017DC7;
  width: 100%;
  border-top: 2px solid #00395a;
}

.redes {
  margin-bottom: 20px;
}

.fa-location-dot,
.fa-phone,
.fa-envelope,
.fa-square-facebook,
.fa-facebook-messenger {
  margin-inline: 10px;
}

.fa-location-dot:hover {
  animation: flip 1s infinite;
}

@keyframes flip {
  0% {
    transform: scaleX(1);
  }

  50% {
    transform: scaleX(-1);
  }

  100% {
    transform: scaleX(1);
  }
}

.fa-phone:hover {
  animation: movePhone 0.5s infinite;
}

@keyframes movePhone {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px) rotate(5deg);
    /* Eleva el teléfono */
  }

  100% {
    transform: translateY(0);
    /* Vuelve a la posición inicial */
  }
}

p {
  margin: 0px;
  font-size: 1.5vmax;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}</style>