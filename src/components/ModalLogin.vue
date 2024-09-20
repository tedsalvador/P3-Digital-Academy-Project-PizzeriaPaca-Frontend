<script setup>
import { ref, defineProps, defineEmits, onMounted, onUnmounted } from "vue";

// Propiedades y eventos emitidos
const props = defineProps(["show"]);
const emit = defineEmits(["close"]);

// Función para cerrar el modal
const closeModal = () => {
  emit("close");
};

// Estado reactivo para manejar el formulario activo en pantallas grandes
const isSignUp = ref(false);

// Estado reactivo para manejar el formulario visible en pantallas pequeñas
const isMobileSignUp = ref(false);

// Detectar si la pantalla es pequeña (menor a 480px)
const isMobile = ref(false);

// Función para verificar si la pantalla es pequeña
const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 480;
};

// Detecta el tamaño de la pantalla al montar el componente
onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

// Limpia el evento cuando el componente se desmonta
onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});

// Métodos para cambiar entre formularios en pantallas grandes
const showSignUp = () => {
  isSignUp.value = true;
};

const showSignIn = () => {
  isSignUp.value = false;
};

// Métodos para cambiar entre formularios en pantallas pequeñas
const showMobileSignUp = () => {
  isMobileSignUp.value = true; // Mostrar formulario de registro
};

const showMobileSignIn = () => {
  isMobileSignUp.value = false; // Mostrar formulario de iniciar sesión
};
</script>

<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div
      class="container"
      :class="{ 'right-panel-active': isSignUp && !isMobile }"
    >
      <!-- Formulario de Registro -->
      <div
        class="form-container sign-up-container"
        v-if="!isMobile || isMobileSignUp"
      >
        <form action="#">
          <h1>Crear Cuenta</h1>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellidos" />
          <input type="text" placeholder="Nombre de usuario" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <input type="text" placeholder="Ciudad" />
          <input type="text" placeholder="Dirección" />
          <input type="text" placeholder="Código Postal" />
          <button class="registrate">Registrate</button>

          <!-- Botón para volver a "Iniciar Sesión" en pantallas pequeñas -->
          <button
            class="ghost mobile-toggle"
            @click="showMobileSignIn"
            v-if="isMobile"
          >
            ¿Ya tienes cuenta? Inicia Sesión
          </button>
        </form>
      </div>

      <!-- Formulario de Iniciar Sesión -->
      <div
        class="form-container sign-in-container"
        v-if="!isMobile || !isMobileSignUp"
      >
        <form action="#" class="formInicioSesion">
          <img
            class="logoLogin"
            src="../assets/img/navbar/logodorado.png"
            alt=""
          />
          <h1>Iniciar Sesion</h1>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button class="btnInicioSesion">Iniciar Sesion</button>

          <!-- Botón para cambiar a "Registro" en pantallas pequeñas -->
          <button
            class="ghost mobile-toggle"
            @click="showMobileSignUp"
            v-if="isMobile"
          >
            ¿No tienes cuenta? Regístrate
          </button>
        </form>
      </div>

      <!-- Overlay para pantallas grandes -->
      <div class="overlay-container" v-if="!isMobile">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>¡Bienvenid@!</h1>
            <p>Logueate para tener acceso a nuestras promos</p>
            <button class="ghost" @click="showSignIn">Logueate</button>
          </div>
          <div class="overlay-panel overlay-right">
            <img class="logo" src="../assets/img/navbar/logo.png" alt="" />
            <h1>Pizzeria Paca</h1>
            <p>
              Introduce tus datos personales y ten acceso a nuestras promos
              increibles
            </p>
            <button class="ghost" @click="showSignUp">Registrate</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid rgb(182, 124, 1);
  background-color: rgb(182, 124, 1);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 600px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: rgb(182, 124, 1);
  background: -webkit-linear-gradient(to right, #483632, rgb(182, 124, 1));
  background: linear-gradient(to right, #483632, rgb(182, 124, 1));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}
.logo {
  width: 80%;
}
.btnInicioSesion:hover,
.ghost:hover,
.registrate:hover {
  background-color: white;
  color: rgb(182, 124, 1);
}

.formInicioSesion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.logoLogin {
  display: none;
}
@media (min-width: 481px) and (max-width: 1024px) {
  .container {
    width: 95%;
  }
}
@media (max-width: 480px) {
  .overlay-container {
    display: none;
  }

  .sign-in-container,
  .sign-up-container {
    width: 100%;
    position: relative;
    opacity: 0;
    z-index: 1;
  }

  .sign-in-container {
    opacity: 1;
    z-index: 5;
  }

  .container.right-panel-active .sign-in-container {
    opacity: 0;
    z-index: 1;
  }

  .container.right-panel-active .sign-up-container {
    opacity: 1;
    z-index: 5;
  }

  .mobile-toggle {
    display: block;
    background-color: transparent;
    color: rgb(182, 124, 1);
    border: none;
    font-size: 14px;
    cursor: pointer;
    margin-top: 20px;
  }

  .mobile-toggle:hover {
    text-decoration: underline;
  }
  .formInicioSesion {
    margin-top: 100px;
    width: 90%;
  }
  .logoLogin {
    display: block;
    width: 80%;
    margin-top: -70px;
  }
  .container {
    width: 90%;
    min-height: 670px;
  }
  .form-container {
    margin-top: 30px;
  }
  .sign-up-container,
  .sign-in-container {
    transition: none !important; /* Desactiva las transiciones para depurar */
    opacity: 1 !important; /* Asegúrate de que sea visible */
  }
}
</style>
