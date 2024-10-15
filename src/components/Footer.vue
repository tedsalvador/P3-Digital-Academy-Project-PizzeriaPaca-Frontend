<script setup></script>
<template>
  <div id="containerFooter">
    <div id="containerGitHub">
      <div class="icon">
        <a href="https://github.com/ConchyP" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/conchi.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Conchy</p>
              </div>
            </div>
          </div></a
        >
      </div>

      <div class="icon">
        <a href="https://github.com/GiselaHurtado" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/gisela.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Gisela</p>
              </div>
            </div>
          </div></a
        >
      </div>
      <div class="icon">
        <a href="https://github.com/PabloA1A" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/pablo.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Pablo</p>
              </div>
            </div>
          </div></a
        >
      </div>
      <div class="icon">
        <a href="https://github.com/NachoR9" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/nacho.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Nacho</p>
              </div>
            </div>
          </div></a
        >
      </div>
      <div class="icon">
        <a href="https://github.com/tedsalvador" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/ted.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Ted</p>
              </div>
            </div>
          </div></a
        >
      </div>
      <div class="icon">
        <a href="https://github.com/ArturoAlvarezY" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/arturo.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Arturo</p>
              </div>
            </div>
          </div></a
        >
      </div>
      <div class="icon">
        <a href="https://github.com/Oscarss15" target="_blank">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  class="icono"
                  src="../assets/img/footer/oscar.png"
                  alt="icono"
                />
              </div>
              <div class="flip-card-back">
                <p class="textIcon">Oscar</p>
              </div>
            </div>
          </div></a
        >
      </div>
    </div>

    <div id="containerLinkProject">
      <div id="copyright">CopyRight ®2024</div>
      <div id="separador"></div>
      <a class="no-decoration" href="https://github.com/FactoriaF5-Asturias/P3-Digital-Academy-Project-PizzeriaPaca-Frontend.git" target="_blank"><div id="copyright">Pizzeria Paca</div></a>
    </div>
  </div>
</template>

<style scoped>
.no-decoration{
  text-decoration: none;
}

#containerFooter {
  width: 100%;
  height: 220px;
}

#containerGitHub {
  width: 100%;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#containerLinkProject {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#copyright {
  color: white;
  font-size: 30px;
}

.icon {
  width: 90px;
  height: 90px;
  margin: 3%;
  perspective: 1000px;
  border-radius: 100%;
  transition: box-shadow 0.3s ease-in-out;
  border: 3px solid white;
}

.flip-card {
  width: 100%;
  height: 100%;
  position: relative;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.8s, box-shadow 0.3s ease-in-out;
  transform-style: preserve-3d;
  position: relative;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card:hover .icon {
  box-shadow: none;
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

.flip-card-front {
  background-color: white;
}

.flip-card-back {
  background-color: #f1f1f1;
  color: black;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

#separador {
  width: 40px;
}

.icono {
  width: 100%;
  height: 100%;
  border-radius: 30px;
}

.textIcon {
  font-weight: bold;
  padding: 0;
  margin: 0;
}

@media (max-width: 480px) {
  .icon {
    width: 35px;
    height: 35px;
    margin: 2%;
  }
  .icono {
    width: 35px;
    height: 35px;
    border: 2px solid white;
  }
  .textIcon {
    font-size: 8px;
  }
  #copyright {
    font-size: 20px;
  }
  #containerGitHub {
    height: 100px;
  }

  #containerLinkProject {
    height: 60px;
  }
  #containerFooter {
    height: 150px;
  }
}
</style>
