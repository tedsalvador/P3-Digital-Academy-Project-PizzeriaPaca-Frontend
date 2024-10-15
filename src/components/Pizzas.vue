<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const pizzas = ref([]);

const fetchPizzas = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/v1/products/type/PIZZA",
      {
        headers: {
          Authorization: "Basic YWRtaW46cGFzc3dvcmQ=",
          "Content-Type": "application/json",
        },
      }
    );

    pizzas.value = response.data.map((pizza) => ({
      id: pizza.id,
      name: pizza.name,
      image: pizza.image,
    }));
  } catch (error) {
    console.error("Error al cargar las pizzas:", error);
  }
};

onMounted(() => {
  fetchPizzas();
});
</script>

<template>
  <main>
    <div class="separador"></div>
    <div id="containerTitulo">Nuestras pizzas</div>
    <div id="containerTexto">
      Disfruta de nuestras mejores pizzas en nuestra pizzería
    </div>

    <div
      id="carouselPizzas"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(pizza, index) in pizzas"
          :class="{ active: index === 0 }"
          :key="pizza.id"
        >
          <img :src="pizza.image" class="imgSlider" alt="Pizza" />
          <div class="containerTituloPizza">
            <div class="tituloPizza">{{ pizza.name }}</div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselPizzas"
        data-bs-slide="prev"
      >
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselPizzas"
        data-bs-slide="next"
      >
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    <div id="btnVerPizzas">
      <RouterLink to="/pizzas">
        <button class="botonLinkPizzas">Conoce todas nuestras pizzas</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(182, 124, 1);
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
#carouselPizzas {
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
  text-shadow: 4px 4px rgb(182, 124, 1);
  z-index: 20;
}
.containerTituloPizza {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tituloPizza {
  width: 50%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/navbar/navbackground.png");
  background-size: 100% 100%;
  font-size: 40px;
}

#btnVerPizzas {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
.botonLinkPizzas {
  background: fff;
  color: rgb(182, 124, 1);
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
.botonLinkPizzas:hover {
  background: rgb(182, 124, 1);
  color: #fff;
}
.botonLinkPizzas:before,
.botonLinkPizzas:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #fff;
  transition: 400ms ease all;
}
.botonLinkPizzas:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
.botonLinkPizzas:hover:before,
.botonLinkPizzas:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
@media (min-width: 481px) and (max-width: 1024px) {
  h2 {
    font-size: 100px;
  }
  .tituloPizza {
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
    height: 650px;
  }
  #carouselPizzas {
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
  .containerTituloPizza {
    width: 100%;
    height: 50px;
    margin-top: -20px;
  }
  .tituloPizza {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../assets/img/navbar/navbackground.png");
    background-size: 100% 100%;
    font-size: 20px;
  }
  #btnVerPizzas {
    width: 100%;
    height: 150px;
  }
  .botonLinkPizzas {
    font-size: 1em;
  }
}
</style>
