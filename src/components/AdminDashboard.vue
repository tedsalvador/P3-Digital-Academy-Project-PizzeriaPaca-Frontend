<script setup>
import { ref, onMounted } from 'vue';
import AddProductForm from '../components/AddProductForm.vue';
import axios from 'axios';


const products = ref([]);


const showModal = ref(false);


const currentProduct = ref({
  id: null,
  name: '',
  description: '',
  price: 0,
  productType: '',
  image: '',
  available: false
});


const openModal = (product = null) => {
  if (product) {
    currentProduct.value = { ...product }; 
  } else {
    currentProduct.value = { id: null, name: '', description: '', price: 0, productType: '', image: '', available: false }; 
  }
  showModal.value = true;
};


const closeModal = () => {
  showModal.value = false;
};


const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/products/all', {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=' 
      }
    });
    products.value = response.data; 
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
};


const addProduct = async (newProduct) => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/products/create', newProduct, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', 
        'Content-Type': 'application/json'
      }
    });
    products.value.push(response.data); 
    closeModal();
  } catch (error) {
    console.error('Error al añadir el producto:', error);
  }
};
const updateProduct = async (product) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/v1/products/${product.id}`, product, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', 
        'Content-Type': 'application/json'
      }
    });
    const index = products.value.findIndex(p => p.id === product.id);
    if (index !== -1) {
      products.value[index] = response.data; 
    }
    closeModal();
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
  }
};

const deleteProduct = async (productId) => {
  try {
    await axios.delete(`http://localhost:8080/api/v1/products/${productId}`, {
      headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', 
      }
    });
    products.value = products.value.filter(p => p.id !== productId); l
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
  }
}

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <div class="button-container">
      <button class="add-button" @click="openModal">Añadir Producto</button>
    </div>
    
    <div class="table-container">
      <h1>Productos</h1>
      
      <table class="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Disponible</th>
            <th>Imagen</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.productType }}</td>
            <td>{{ product.available ? 'Sí' : 'No' }}</td>
            <td>
              <img :src="product.image || 'https://via.placeholder.com/100'" alt="Producto" class="product-image" />
            </td>
            <td>
              <button @click="openModal(product)">Editar</button>
            </td>
            <td>
              <button @click="deleteProduct(product.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <AddProductForm 
      v-if="showModal" 
      :product="currentProduct"
      @add-product="addProduct" 
       @update-product="updateProduct"
      @close-modal="closeModal"
    />
  </div>
</template>


<style scoped>
.container {
  max-width: 100%; 
  margin: 0 auto; 
  padding: 20px; 
}

.button-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: transparent;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}

.add-button:hover {
  background-color: #45a049;
}

.table-container {
  max-width: 100%;
  margin-left: 100px !important;
  margin-right: 100px !important;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow-x: auto;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
}

.order-table th, .order-table td {
  padding: 14px 20px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
}

.order-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.product-image {
  width: 50px;
  height: 50px;
}

@media (min-width: 1200px) {
  .container {
    padding: 0 50px;
  }
  .table-container{
    margin: 10px 40px 40px;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .container {
    padding: 0 40px;
  }

  .table-container{
    margin-left: 30px !important;
    margin-right: 30px !important;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .container {
    padding: 0 30px;
  }

  .table-container{
    margin-left: 30px !important;
    margin-right: 30px !important;
  }
}

@media (max-width: 767px) {
  .container {
    padding: 0 20px;
   
  }
  .table-container{
    margin: 10px 30px 30px;
  }
  .table-container{
    margin-left: 30px !important;
    margin-right: 30px !important;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px; 
  }

  .table-container{
    margin-left: 30px !important;
  margin-right: 30px !important;
  }
}
</style>