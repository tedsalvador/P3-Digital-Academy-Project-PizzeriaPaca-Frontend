<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

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
main {
  position: relative;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  margin-right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.cardContainer {
  height: 400px;
  position: relative;
  overflow: visible;
}

.cardContainer:hover .cardcontainerImg {
  background-color: #1aab8a;
  transition: background-color 2s;
}
.cardContainer:hover .cardcontainerDescription {
  color: #d4af37;
  transition: color 2s ease;
}
.cardcontainerImg {
  width: 1200px;
  height: 280px;

  background-color: rgb(182, 124, 1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: background-color 2s;
}

.imgPromo {
  width: 380px;
  height: 250px;
  transition: transform 1s ease, box-shadow 0.6s ease;
  position: absolute;
  top: 20px;
  z-index: 2;
}

.cardContainer:hover .imgPromo {
  transform: scale(1.3) rotate(10deg);
  z-index: 10;
  transition: transform 1s;
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
  z-index: 0;
  transition: color 2s ease;
}

.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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
    transform: scale(1.1) rotate(10deg);
  }
}
</style>
