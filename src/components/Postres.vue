<script setup>
import { ref, onMounted } from "vue";
import axios from "axios"; 

const postres = ref([]); 

const fetchPostres = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/products/type/POSTRE", {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', 
        'Content-Type': 'application/json' 
      }
    });

    
    postres.value = response.data
    .slice(0, 3)
    .map(postre => ({
      id: postre.id,
      name: postre.name,
      description: postre.description,
      image: postre.image
    }));
  } catch (error) {
    console.error("Error al cargar los postres:", error);
  }
};

onMounted(() => {
  fetchPostres(); 
});
</script>
<template>
  <main>
    <div class="separador"></div>
    <div id="containerTitulo">Postres</div>
    <div id="containerTexto">
      Disfruta de nuestros mejores postres en nuestra pizzería
    </div>

    <div id="containerIconoYPostres">
      <div id="containerIcono">
        <img class="logoPostre" src="../assets/img/postres/postre.png" alt="" />
      </div>
      <div id="containerPostres">
        
        <div class="containerPostre" v-for="postre in postres" :key="postre.id">
          <div id="containerImagenPostre">
            <img
              class="postres"
              :src="postre.image" 
              alt=""
            />
          </div>
          <div id="containerDescripcionPostre">
            <div class="separadorDescripcion"></div>
            <div id="nombrePostre">{{ postre.name }}</div> 
            <div id="Descripcion">{{ postre.description }}</div> 
            <div class="separadorDescripcion"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="btnVerPostres">
      <RouterLink to="/postres">
        <button>Conoce todos nuestros postres</button>
      </RouterLink>
    </div>
  </main>
</template>


<style scoped>
main {
  height: 950px;
  background-color: white;
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
  color: rgb(182, 124, 1);
}
#containerTexto {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: grey;
}

#containerIconoYPostres {
  width: 100%;
  height: 510px;
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin-bottom: 50px;
}
#containerIcono {
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#containerPostres {
  height: 510px;
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
  border: 2px solid white;
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
  border-radius: 2px;
  transition: 1s;
  transform: scale(1);
}
.postres:hover {
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
  color: rgb(182, 124, 1);
}
#Descripcion {
  width: 100%;
  height: 50px;
  color: grey;
}
.separadorDescripcion {
  height: 40px;
}
#btnVerPostres {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  background: rgb(182, 124, 1);
  color: #fff;
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
  background: #fff;
  color: rgb(182, 124, 1);
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: rgb(182, 124, 1);
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
  #containerTexto {
    text-align: center;
    height: 80px;
    padding: 10px;
  }
  #containerIconoYPostres {
    width: 100%;
    height: 510px;
    display: grid;
    grid-template-columns: 35% 65%;
  }

  .containerPostre {
    width: 100%;
    height: auto;
  }
  #containerImagenPostre {
    border: 2px solid white;
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
  }
  #containerImagenPostre {
    border: 2px solid white;
    height: 120px;
  }
  .postres {
    width: 80%;
    height: 60px;
  }
  .postres:hover {
    transform: scale(1.1);
  }
  #containerDescripcionPostre {
    border: 2px solid white;
    height: auto;
  }
  .separadorDescripcion {
    height: 10px;
  }
  #nombrePostre {
    font-size: 18px;
    height: 30px;
  }
  #Descripcion {
    font-size: 12px;
    padding-right: 10px;
  }
  .separadorDescripcion {
    height: 5px;
  }
  #btnVerPostres {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }
}
</style>
