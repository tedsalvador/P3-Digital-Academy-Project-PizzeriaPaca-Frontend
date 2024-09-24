<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import Titulo from "./components/Titulo.vue";
</script>

<template>
  <header>
    <Titulo></Titulo>
    <NavBar></NavBar>
  </header>

  <main>
    <RouterView />
  </main>

  <Footer></Footer>
</template>

<style>
* {
  font-family: "Architects Daughter", cursive;
}
html,
body {
  height: 100%;
  margin: 0;
  background-image: url("./assets/img/navbar/background.png");
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

footer {
  background-color: #f1f1f1; /* Opcional: añade un fondo para visibilidad */
  text-align: center; /* Opcional: centra el contenido del footer */
  padding: 10px; /* Opcional: añade algo de relleno */
  width: 100%;
}
</style>
