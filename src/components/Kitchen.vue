<script setup>
import { ref } from "vue";

const sections = ref([
  {
    title: "Pedidos",
    color: "blue",
    orders: [
      { code: "L-15", details: "Pizza Napolitana" },
      { code: "P-10", details: "Pizza Napolitana" },
    ],
  },
  {
    title: "En Proceso",
    color: "yellow",
    orders: [
      { code: "L-10", details: "Pizza Napolitana" },
      { code: "D-5", details: "Pizza Napolitana" },
      { code: "P-2", details: "Pizza Napolitana" },
    ],
  },
  {
    title: "Retraso",
    color: "red",
    orders: [
      { code: "L-15", details: "Pizza Napolitana" },
      { code: "P-10", details: "Pizza Napolitana" },
    ],
  },
  {
    title: "Listo",
    color: "green",
    orders: [
      { code: "P-15", details: "Pizza Napolitana" },
      { code: "P-18", details: "Pizza Napolitana" },
    ],
  },
]);

let draggedOrder = null;
let draggedFromSection = null;

const onDragStart = (order, section) => {
  draggedOrder = order;
  draggedFromSection = section;
};

const onDrop = (section) => {
  if (draggedOrder && draggedFromSection) {
    // Eliminar el pedido de la sección de origen
    draggedFromSection.orders = draggedFromSection.orders.filter(
      (o) => o.code !== draggedOrder.code
    );
    // Agregar el pedido a la nueva sección
    section.orders.push(draggedOrder);

    // Limpiar variables de arrastre
    draggedOrder = null;
    draggedFromSection = null;
  }
};

const allowDrop = (event) => {
  event.preventDefault();
};
</script>

<template>
  <div class="kitchen-container">
    <div
      v-for="section in sections"
      :key="section.title"
      :class="`section bg-${section.color}`"
      @dragover="allowDrop"
      @drop="onDrop(section)"
    >
      <h2 class="section-title">{{ section.title }}</h2>
      <div class="orders-container">
        <div
          v-for="order in section.orders"
          :key="order.code"
          class="order-card"
          draggable="true"
          @dragstart="onDragStart(order, section)"
        >
          <h3>{{ order.code }}</h3>
          <p>{{ order.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kitchen-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  padding: 20px;
  border-radius: 8px;
}

.section-title {
  color: white;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.orders-container {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.order-card {
  background-color: black;
  color: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  width: 120px;
  cursor: grab;
}

.bg-red {
  background-color: #ff0000;
}

.bg-yellow {
  background-color: #f6e58d;
}

.bg-orange {
  background-color: #f0932b;
}

.bg-green {
  background-color: #6ab04c;
}

.bg-blue {
  background-color: #3498db;
}
</style>
