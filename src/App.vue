<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="app-container">
    <NavBar></NavBar>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/carta">Carta</RouterLink>
        <RouterLink to="/promos">Promos</RouterLink>
        <RouterLink to="/admindashboard">AdminDashboard</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <Footer></Footer>
  </div>
</template>

<style>
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
