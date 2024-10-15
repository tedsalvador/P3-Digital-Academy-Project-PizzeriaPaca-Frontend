<script setup>
import { ref, onMounted } from "vue";
import axios from "axios"; 

const bebidas = ref([]); 

const fetchBebidas = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/products/type/BEBIDA", {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', 
        'Content-Type': 'application/json' 
      }
    });

    bebidas.value = response.data
    .slice(0, 3)
    .map(bebida => ({
      id: bebida.id,
      name: bebida.name,
      description: bebida.description,
      image: bebida.image
    }));
  } catch (error) {
    console.error("Error al cargar las bebidas:", error);
  }
};

onMounted(() => {
  fetchBebidas(); 
});
</script>

<template>
  <main>
    <div class="separador"></div>
    <div id="containerTitulo">Bebidas</div>
    <div id="containerTexto">
      Disfruta de nuestras mejores bebidas en nuestra pizzería
    </div>

    <div id="containerIconoYBebidas"> 
      <div id="containerIcono">
        <img
          class="logoBebida"
          src="../assets/img/bebidas/limoncello.png"
          alt="Icono de bebida"
        />
      </div>
      <div id="containerBebidas"> 
        
        <div class="containerBebida" v-for="bebida in bebidas" :key="bebida.id">
          <div id="containerImagenBebida"> 
            <img
              class="bebidas"
              :src="bebida.image" 
              :alt="bebida.name"
            />
          </div>
          <div id="containerDescripcionBebida"> 
            <div class="separadorDescripcion"></div>
            <div id="nombreBebida">{{ bebida.name }}</div> 
            <div id="Descripcion">
              {{ bebida.description }}
            </div>
            <div class="separadorDescripcion"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="btnVerBebidas">
      <RouterLink to="/bebidaslogueado">
        <button>Conoce todas nuestras bebidas</button>
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

#containerIconoYBebidas {
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
#containerBebidas {
  height: 510px;
  order: 1;
}
.logoBebida {
  width: 510px;
  height: 510px;
  transition: 1s;
  transform: scale(1);
}
.logoBebida:hover {
  width: 510px;
  height: 510px;
  transition: 1s;
  transform: scale(1.1);
}
.containerBebida {
  width: 75%;
  height: 170px;
  border: 2px solid rgb(182, 124, 1);
  float: right;
  display: grid;
  grid-template-columns: 25% 75%;
}
#containerImagenBebida {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bebidas {
  width: 60%;
  height: 100px;
  border-radius: 2px;
  transition: 1s;
  transform: scale(1);
}
.bebidas:hover {
  transition: 1s;
  transform: scale(1.6);
}
#nombreBebida {
  width: 100%;
  height: 40px;
  font-size: 25px;
  color: black;
}
#nombreBebida:hover {
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
  .logoBebida {
    width: 280px;
    height: 280px;
  }
  .logoBebida:hover {
    width: 280px;
    height: 280px;
    transform: scale(1.1);
  }
  #containerIconoYBebidas {
    width: 100%;
    height: 510px;
    display: grid;
    grid-template-columns: 65% 35%;
  }
  .containerBebida {
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
  #containerIconoYBebidas {
    width: 100%;
    height: 400px;
    display: grid;
    grid-template-columns: 100% 0%;
    margin-bottom: 0px;
  }
  #containerBebidas {
    width: 100%;
  }
  .containerBebida {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 75% 25%;
  }
  #containerImagenBebida {
    height: 120px;
    order: 2;
  }
  .bebidas {
    width: 80%;
    height: 60px;
  }
  .bebidas:hover {
    transform: scale(1.1);
  }
  #containerDescripcionBebida {
    height: auto;
    order: 1;
    padding: 5px;
  }
  .separadorDescripcion {
    height: 10px;
  }
  #nombreBebida {
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
