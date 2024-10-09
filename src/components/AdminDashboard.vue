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
.button-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background-color: transparent;
  padding-left: 30px;
}

.add-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #45a049;
}

.table-container {
  max-width: 1200px;
  margin: 0 auto;
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
}

.order-table th {
  background-color: #f4f4f4;
  font-weight: bold;
  font-size: 16px;
}

.customer-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  vertical-align: middle;
}

.status {
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
}

.status.disponible {
  background-color: #86e49d;
  color: white;
}

.status.no-disponible {
  background-color: #ff4d4d;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.edit-icon, .delete-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.edit-icon:hover, .delete-icon:hover {
  stroke: #007bff;
}
</style>
