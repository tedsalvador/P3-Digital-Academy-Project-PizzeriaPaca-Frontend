<script setup></script>

<template>
  <div id="separador"></div>
  <div id="containerMenu">
    <RouterLink to="/pizzaslogueado" active-class="active">
      <div class="data-container">
        <span class="btn">Pizzas</span>
      </div>
    </RouterLink>
    <RouterLink to="/postreslogueado" active-class="active">
      <div class="data-container">
        <span class="btn">Postres</span>
      </div>
    </RouterLink>
    <RouterLink to="/bebidaslogueado" active-class="active">
      <div class="data-container">
        <span class="btn">Bebidas</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
#separador {
  height: 50px;
}
#containerMenu {
  width: 100%;
  height: 120px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  width: 170px;
  margin: 50px;
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
  background: white;
  color: rgb(182, 124, 1);
  font-size: 35px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;
  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }
  &:after {
    top: -1px;
    left: -1px;
    border-top: 5px solid white;
    border-left: 5px solid white;
  }
  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
  }
  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    background: white;
    color: rgb(182, 124, 1);
    &:before,
    &:after {
      width: 100%;
      height: 100%;
      border-color: rgb(182, 124, 1);
    }
  }
}

/* Estilo para cuando el botón esté activo (igual que el hover) */
.active .btn {
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  background: white;
  color: white;
  background-color: rgb(182, 124, 1);
}
.active .btn:before,
.active .btn:after {
  width: 100%;
  height: 100%;
  border-color: rgb(182, 124, 1);
}

@media (min-width: 481px) and (max-width: 1024px) {
  #containerMenu {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 480px) {
  #separador {
    height: 0px;
  }
  .btn {
    width: 100px;
    margin: 8px;
    font-size: 18px;
  }
  #containerMenu {
    height: 80px;
  }
}
</style>
