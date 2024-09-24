<script setup>
import Descripcion from "@/components/Descripcion.vue";
import Slider from "@/components/Slider.vue";
import Postres from "@/components/Postres.vue";
</script>

<template>
  <main>
    <Descripcion></Descripcion>
    <Slider></Slider>
    <Postres></Postres>
  </main>
</template>

<style scoped>
main {
  min-height: 500px;
}
</style>
