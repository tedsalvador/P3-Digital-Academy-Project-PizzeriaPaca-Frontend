<script setup></script>

<template>
  <main>
    <div class="separador"></div>
    <div id="containerTitulo">Bebidas</div>
    <div id="containerTexto">
      Disfruta de nuestros mejores bebidas en nuesta pizzeria
    </div>

    <div id="containerIconoYPostres">
      <div id="containerIcono">
        <img
          class="logoPostre"
          src="../assets/img/bebidas/limoncello.png"
          alt=""
        />
      </div>
      <div id="containerPostres">
        <div class="containerPostre">
          <div id="containerImagenPostre">
            <img
              class="postres"
              src="../assets/img/bebidas/bebidas.png"
              alt=""
            />
          </div>
          <div id="containerDescripcionPostre">
            <div class="separadorDescripcion"></div>
            <div id="nombrePostre">Tarta de leche</div>
            <div id="Descripcion">
              La tarta de tres leches es un postre suave y esponjoso,
              caracterizado por su textura húmeda.
            </div>
            <div class="separadorDescripcion"></div>
          </div>
        </div>
        <div class="containerPostre">
          <div id="containerImagenPostre">
            <img
              class="postres"
              src="../assets/img/bebidas/bebidas.png"
              alt=""
            />
          </div>
          <div id="containerDescripcionPostre">
            <div class="separadorDescripcion"></div>
            <div id="nombrePostre">Tarta de leche</div>
            <div id="Descripcion">
              La tarta de tres leches es un postre suave y esponjoso,
              caracterizado por su textura húmeda.
            </div>
            <div class="separadorDescripcion"></div>
          </div>
        </div>

        <div class="containerPostre">
          <div id="containerImagenPostre">
            <img
              class="postres"
              src="../assets/img/bebidas/bebidas.png"
              alt=""
            />
          </div>
          <div id="containerDescripcionPostre">
            <div class="separadorDescripcion"></div>
            <div id="nombrePostre">Tarta de leche</div>
            <div id="Descripcion">
              La tarta de tres leches es un postre suave y esponjoso,
              caracterizado por su textura húmeda.
            </div>
            <div class="separadorDescripcion"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="btnVerBebidas">
      <RouterLink to="/bebidas">
        <button>Conoce todos nuestras bebidas</button>
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 950px;
  background-color: rgb(182, 124, 1);
}
.separador {
  height: 100px;
}
#containerTitulo {
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  color: white;
}
#containerTexto {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #cecdcd;
}

#containerIconoYPostres {
  width: 100%;
  height: 510px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 50px;
}
#containerIcono {
  height: 510px;
  display: flex;
  justify-content: left;
  align-items: center;
  order: 2;
}
#containerPostres {
  height: 510px;
  order: 1;
}
.logoPostre {
  width: 510px;
  height: 510px;
  transition: 1s;
  transform: scale(1);
}
.logoPostre:hover {
  width: 510px;
  height: 510px;
  transition: 1s;
  transform: scale(1.1);
}
.containerPostre {
  width: 75%;
  height: 170px;
  border: 2px solid rgb(182, 124, 1);
  float: right;
  display: grid;
  grid-template-columns: 25% 75%;
}
#containerImagenPostre {
  display: flex;
  justify-content: center;
  align-items: center;
}

.postres {
  width: 60%;
  height: 100px;
  border: 0.5px solid white;
  border-radius: 2px;
  transition: 1s;
  transform: scale(1);
}
.postres:hover {
  border: 1px solid white;
  transition: 1s;
  transform: scale(1.6);
}
#nombrePostre {
  width: 100%;
  height: 40px;
  font-size: 25px;
  color: black;
}
#nombrePostre:hover {
  color: white;
}
#Descripcion {
  width: 100%;
  height: 50px;
  color: white;
}
.separadorDescripcion {
  height: 40px;
}
#btnVerBebidas {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background: fff;
  color: rgb(182, 124, 1);
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
button:hover {
  background: rgb(182, 124, 1);
  color: #fff;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #fff;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

@media (min-width: 481px) and (max-width: 1024px) {
  .logoPostre {
    width: 280px;
    height: 280px;
  }
  .logoPostre:hover {
    width: 280px;
    height: 280px;
    transform: scale(1.1);
  }
  #containerIconoYPostres {
    width: 100%;
    height: 510px;
    display: grid;
    grid-template-columns: 65% 35%;
  }
  .containerPostre {
    width: 75%;
    height: 170px;
    border: 2px solid rgb(182, 124, 1);
    float: right;
    display: grid;
    grid-template-columns: 25% 75%;
  }
}
@media (max-width: 480px) {
  main {
    height: 700px;
  }
  #containerTitulo {
    height: 50px;
    font-size: 35px;
  }
  .separador {
    height: 30px;
  }
  #containerTexto {
    padding: 15px;
    height: 50px;
    font-size: 15px;
    text-align: center;
    margin-bottom: 20px;
  }
  #containerIcono {
    display: none;
  }
  #containerIconoYPostres {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 100% 0%;
    margin-bottom: 0px;
  }
  #containerPostres {
    width: 100%;
  }
  .containerPostre {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 75% 25%;
  }
  #containerImagenPostre {
    height: 120px;
    order: 2;
  }
  .postres {
    width: 80%;
    height: 60px;
  }
  .postres:hover {
    transform: scale(1.1);
  }
  #containerDescripcionPostre {
    height: auto;
    order: 1;
    padding: 5px;
  }
  .separadorDescripcion {
    height: 10px;
  }
  #nombrePostre {
    font-size: 18px;
    height: 30px;
    text-align: right;
  }
  #Descripcion {
    font-size: 12px;
    padding-right: 10px;
    text-align: right;
  }
  .separadorDescripcion {
    height: 5px;
  }
  #btnVerBebidas {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
}
</style>
