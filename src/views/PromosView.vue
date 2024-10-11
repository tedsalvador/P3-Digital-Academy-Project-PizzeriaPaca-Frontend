<script setup>
import TituloLogueado from "@/components/TituloLogueado.vue";
import CardPromo1 from "@/components/Promos/CardPromo1.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <TituloLogueado></TituloLogueado>
  <NavBar></NavBar>
  <main>
    <CardPromo1></CardPromo1>
  </main>
</template>
<style scoped>
main {
  background-color: white;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
