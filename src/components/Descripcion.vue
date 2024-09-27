<script setup>
function scrollToPromos() {
  const promosSection = document.getElementById("promosSection"); // Asegúrate de usar el mismo id que en el componente Promos
  if (promosSection) {
    promosSection.scrollIntoView({ behavior: "smooth" }); // Hace el scroll suave
  }
}
</script>
<template>
  <div id="containerDescripcion">
    <div id="separador"></div>
    <div id="Descripcion">
      Pizza Tradicional y natural. 100% ingredientes naturales
    </div>
    <div id="Domicilio">Servimos a domicilio</div>
    <div id="containerPromos">
      <div id="btnPromos" @click="scrollToPromos">Conoce nuestras promos</div>
    </div>
  </div>
</template>
<style scoped>
#containerDescripcion {
  height: 370px;
}

#separador {
  height: 100px;
}
#Descripcion {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 50px;
  text-align: center;
}
#Domicilio {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(182, 124, 1);
  font-size: 30px;
}
#containerPromos {
  height: 70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btnPromos {
  background-color: rgb(182, 124, 1);
  border-radius: 40px;
  width: 500px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
}
#btnPromos:hover {
  background-color: white;
  color: rgb(182, 124, 1);
  border: 4px solid rgb(182, 124, 1);
}
@media (min-width: 481px) and (max-width: 1024px) {
  #Descripcion {
    font-size: 28px;
  }
}
@media (max-width: 480px) {
  #containerDescripcion {
    height: 190px;
  }
  #separador {
    height: 10px;
  }
  #Descripcion {
    height: 40px;
    margin: 10px;
    font-size: 20px;
  }
  #Domicilio {
    height: 50px;
    font-size: 18px;
  }
  #containerPromos {
    height: 60px;
  }
  #btnPromos {
    background-color: rgb(182, 124, 1);
    border-radius: 40px;
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
  }
}
</style>
