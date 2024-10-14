<script setup>
import CardPromo1 from "@/components/Promos/CardPromo1.vue";
import CardPromo2 from "@/components/Promos/CardPromo2.vue";
import CardPromo3 from "@/components/Promos/CardPromo3.vue";
import TituloLogueado from "@/components/TituloLogueado.vue";
import NavBarLogueado from "@/components/NavBarLogueado.vue";
</script>

<template>
  <TituloLogueado></TituloLogueado>
  <NavBarLogueado></NavBarLogueado>
  <div class="separadorprincipal"></div>
  <div class="main">
    <div class="separador"></div>
    <div class="containerpromo1"><CardPromo1></CardPromo1></div>
    <div class="containerpromo2"><CardPromo2></CardPromo2></div>
    <div class="containerpromo2"><CardPromo3></CardPromo3></div>
    <div class="separador2"></div>
  </div>
</template>
<style scoped>
.main {
  background-image: url(../assets/img/kitchen/backgroundPizza.png);
  background-size: cover;
  width: 100%;
}
.containerpromo1 {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerpromo2 {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.containerpromo3 {
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.separador {
  width: 100%;
  height: 50px;
}
.separadorprincipal {
  width: 100%;
  height: 50px;
}
.separador2 {
  width: 100%;
  height: 50px;
}
@media (max-width: 481px) {
  .main {
    height: 1100px;
  }
  .containerpromo1 {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .containerpromo2 {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .containerpromo3 {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .separadorprincipal {
    width: 100%;
    height: 0px;
  }
  .separador {
    width: 100%;
    height: 100px;
  }
  .separador2 {
    height: 0px;
  }
}
</style>
