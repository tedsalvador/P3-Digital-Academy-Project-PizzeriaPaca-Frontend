<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  product: {
    type: Object,
    default: () => ({
      id: null,
      name: "",
      description: "",
      price: 0,
      productType: "",
      image: "",
      available: false,
    }),
  },
});

const emit = defineEmits(["add-product", "update-product", "close-modal"]);

const newProduct = ref({ ...props.product });

const submitForm = () => {
  if (newProduct.value.id) {
    emit("update-product", { ...newProduct.value });
  } else {
    emit("add-product", { ...newProduct.value });
  }
};

const closeModal = () => {
  emit("close-modal");
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      newProduct.value.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

watch(
  () => props.product,
  (newVal) => {
    newProduct.value = { ...newVal };
  },
  { immediate: true }
);
</script>

<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h2>{{ newProduct.id ? "Editar Producto" : "Añadir Producto" }}</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="productName">Nombre del Producto</label>
          <input
            v-model="newProduct.name"
            id="productName"
            type="text"
            required
          />
        </div>

        <div class="form-group">
          <label for="productDescription">Descripción</label>
          <textarea
            v-model="newProduct.description"
            id="productDescription"
            required
          ></textarea>
        </div>

        <div class="form-group">
          <label for="productType">Tipo</label>
          <input
            v-model="newProduct.productType"
            id="productType"
            type="text"
            required
          />
        </div>

        <div class="form-group">
          <label for="productAmount">Precio</label>
          <input
            v-model="newProduct.price"
            id="productAmount"
            type="number"
            step="0.01"
            required
          />
        </div>

        <div class="form-group">
          <label for="productImage">Imagen del Producto</label>
          <input type="file" @change="onFileChange" id="productImage" />
          <img
            v-if="newProduct.image"
            :src="newProduct.image"
            alt="Vista previa"
            class="image-preview"
          />
        </div>

        <div class="form-group checkbox-group">
          <label for="productStatus">Disponible</label>
          <input
            type="checkbox"
            v-model="newProduct.available"
            id="productStatus"
          />
        </div>

        <div class="form-buttons">
          <button type="submit">
            {{ newProduct.id ? "Actualizar Producto" : "Añadir Producto" }}
          </button>
          <button type="button" @click="closeModal">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.form-group.checkbox-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-group.checkbox-group label {
  margin-right: 10px;
}

.form-group.checkbox-group input {
  width: 20px;
  height: 20px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 15px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
}

button[type="button"] {
  background-color: #f44336;
  color: white;
  border: none;
}

.image-preview {
  width: 100px;
  height: 100px;
  margin-top: 10px;
  object-fit: cover;
  border: 1px solid #ddd;
}
</style>
