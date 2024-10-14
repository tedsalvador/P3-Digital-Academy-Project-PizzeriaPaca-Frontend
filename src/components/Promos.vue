<script setup></script>

<template>
  <main id="promosSection">
    <div class="separador"></div>
    <div id="containerTitulo">Nuestras promos</div>
    <div id="containerTexto">
      Disfruta de nuestras mejores promos en nuesta pizzeria
    </div>

    <div
      id="carouselPromos"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/img/promos/promo1.png"
            class="imgSlider"
            alt="..."
          />
          <div class="containerTituloPromos">
            <div class="tituloPromos">Promo Pizzas Romanas 2x1</div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img/promos/promo2.png"
            class="imgSlider"
            alt="..."
          />
          <div class="containerTituloPromos">
            <div class="tituloPromos">Promo Bebida gratis</div>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="../assets/img//promos/promo3.png"
            class="imgSlider"
            alt="..."
          />
          <div class="containerTituloPromos">
            <div class="tituloPromos">Promo Postre Gratis</div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPizzas"
        data-bs-slide="prev"
      >
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselPizzas"
        data-bs-slide="next"
      >
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div id="btnVerPromos">
      <RouterLink to="/promos">
        <button class="botonLinkPromos">Conoce todas nuestras promos</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: #1aab8a;
  height: 1000px;
}
.separador {
  height: 100px;
}
#containerTitulo {
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: white;
}
#containerTexto {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #cecdcd;
}
#carouselPromos {
  width: 100%;
  height: 630px;
  text-align: center;
  margin-top: 30px;
}

.imgSlider {
  width: 50%;
  height: 450px;
  opacity: 1;
  margin-bottom: 30px;
}
h2 {
  font-size: 200px;
  color: white;
  text-shadow: 4px 4px #1aab8a;
  z-index: 20;
}
.containerTituloPromos {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tituloPromos {
  width: 50%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/navbar/navbackground.png");
  background-size: 100% 100%;
  font-size: 40px;
}

#btnVerPromos {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
.botonLinkPromos {
  background: fff;
  color: #1aab8a;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
.botonLinkPromos:hover {
  background: #1aab8a;
  color: #fff;
}
.botonLinkPromos:before,
.botonLinkPromos:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #fff;
  transition: 400ms ease all;
}
.botonLinkPromos:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.botonLinkPromos:hover:before,
.botonLinkPromos:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
@media (min-width: 481px) and (max-width: 1024px) {
  h2 {
    font-size: 100px;
  }
  .tituloPromos {
    width: 80%;
    height: 80px;
  }
  #containerTexto {
    text-align: center;
    height: auto;

    padding-left: 20px;
    padding-right: 20px;
  }
}
@media (max-width: 480px) {
  main {
    height: 600px;
  }
  #carouselPromos {
    width: 100%;
    height: 350px;
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
  #containerTitulo {
    height: 50px;
    font-size: 35px;
  }
  .separador {
    height: 30px;
  }
  #containerTexto {
    padding: 15px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    margin-bottom: 20px;
  }
  .containerTituloPromos {
    width: 100%;
    height: 50px;
    margin-top: -20px;
  }
  .tituloPromos {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/img/navbar/navbackground.png");
    background-size: 100% 100%;
    font-size: 20px;
  }
  #btnVerPromos {
    width: 100%;
    height: 150px;
  }
  .botonLinkPromos {
    font-size: 1em;
  }
}
</style>
