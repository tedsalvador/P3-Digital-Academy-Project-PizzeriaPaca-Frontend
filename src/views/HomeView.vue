<script setup>
import Titulo from "@/components/Titulo.vue";
import NavBar from "@/components/NavBar.vue";
import Descripcion from "@/components/Descripcion.vue";
import Slider from "@/components/Slider.vue";
import Postres from "@/components/Postres.vue";
import Bebidas from "@/components/Bebidas.vue";
import Pizzas from "@/components/Pizzas.vue";
import Promos from "@/components/Promos.vue";
</script>

<template>
  <main>
    <Titulo></Titulo>
    <NavBar></NavBar>
    <Descripcion></Descripcion>
    <Slider></Slider>
    <Pizzas></Pizzas>
    <Postres></Postres>
    <Bebidas></Bebidas>
    <Promos></Promos>
  </main>
</template>

<style scoped></style>
