<script setup></script>

<template>
  <main>
    <div id="carouselPrincipal" class="carousel-static">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/slider/pizzaSlider.png"
            class="imgSlider"
            alt="Imagen de pizza"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#carouselPrincipal {
  width: 100%;
  height: 100%;
  text-align: center;
}

main {
  width: 100%;
  height: 350px;
}

.imgSlider {
  width: 70%;
  height: 350px;
}

h2 {
  font-size: 200px;
  color: white;
  text-shadow: 4px 4px rgb(182, 124, 1);
  z-index: 20;
}

@media (min-width: 481px) and (max-width: 1024px) {
  h2 {
    font-size: 100px;
  }
  .imgSlider {
    width: 90%;
  }
}

@media (max-width: 480px) {
  main {
    width: 100%;
    height: 150px;
  }

  #carouselPrincipal {
    width: 100%;
    height: 150px;
  }

  .imgSlider {
    width: 90%;
    height: 150px;
  }
  h2 {
    text-align: center;
    font-size: 40px;
    text-shadow: 4px 1px rgb(182, 124, 1);
  }
}
</style>
