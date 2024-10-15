<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import ModalLogin from "./ModalLogin.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { loginChange } from "../stores/loginChange";
import { useCartStore } from "@/stores/cart";
import OrderService from "@/core/order/OrderService";
import { orderDto } from "@/core/order/OrderDto";

const orderNumber = ref(Math.floor(Math.random() * 100000));
const paymentType = ref("");
const dateOrder = ref(new Date().toISOString());
const userId = ref("");
const router = useRouter();
const store = useAuthStore();
const mobileMenuOpen = ref(false);
const cartStore = useCartStore();
const deliveryType = ref("");
const orderTypeCode = ref("");
const orderStatus = ref("PENDING");

const loggeadoUser = localStorage.getItem("username");
const IdUserLogged = localStorage.getItem("id");

if (
  !IdUserLogged ||
  typeof IdUserLogged !== "string" ||
  IdUserLogged.trim() === ""
) {
  IdUserLogged = "1";
}

console.log("valor de user id>>>" + IdUserLogged);

const totalAmount = computed(() => {
  return cartStore.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
});

const modificarLogin = () => {
  if (loginChange.login == false) loginChange.setLogin(true);
  else loginChange.setLogin(false);
};

const modificarRegister = () => {
  if (loginChange.register == false) loginChange.setRegister(true);
  else loginChange.setRegister(false);
};

const logout = () => {
  store.user.isAuthenticated = false;
  store.user.id = "";
  store.user.username = "";
  store.user.role = "";

  localStorage.clear();
  loginChange.setLogin(false);
  loginChange.setRegister(false);
  mobileMenuOpen.value = false;

  const redirectPath = "/";

  router.push(redirectPath);
};

const openModal = () => {
  if (loginChange.login == false) loginChange.setLogin(true);
  else loginChange.setLogin(false);

  showModal.value = true;
};

const increaseQuantity = (item) => {
  if (item.quantity < 99) {
    item.quantity++;
  }
};

