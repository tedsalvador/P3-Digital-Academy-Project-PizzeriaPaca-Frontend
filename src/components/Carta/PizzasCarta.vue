<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import MenuCarta from "../MenuCarta.vue";
import Titulo from "../Titulo.vue";
import NavBar from "../NavBar.vue";
import { useCartStore } from "@/stores/cart";

const modalVisible = ref(false);
const fullDescription = ref("");
const cartStore = useCartStore();

const openModal = (description) => {
  fullDescription.value = description;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};

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
    pizzas.value = response.data;
  } catch (error) {
    console.error("Error al cargar las pizzas:", error);
  }
};

onMounted(() => {
  fetchPizzas();
});

const addPizzaToCart = (pizzaName, price, id) => {
  cartStore.addToCart({ name: pizzaName, price, id });
};

const pizzas = ref([]);
</script>

<template>
  <Titulo></Titulo>
  <NavBar />
  <MenuCarta />
  <main>
    <div class="cards-container">
      <div v-for="(pizza, index) in pizzas" :key="pizza.id" class="card">
        <div class="personaje">
          <div class="imagen_personaje">
            <img
              class="imagen_personaje"
              :src="pizza.image"
              :alt="pizza.name"
            />
          </div>
          <div class="detalle">
            <div class="contTitulo">
              <h2>{{ pizza.name }}</h2>
            </div>
            <div class="contTexto">
              <p>
                {{ pizza.description.slice(0, 120) }}
                {{ pizza.description.length > 120 ? "..." : "" }}
              </p>
            </div>
            <div class="contBtn">
              <div class="btn" @click="openModal(pizza.description)">
                Leer Más
              </div>
            </div>
            <div class="containerPrecioCarrito">
              <div class="contPrecio">{{ pizza.price }}€</div>

              <div class="contCarrito">
                <img
                  class="imgCarro"
                  src="../../assets/img/carta/carro.png"
                  alt="Carrito"
                  @click="addPizzaToCart(pizza.name, pizza.price, pizza.id)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="modalVisible" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-modal" @click="closeModal">&times;</span>
        <h2 class="tituloModal">Descripción Completa</h2>
        <p class="full-description">{{ fullDescription }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url(../../assets/img/kitchen/backgroundPizza.png);
  background-size: cover;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cards-container {
  margin-top: 30px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 20px;
}

.card {
  height: 390px;
  width: 350px;
  margin: 10px;
  margin-bottom: 30px;
  transition: 300ms;
  border: none;
  position: relative;
}

.personaje {
  height: 390px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: rgb(182, 124, 1);
  transition: 300ms;
  position: absolute;
}

.imagen_personaje {
  height: 160px;
  width: 85%;
  margin-top: -20px;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 200px;
  transition: 300ms;
  filter: drop-shadow(5px -4px 10px #000);
}

.detalle {
  height: 240px;
  width: 350px;
  background-color: white;
  position: absolute;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  margin-top: 150px;
  z-index: 2;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  transition: 1s;
  border: 1px solid rgb(182, 124, 1);
}

.full-description {
  font-size: 20px;
}

.card:hover {
  transform: scale(1.1);
}

.card:hover .imagen_personaje {
  transform: translatey(-17px);
  transition: 1s;
  filter: none;
}

.card:hover .personaje {
  background-image: radial-gradient(white, rgb(182, 124, 1));
}
.contTitulo {
  height: 60px;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
}
.contTexto {
  height: 60px;
}
p {
  margin: auto;
  width: 90%;
  font-size: 12px;
}
.contBtn {
  height: 50px;
  margin-top: -25px;
}
.btn {
  width: 150px;
  height: 40px;
  margin: auto;
  cursor: pointer;
  background-color: rgb(182, 124, 1);
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  background-color: white;
  color: rgb(182, 124, 1);
}
.containerPrecioCarrito {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
}
.contPrecio {
  width: 50%;
  height: 40px;
  font-size: 40px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(182, 124, 1);
}
.contCarrito {
  width: 50%;
  height: 40px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contCarrito:hover .imgCarro {
  content: url("../../assets/img/carta/carrito.png");
  background-color: rgb(182, 124, 1);
  padding: 5px;
  border-radius: 10px;
}

.imgCarro {
  width: 40px;
  height: 40px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  max-width: 600px;
  text-align: center;
  position: relative;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}
.tituloModal {
  color: rgb(182, 124, 1);
}
@media (min-width: 481px) and (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .card {
    height: 390px;
    width: 350px;
    margin: 10px;
    margin-bottom: 50px;
    transition: 300ms;
    border: none;
    position: relative;
  }
}
@media (max-width: 480px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 390px;
    width: 270px;
  }
  .full-description {
    font-size: 10px;
  }
  .card:hover .imagen_personaje {
    transform: translatey(-17px);
  }

  .personaje {
    height: 390px;
    width: 270px;
  }

  .imagen_personaje {
    height: 125px;
    width: 90%;
  }

  .detalle {
    height: 240px;
    width: 270px;
  }
  .contTexto {
    height: 60px;
  }
  p {
    margin: auto;
    width: 90%;
    font-size: 10px;
  }
}
</style>
