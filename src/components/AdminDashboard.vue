<script setup>
  import { ref } from 'vue';
  
  const products = ref([
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 10.0,
      type: 'Electrónico',
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 20.0,
      type: 'Ropa',
      image: 'https://via.placeholder.com/50'
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 30.0,
      type: 'Accesorio',
      image: 'https://via.placeholder.com/50'
    }
  ]);
  </script>

<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Disponible</th>
            <th>Editar</th>
            <th>Eliminar</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price.toFixed(2) }}</td>
            <td>{{ product.type }}</td>
            <td>{{ product.available }}</td>
            <td>{{ product.edit }}</td>
            <td>{{ product.eliminate }}</td>

            <td>
              <img :src="product.image" alt="Product Image" width="50" height="50" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }

  img {
    object-fit: cover;
  }
  </style>
  
