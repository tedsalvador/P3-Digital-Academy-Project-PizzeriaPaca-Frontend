<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"; 

const recognition = ref(null);
const isListening = ref(false);
const router = useRouter(); 


const startVoiceRecognition = () => {
  
  if (!("webkitSpeechRecognition" in window)) {
    alert("API de reconocimiento de voz no soportada por este navegador.");
    return;
  }

  recognition.value = new webkitSpeechRecognition(); 
  recognition.value.lang = "es-ES"; 
  recognition.value.interimResults = false;
  recognition.value.maxAlternatives = 1;
  recognition.value.continuous = false;

  
  recognition.value.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.toLowerCase();
    console.log("Reconocido:", speechResult);

    
    if (speechResult.includes("inicio")) {
      router.push("/homelogueado");
    } else if (speechResult.includes("carta")) {
      router.push("/cartalogueado");
    } else if (speechResult.includes("promo")) {
      router.push("/promoslogueado");
    } else if (speechResult.includes("pizzas")) {
      router.push("/pizzaslogueado");
    } else if (speechResult.includes("postres")) {
      router.push("/postreslogueado");
    } else if (speechResult.includes("bebidas")) {
      router.push("/bebidaslogueado");
    } else {
      alert(
        'Comando no reconocido. Intenta decir "Inicio", "Carta", "Promos", "Pizzas", "Postres" o "Bebidas".'
      );
    }
  };

  
  recognition.value.start();
  isListening.value = true;
};


const stopVoiceRecognition = () => {
  if (recognition.value) {
    recognition.value.stop();
    isListening.value = false;
  }
};


onMounted(() => {
 
});
</script>
<template>
  <ul>
    <RouterLink to="/homelogueado" class="RouterLink"><li>Home</li></RouterLink>
    <RouterLink to="/cartalogueado" class="RouterLink"><li>Carta</li></RouterLink>
    <RouterLink to="/promoslogueado" class="RouterLink"><li>Promos</li></RouterLink>
  </ul>
  <div class="containerMicro">
    <img
      class="micro"
      :class="{ active: isListening }"
      src="../assets/img/micro/micro.png"
      alt="Micrófono"
      @click="isListening ? stopVoiceRecognition() : startVoiceRecognition()"
    />
  </div>
</template>

<style scoped>
.RouterLink {
  text-decoration: none;
}
ul {
  display: flex;
  width: 100%;
  height: 110px;
  margin: auto;
  max-width: 1000px;
  justify-content: space-between;
  text-align: center;
  list-style-type: none;
}

li {
  padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ebebeb;
  min-width: 80px;
  margin: auto;
  font-size: 35px;
}

.micro {
  margin-right: 50px;
  float: right;
  width: 35px;
  height: 35px;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.micro.active {
  background-color: green;
  border-radius: 50%;
  padding: 2px;
  transform: scale(1.2); /* Agrandar el micrófono cuando está activo */
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.7); /* Efecto de brillo */
  animation: pulse 1.5s infinite; /* Animación de pulso */
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 0, 1);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
  }
}

li:hover,
.router-link-active li {
  background-image: url("../assets/img/navbar/navbackground.png");
  background-size: 100% 100%;
  color: #1b150f;
  animation: spring 300ms ease-out;
  font-weight: bold;
}
li:active {
  transform: translateY(4px);
}

@keyframes spring {
  15% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.2, 1.1);
  }
  40% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(0.95, 0.95);
  }
  75% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1.05, 1);
  }
  100% {
    -webkit-transform-origin: center center;
    -webkit-transform: scale(1, 1);
  }
}

.shameless-plug {
  position: absolute;
  bottom: 10px;
  right: 0;
  padding: 8px 20px;
  color: #ccc;
  text-decoration: none;
}

@media (min-width: 481px) and (max-width: 1024px) {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
  li {
    font-size: 35px;
    padding: 10px 15px;
    min-width: auto;
    margin: 5px;

    text-align: center;
  }
}

@media (max-width: 480px) {
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 100%;
  }
  .containerMicro {
    width: 100%;
    height: 30px;
  }
  li {
    font-size: 15px;
    padding: 10px 15px;
    min-width: auto;
    margin: 5px;

    text-align: center;
  }
  .micro {
    margin-right: 20px;
    width: 15px;
    height: 15px;
  }
  
  .micro.active {
    transform: scale(1.1); /* Menor escala en pantallas pequeñas */
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.7); /* Menor intensidad del brillo */
    animation: pulse-small 1.5s infinite;
  }

  @keyframes pulse-small {
    0% {
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
    }
    50% {
      box-shadow: 0 0 10px rgba(0, 255, 0, 1);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.7);
    }
  }
}
</style>
