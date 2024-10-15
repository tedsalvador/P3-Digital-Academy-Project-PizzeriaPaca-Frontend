<script setup>
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

import NavBarAdmin from "./components/NavBarAdmin.vue";

const route = useRoute();
</script>

<template>
  <header></header>

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
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  width: 100%;
}
</style>
