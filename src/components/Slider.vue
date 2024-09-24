<script setup></script>

<template>
  <main>
    <div
      id="carouselPrincipal"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/slider/pizza2.png"
            class="imgSlider"
            alt="..."
          />
          <div class="carousel-caption">
            <h2>2x1 EN NAPOLITANAS</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/slider/pizza2.png"
            class="imgSlider"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/slider/pizza2.png"
            class="imgSlider"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPrincipal"
        data-bs-slide="prev"
      >
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselPrincipal"
        data-bs-slide="next"
      >
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </main>
</template>

<style scoped>
#carouselPrincipal {
  width: 100%;
  height: 500px;
  text-align: center;
  margin-top: 30px;
}

.imgSlider {
  width: 50%;
  height: 500px;
  opacity: 0.3;
}
h2 {
  font-size: 200px;
  color: white;
  text-shadow: 4px 4px rgb(182, 124, 1);
  z-index: 20;
}
.carousel-caption {
  height: 500px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 481px) and (max-width: 1024px) {
  h2 {
    font-size: 100px;
  }
}
@media (max-width: 480px) {
  #carouselPrincipal {
    width: 100%;
    height: 250px;
  }
  .carousel-caption {
    height: 250px;
    text-align: center;
  }
  .imgSlider {
    width: 50%;
    height: 250px;
  }
  h2 {
    text-align: center;
    font-size: 40px;
    text-shadow: 4px 1px rgb(182, 124, 1);
  }
}
</style>
