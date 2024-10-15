<script setup>
import { ref, computed } from "vue";
import ModalLogin from "./ModalLogin.vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { loginChange } from "../stores/loginChange";

const router = useRouter();
const store = useAuthStore();
const mobileMenuOpen = ref(false);

const loggeadoUser = localStorage.getItem("username");

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
      <div id="login">
        <h2 class="info">Hola {{ loggeadoUser }}</h2>
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
  width: 30%;
  height: 130px;
  float: right;
  display: flex;
  justify-content: space-between;
}

#login {
  display: flex;
  justify-content: right;
  align-items: center;
  width: 80%;
  height: 100%;
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
    width: 30%;
    margin-right: 20px;
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
