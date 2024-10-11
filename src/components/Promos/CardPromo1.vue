<script setup></script>
<template>
  <main>
    <div class="cardContainer">
      <div class="cardcontainerImg"></div>
      <div class="cardcontainerDescription">Promo Pizzas Napolitanas 2 x 1</div>
    </div>
  </main>
</template>
<style scoped>
.cardContainer {
  height: 350px;
}
.cardcontainerImg {
  width: 1000px;
  height: 250px;
  background-color: #1aab8a;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.cardcontainerImg:hover {
  background-image: radial-gradient(white, #1aab8a);
}
.cardcontainerDescription {
  width: 1000px;
  height: 100px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: White;
}
</style>
