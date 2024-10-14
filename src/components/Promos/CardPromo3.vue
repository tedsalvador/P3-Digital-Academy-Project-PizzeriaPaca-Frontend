<script setup>
import { ref } from "vue";

// Variable reactiva para controlar la visibilidad del modal
const showModal = ref(false);

// Función para abrir el modal
const openModal = () => {
  showModal.value = true;
};

// Función para cerrar el modal
const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <main>
    <div class="cardContainer">
      <div class="cardcontainerImg">
        <img
          class="imgPromo"
          src="../../assets/img/promos/promo3.png"
          alt="Imagen de Pizza"
        />
      </div>
      <div class="cardcontainerDescription">
        <img
          class="info"
          src="../../assets/img/promos/info.png"
          @click="openModal"
          alt=""
        />
        Promo Postre Gratis
      </div>
    </div>
    <div v-if="showModal" class="modalOverlay" @click="closeModal">
      <div class="modalContent" @click.stop>
        <h2>Información de la Promo</h2>
        <p>
          Esta promoción es válida hasta el 31 de octubre. ¡Aprovecha el postre
          gratis al comprar una pizza!
        </p>
        <button @click="closeModal">Cerrar</button>
      </div>
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
  align-items: center; /* Permitimos que los elementos hijos sobresalgan si es necesario */
}
.info {
  margin-right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer; /* Cambia el cursor al pasar sobre el icono */
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
.cardContainer:hover .cardcontainerDescription {
  color: #d4af37; /* Cambiar a color dorado */
  transition: color 2s ease; /* Suavizar la transición del color */
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
  width: 380px;
  height: 250px;
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
/* Estilos para el modal */
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  z-index: 1001;
}

.modalContent h2 {
  margin-bottom: 10px;
}

.modalContent p {
  margin-bottom: 20px;
}

.modalContent button {
  background-color: #1aab8a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.modalContent button:hover {
  background-color: #148f70;
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
    width: 300px;
    height: 170px;
  }
  .cardContainer:hover .imgPromo {
    transform: scale(1.1) rotate(10deg); /* Escalar un 30% y rotar 10 grados */
  }
}
</style>
