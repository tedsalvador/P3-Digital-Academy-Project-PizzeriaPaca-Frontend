<script setup>
import { ref } from 'vue';
import AddProductForm from '../components/AddProductForm.vue';

const orders = ref([
  {
    id: 1,
    customer: 'Producto 1',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Pizza',
    orderDate: 'Descripción del producto 1',
    status: 'Disponible',
    amount: '$10.00'
  },
  {
    id: 2,
    customer: 'Producto 2',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Bebida',
    orderDate: 'Descripción del producto 2',
    status: 'No Disponible',
    amount: '$20.00'
  },
  {
    id: 3,
    customer: 'Producto 3',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Bebida',
    orderDate: 'Descripción del producto 3',
    status: 'Disponible',
    amount: '$30.00'
  },
  {
    id: 4,
    customer: 'Producto 4',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Postre',
    orderDate: 'Descripción del producto 3',
    status: 'Disponible',
    amount: '$30.00'
  },
  {
    id: 5,
    customer: 'Producto 5',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Bebida',
    orderDate: 'Descripción del producto 3',
    status: 'Disponible',
    amount: '$30.00'
  },
  {
    id: 6,
    customer: 'Producto 6',
    customerImage: 'https://via.placeholder.com/100',
    location: 'Pizza',
    orderDate: 'Descripción del producto 3',
    status: 'Disponible',
    amount: '$30.00'
  }
]);

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const addProduct = (newProduct) => {
  const id = orders.value.length + 1;
  orders.value.push({
    id,
    ...newProduct,
    customerImage: newProduct.customerImage || 'https://via.placeholder.com/100',
    status: newProduct.status ? 'Disponible' : 'No Disponible',
    amount: `$${parseFloat(newProduct.amount).toFixed(2)}`
  });
  closeModal();
};
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
            <th>id</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Disponible</th>
            <th>Precio</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order, index) in orders" :key="index">
            <td>{{ order.id }}</td>
            <td>
              <img :src="order.customerImage" alt="Producto" class="customer-image" />
              {{ order.customer }}
            </td>
            <td>{{ order.orderDate }}</td>
            <td>{{ order.location }}</td>
            <td>
              <span :class="['status', order.status.toLowerCase().replace(' ', '-')]">{{ order.status }}</span>
            </td>
            <td><strong>{{ order.amount }}</strong></td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="edit-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="delete-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <Teleport to="body">
      <AddProductForm 
        v-if="showModal" 
        @add-product="addProduct" 
        @close-modal="closeModal"
      />
    </Teleport>
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
