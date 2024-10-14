<script setup></script>

<template>
  <main>
    <div class="cardContainer">
      <div class="cardcontainerImg">
        <img
          class="imgPromo"
          src="../../assets/img/promos/promo1.png"
          alt="Imagen de Pizza"
        />
      </div>
      <div class="cardcontainerDescription">Promo Pizzas Romanas 2 x 1</div>
    </div>
  </main>
</template>

<style scoped>
/* Aseguramos que el main permita el desbordamiento visual */
main {
  position: relative;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardContainer {
  height: 400px;
  position: relative;
  overflow: visible; /* Para permitir que los hijos se desborden fuera del contenedor */
}

/* Cambiamos el color de cardcontainerImg al hacer hover en cardContainer */
.cardContainer:hover .cardcontainerImg {
  background-color: #1aab8a; /* Color dorado */
  transition: background-color 2s; /* Suaviza la transición del color */
}

.cardcontainerImg {
  width: 1200px;
  height: 280px;
  /* Color inicial */
  background-color: rgb(182, 124, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* Relativo para que la imagen pueda ser manipulada */
  z-index: 1; /* El contenedor verde está en una capa inferior inicialmente */
  transition: background-color 2s;
}

.imgPromo {
  width: 500px;
  height: 270px;
  transition: transform 1s ease, box-shadow 0.6s ease; /* Suavizar transformaciones */
  position: absolute; /* Esto es clave para que la imagen pueda moverse fuera del contenedor */
  top: 20px; /* Ajustamos la posición de la imagen */
  z-index: 2; /* Por encima del contenedor verde pero por debajo del div negro inicialmente */
}

.cardContainer:hover .imgPromo {
  transform: scale(1.3) rotate(10deg); /* Escalar un 30% y rotar 10 grados */
  z-index: 10; /* Aseguramos que esté por encima del div negro en el hover */
  transition: transform 1s; /* Suavizar la transición de la transformación */
}

.cardcontainerDescription {
  width: 1200px;
  height: 120px;
  background-color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  position: relative;
  z-index: 0; /* El div negro está en una capa más baja que la imagen cuando hace hover */
  transition: color 2s ease;
}
.cardContainer:hover .cardcontainerDescription {
  color: #d4af37; /* Cambiar a color dorado */
  transition: color 2s ease; /* Suavizar la transición del color */
}
@media (min-width: 481px) and (max-width: 1024px) {
  .cardcontainerImg {
    width: 750px;
  }
  .cardcontainerDescription {
    width: 750px;
  }
}
@media (max-width: 481px) {
  .cardContainer {
    height: 300px;
  }
  .cardcontainerImg {
    width: 330px;
    height: 200px;
  }
  .cardcontainerDescription {
    width: 330px;
    height: 80px;
    font-size: 20px;
  }
  .imgPromo {
    width: 320px;
    height: 170px;
  }
  .cardContainer:hover .imgPromo {
    transform: scale(1.1) rotate(10deg); /* Escalar un 30% y rotar 10 grados */
  }
}
</style>
