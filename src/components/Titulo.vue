<script setup>
import { ref, computed } from "vue";
import ModalLogin from "./ModalLogin.vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { loginChange } from "../stores/loginChange";

const router = useRouter();
const store = useAuthStore();
const mobileMenuOpen = ref(false);

const modificarLogin = () => {
  if (loginChange.login == false) loginChange.setLogin(true);
  else loginChange.setLogin(false);
};

const modificarRegister = () => {
  if (loginChange.register == false) loginChange.setRegister(true);
  else loginChange.setRegister(false);
};

function logout() {
  store.user.isAuthenticated = false;
  store.user.id = "";
  store.user.username = "";
  store.user.role = "";

  localStorage.clear();
  loginChange.setLogin(false);
  loginChange.setRegister(false);
  mobileMenuOpen.value = false;

  const redirectPath = "/home";
  router.push(redirectPath);
}

const openModal = () => {
  if (loginChange.login == false) loginChange.setLogin(true);
  else loginChange.setLogin(false);

  showModal.value = true;
};

const items = ref([
  {
    name: "Dark Chocolate",
    description: "Perfect Snacks",
    price: 8.0,
    image: "https://via.placeholder.com/50",
    quantity: 1,
  },
  {
    name: "Good Source",
    description: "Sweet Snacks",
    price: 8.0,
    image: "https://via.placeholder.com/50",
    quantity: 1,
  },
  {
    name: "Coconut Chips",
    description: "Dang",
    price: 18.0,
    image: "https://via.placeholder.com/50",
    quantity: 1,
  },
]);

const deliveryAmount = 4.0;

const totalAmount = computed(() => {
  const itemsTotal = items.value.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return itemsTotal + deliveryAmount;
});

const increaseQuantity = (item) => {
  if (item.quantity < 99) {
    item.quantity++;
  }
};

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const showCart = ref(false);
const toggleCart = () => {
  showCart.value = !showCart.value;
};
const closeCart = () => {
  showCart.value = false;
};
</script>

<template>
  <div id="containerTitulo">
    <div id="containerLogoTitulo">
      <div id="logo">
        <img class="img" src="../assets/img/navbar/logo.png" alt="logo" />
      </div>
      <div id="titulo">Pizzeria Paca</div>
    </div>

    <div id="containerLogin">
      <div id="carrito" @click="toggleCart">
        <img
          class="imgCarrito"
          src="../assets/img/navbar/carrito.png"
          alt="carrito"
        />
      </div>
      <div id="login" @click="openModal">
        <img class="user" src="../assets/img/navbar/user.png" alt="user" />
      </div>
    </div>
  </div>

  <div v-if="showCart" class="cart-container-overlay" @click="closeCart">
    <div class="cart-container" @click.stop>
      <div class="cart-header">
        <h1>Carrito</h1>
        <div class="cart-count">{{ items.length }}</div>
      </div>
      <div class="cart-items">
        <div class="cart-item" v-for="item in items" :key="item.name">
          <img :src="item.image" alt="Product image" class="item-image" />
          <div class="item-details">
            <h2 class="item-name">{{ item.name }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div class="item-quantity">
            <button @click="decreaseQuantity(item)" class="quantity-button">
              -
            </button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="quantity-button">
              +
            </button>
          </div>
          <div class="item-price">
            {{ (item.price * item.quantity).toFixed(2) }}
          </div>
        </div>
      </div>
      <div class="cart-summary">
        <div class="summary-row total">
          <p>Cantidad Total</p>
          <p>{{ totalAmount.toFixed(2) }} €</p>
        </div>
      </div>
      <button class="payment-button">
        Realizar Pago
        <span class="payment-icon">➤</span>
      </button>
    </div>
  </div>

  <ModalLogin :show="showModal" @close="closeModal" />
</template>

<style scoped>
#containerTitulo {
  width: 100%;
  height: 130px;
}

#containerLogoTitulo {
  width: 20%;
  height: 130px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 130px;
}

.img {
  width: 130px;
  height: 130px;
}

#titulo {
  width: 60%;
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130px;
}

#containerLogin {
  width: 15%;
  height: 130px;
  float: right;
  display: flex;
  justify-content: space-between;
}

#carrito,
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  cursor: pointer;
}

.imgCarrito,
.user {
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease;
}

.imgCarrito:hover,
.user:hover {
  transform: scale(1.4);
}

.cart-container-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
}

.cart-container {
  width: 350px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-right: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}

.cart-count {
  background-color: rgb(182, 124, 1);
  color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-items {
  margin-top: 20px;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
}

.item-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.item-name {
  font-size: x-large;
}
.item-details {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: rgb(182, 124, 1);
  border: none;
  width: 25px;
  height: 25px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin: 0 5px;
}

.item-price {
  font-size: 18px;
  flex-shrink: 0; /* Evita que se encoja */
  white-space: nowrap;
  margin-top: 5px;
}

.cart-summary {
  margin-top: 20px;
  background-color: rgb(182, 124, 1);
  border-radius: 15px;
  padding: 20px;
}

.summary-row {
  font-weight: bolder;
  color: white;
  font-size: x-large;
}

.payment-button {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
}

.payment-icon {
  margin-left: 10px;
}

@media (min-width: 481px) and (max-width: 1024px) {
  #containerLogoTitulo {
    width: 40%;
    height: 130px;
  }

  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 130px;
  }

  #titulo {
    width: 60%;
    visibility: hidden;
  }
  #containerLogin {
    width: 20%;
    margin-right: 20px;
  }
}
@media (max-width: 480px) {
  #containerLogoTitulo {
    width: 35%;
  }

  #logo {
    width: 35%;
  }
  .img {
    width: 100px;
    height: 100px;
  }
  #titulo {
    width: 60%;
    display: none;
  }
  #containerLogin {
    width: 30%;
    margin-right: 20px;
  }
  .imgCarrito,
  .user {
    width: 30px;
    height: 30px;
    transition: transform 0.5s ease;
  }
}
</style>
