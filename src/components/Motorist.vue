<script setup>
import { ref } from "vue";

const sections = ref([
  {
    title: "Pedidos",
    color: "red",
    orders: [
      { code: "L-10", details: "Pizza Napolitana" },
      { code: "D-5", details: "Pizza Napolitana" },
      { code: "P-20", details: "Pizza Napolitana" },
      { code: "P-10", details: "Pizza Napolitana" },
      { code: "L-15", details: "Pizza Napolitana" },
      { code: "P-18", details: "Pizza Napolitana" },
    ],
  },
  {
    title: "En Tránsito",
    color: "yellow",
    orders: [
      { code: "L-15", details: "Pizza Napolitana" },
    ],
  },
  {
    title: "Entregado",
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
    draggedFromSection.orders = draggedFromSection.orders.filter(
      (o) => o.code !== draggedOrder.code
    );
    section.orders.push(draggedOrder);

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
      <div class="section-header">
        <h2 class="section-title">{{ section.title }}</h2>
      </div>
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
  margin: 0 20px;
}


.section {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


.bg-red {
  background-color: #e74c3c;
}

.bg-yellow {
  background-color: #f6e58d;
}

.bg-green {
  background-color: #2ecc71;
}

.section-header {
  background-color: black;
  padding: 5px;
  margin-bottom: 10px;
}

.section-title {
  color: white;
  font-size: 22px;
  font-family: "Architects Daughter", cursive;
  text-align: center;
  margin: 0;
}

.orders-container {
  display: flex;
  gap: 5px;
  justify-content: flex-start; 
  padding-left: 10px; 
  flex-wrap: nowrap;
  overflow-x: auto;
  min-height: 80px;
}

.order-card {
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  width: 120px;
  height: 60px;
  cursor: grab;
  font-family: "Architects Daughter", cursive;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.order-card h3 {
  margin: 0;
  font-size: 14px;
  line-height: 1.1;
}

.order-card p {
  margin: 5px 0 0 0;
  font-size: 12px;
}

@media (max-width: 768px) {
  .orders-container {
    flex-direction: row;
    overflow-x: auto;
  }

  .order-card {
    width: 90px;
    height: 50px;
    padding: 5px;
  }

  .order-card h3 {
    font-size: 10px;
  }

  .order-card p {
    font-size: 9px;
    margin-top: 2px;
  }

  .section-title {
    font-size: 18px;
  }
}
</style>
