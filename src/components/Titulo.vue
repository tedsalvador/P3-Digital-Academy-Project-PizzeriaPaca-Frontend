<script setup>
import { ref } from "vue";
import ModalLogin from "./ModalLogin.vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
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
      <div id="carrito">
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

  <ModalLogin :show="showModal" @close="closeModal" />
</template>
<style scoped>
#containerTitulo {
  width: 100%;
  height: 130px;
}
#containerLogoTitulo {
  width: 30%;
  height: 130px;
  float: left;
}
#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 30%;
  height: 130px;
}
.img {
  width: 130px;
  height: 130px;
}
#titulo {
  width: 30%;
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
}
#carrito {
  width: 50%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  color: white;
}
#login {
  width: 50%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  color: white;
}
.imgCarrito {
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease;
}
.imgCarrito:hover {
  transform: scale(1.4);
}
.user {
  width: 50px;
  height: 50px;
  transition: transform 0.5s ease;
}
.user:hover {
  transform: scale(1.4);
}

@media (min-width: 481px) and (max-width: 1024px) {
  #containerLogoTitulo {
    width: 50%;
  }
  #logo {
    margin-left: 10px;
  }

  #titulo {
    display: none;
  }
  .imgCarrito {
    width: 60px;
    height: 60px;
  }
  .user {
    width: 60px;
    height: 60px;
  }
  #containerLogin {
    width: 25%;
  }
}
@media (max-width: 480px) {
  #containerTitulo {
    height: 100px;
  }
  #containerLogoTitulo {
    height: 100px;
    width: 50%;
  }
  #logo {
    width: 50%;
    height: 100px;
  }
  .img {
    width: 50px;
    height: 50px;
  }
  #titulo {
    display: none;
  }
  #containerLogin {
    width: 35%;
    height: 100px;

    float: right;
  }
  #carrito {
    width: 50%;
    height: 100px;
  }
  #login {
    height: 100px;
  }
  .imgCarrito {
    width: 30px;
    height: 30px;
  }
  .user {
    width: 30px;
    height: 30px;
  }
}
</style>
