<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
import Titulo from "./components/Titulo.vue";
</script>

<template>
<<<<<<< HEAD
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/carta">Carta</RouterLink>
      <RouterLink to="/promos">Promos</RouterLink>
      <RouterLink to="/admindashboard">AdminDashboard</RouterLink>
      <RouterLink to="/kitchen">Kitchen</RouterLink>

    </nav>
  </header>
=======
  <div class="app-container">
    <header>
      <Titulo></Titulo>
      <NavBar></NavBar>
    </header>
>>>>>>> 8e6df8725452e697dc123dc875cc7af9e0bee8c0

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
