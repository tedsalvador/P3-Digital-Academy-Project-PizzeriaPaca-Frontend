<script setup>
import CardPromo1 from "@/components/Promos/CardPromo1.vue";

import TituloLogueado from "@/components/TituloLogueado.vue";
import NavBarLogueado from "@/components/NavBarLogueado.vue";
</script>

<template>
  <TituloLogueado></TituloLogueado>
  <NavBarLogueado></NavBarLogueado>
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