const decreaseQuantity = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  } else {
    cartStore.removeFromCart(item.name);
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

if (store.user.isAuthenticated) {
  userId.value = store.user.id;
}

const sendCart = async () => {
  if (cartStore.cartItems.length === 0) {
    alert(
      "El carrito está vacío. Por favor, agregue productos antes de pagar."
    );
    return;
  }

  if (!paymentType.value) {
    alert("Por favor, seleccione un tipo de pago.");
    return;
  }

  if (!orderTypeCode.value) {
    alert("Por favor, seleccione un tipo de entrega.");
    return;
  }

  const products = cartStore.cartItems.map((item) => ({
    productId: item.id,
    productQuantity: item.quantity,
    productPrice: item.price,
  }));

  const orderDto = {
    orderNumber: orderNumber.value,
    orderTypeCode: orderTypeCode.value,
    userId: IdUserLogged,
    paymentId: paymentType.value,
    orderStatus: orderStatus.value,
    dateOrder: dateOrder.value,
    totalPaid: totalAmount.value,
    products,
  };

  console.log(
    "datos enviados ===>> " +
      orderNumber.value +
      " " +
      orderTypeCode.value +
      " " +
      store.user.id +
      " " +
      paymentType.value +
      " " +
      orderStatus.value +
      " " +
      dateOrder.value +
      " " +
      totalAmount.value
  );

  const orderService = new OrderService();
  console.log("Carrito enviado:", cartStore.cartItems);
  try {
    const response = await orderService.createOrder(orderDto);
    console.log("Orden enviada:", response);
    cartStore.clearCart();
    alert("Orden enviada con éxito!");
  } catch (error) {
    console.error("Error al enviar la orden:", error);
    alert("Error al enviar la orden");
  }
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
      <div id="login">
        <h2 class="info">Hola {{ loggeadoUser }}</h2>
      </div>
      <div id="carrito" @click="toggleCart">
        <img
          class="imgCarrito"
          src="../assets/img/navbar/carrito.png"
          alt="carrito"
        />
      </div>

      <div class="logout">
        <RouterLink to="/"
          ><img
            class="icnLogOut"
            src="../assets/img/navbar/logout.png"
            alt=""
            @click="logout"
        /></RouterLink>
      </div>
    </div>
  </div>

  <div v-if="showCart" class="cart-container-overlay" @click="closeCart">
    <div class="cart-container" @click.stop>
      <div class="cart-header">
        <h1>Carrito</h1>
        <div class="cart-count">{{ cartStore.cartItems.length }}</div>
      </div>
      <div class="cart-items">
        <div
          class="cart-item"
          v-for="item in cartStore.cartItems"
          :key="item.name"
          :productId="item.id"
        >
          <!-- <img :src="item.image" alt="Product image" class="item-image" /> -->
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
        <div class="summary-row">
          <p>Número de Pedido << {{ orderNumber }} >></p>
        </div>
        <div class="summary-row">
          <label for="paymentType">Tipo de pago : &nbsp;</label>
          <select v-model="paymentType" id="paymentType">
            <option value="E">Efectivo</option>
            <option value="T">Tarjeta</option>
          </select>
          <p hidden>{{ paymentType }}</p>
        </div>
        <br />
        <div class="summary-row">
          <label for="orderTypeCode">Tipo de entrega : </label>
          <select v-model="orderTypeCode" id="orderTypeCode">
            <option value="L">Local</option>
            <option value="D">Delivery</option>
            <option value="P">Para llevar</option>
          </select>
          <p hidden>{{ orderTypeCode }}</p>
        </div>
        <div class="summary-row total">
          <p>Fecha del Pedido</p>
          <p>{{ dateOrder }}</p>
        </div>
        <div class="cart-summary">
          <div class="summary-row">
            <span>Total : &nbsp;</span>
            <span>{{ totalAmount }} €</span>
          </div>
          <button class="payment-button" @click="sendCart" cartStore.clearCart>
            Pagar
            <span class="payment-icon">💳</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <ModalLogin :show="showModal" @close="closeModal" />
    </div>
  </div>
</template>

<style scoped>
#containerTitulo {
  width: 100%;
  height: 130px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

#containerLogoTitulo {
  width: 20%;
  height: 130px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  color: white;
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 130px;
}

.logout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
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
  width: 20%;
  margin-right: 40px;
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
.user,
.icnLogOut {
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease;
}

.icnLogOut {
  cursor: pointer;
}

.imgCarrito:hover,
.user:hover,
.icnLogOut:hover {
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
  font-size: 20px;
  font-weight: bold;
}

.cart-count {
  background-color: rgb(182, 124, 1);
  color: #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
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
  padding: 8px;
  margin-bottom: 10px;
  color: white;
  font-size: 14px;
}

.item-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.item-name {
  font-size: 16px;
}

.item-details {
  flex: 1;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-quantity {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.quantity-button {
  background-color: rgb(182, 124, 1);
  border: none;
  width: 20px;
  height: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  margin: 0 5px;
  font-size: 16px;
}

.item-price {
  font-size: 16px;
  flex-shrink: 0;
  white-space: nowrap;
  margin-top: 0px;
}

.cart-summary {
  margin-top: 20px;
  background-color: rgb(182, 124, 1);
  border-radius: 15px;
  padding: 15px;
  font-size: 16px;
}

.summary-row {
  font-weight: bolder;
  color: white;
  font-size: 18px;
}

.payment-button {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
}

.payment-icon {
  margin-left: 10px;
  font-size: 25px;
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
    width: 40%;
    margin-right: 15px;
  }

  #login {
    width: 70%;
  }

  .logout {
    width: 30%;
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
    width: 40%;
    margin-right: 15px;

  }

  .imgCarrito,
  .user,
  .icnLogOut {
    width: 30px;
    height: 30px;
    transition: transform 0.5s ease;
  }

  .info {
    font-size: 15px;
  }

  #login {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logout {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
