<template>
  <div class="carousel-container">
    <carousel :items-to-show="1">
        
      <slide :key="slide">
        <div class="elementos">
          <h4>Noticias</h4>

          <router-link to="/noticias">
            <img src="../../../assets/noticia1.png" alt="" />
          </router-link>
        </div>
      </slide>

      <slide :key="slide">
        <div class="elementos">
          <h4>Foro</h4>

          <router-link to="/foro">
            <img src="../../../assets/foro1.png" alt="" />
          </router-link>
        </div>
      </slide>

      <slide :key="slide">
        <div class="elementos">
          <h4>Quejas</h4>

          <router-link to="/quejas">
            <img src="../../../assets/queja1.png" alt="" />
          </router-link>
        </div>
      </slide>

      <slide :key="slide">
        <div class="elementos">
          <h4>Suscribirse</h4>

          <router-link to="/suscripcionAso">
            <img src="../../../assets/suscribirse1.png" alt="" />
          </router-link>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
  
  <script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      items: [
        {
          titulo: "Slide 1",
          image: "./noticia1.png",
        },
        {
          titulo: "Slide 2",
          image:
            "https://poptv.orange.es/wp-content/uploads/sites/3/2022/09/untitled-26.jpg",
        },
        // Agrega más objetos para más slides
      ],
    };
  },
};
</script>
  
  
<style scoped>


slide {
  width: 80vw;
}
img {
  width: 60%;
}

.elementos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

</style>