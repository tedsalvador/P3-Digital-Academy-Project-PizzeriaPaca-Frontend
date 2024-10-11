<script setup>
import TituloLogueado from "@/components/TituloLogueado.vue";
import NavBarLogueado from "@/components/NavBarLogueado.vue";
import Descripcion from "@/components/Descripcion.vue";
import Slider from "@/components/Slider.vue";
import Postres from "@/components/Postres.vue";
import Bebidas from "@/components/Bebidas.vue";
import Pizzas from "@/components/Pizzas.vue";
import Promos from "@/components/Promos.vue";
</script>

<template>
  <main>
    <TituloLogueado></TituloLogueado>
    <NavBarLogueado></NavBarLogueado>
    <Descripcion></Descripcion>
    <Slider></Slider>
    <Pizzas></Pizzas>
    <Postres></Postres>
    <Bebidas></Bebidas>
    <Promos></Promos>
  </main>
</template>

<style scoped></style>
