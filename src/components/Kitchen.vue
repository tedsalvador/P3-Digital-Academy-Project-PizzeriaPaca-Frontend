<script setup>
import { ref, onMounted } from "vue";

const sections = ref([
  {
    title: "Pedidos",
    color: "blue",
    orders: [
      { code: "W-10", details: "Pizza Margarita" },
      { code: "Q-5", details: "Pizza Margarita" },
    ],
  },
  {
    title: "En Proceso",
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
    title: "Retraso",
    color: "yellow",
    orders: [{ code: "L-15", details: "Pizza Napolitana" }],
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

const checkScroll = (container) => {
  if (container.scrollLeft > 0) {
    container.classList.add("scroll-left");
  } else {
    container.classList.remove("scroll-left");
  }

  if (
    container.scrollWidth > container.clientWidth &&
    container.scrollLeft + container.clientWidth < container.scrollWidth
  ) {
    container.classList.add("scroll-right");
  } else {
    container.classList.remove("scroll-right");
  }
};

onMounted(() => {
  const containers = document.querySelectorAll(".orders-container");
  containers.forEach((container) => {
    checkScroll(container);
    container.addEventListener("scroll", () => checkScroll(container));
  });
});
</script>

<template>
  <div class="main">
    <div class="separador"></div>
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
    <div class="separador"></div>
  </div>
</template>

<style scoped>
.main {
  background-image: url("../assets/img/kitchen/backgroundpizza.png");
  background-size: cover;
}
.kitchen-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  max-width: 1300px;
}
.separador {
  height: 80px;
  width: 100%;
}

.section {
  padding: 0px;
  border-radius: 8px;
  text-align: center;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 40px;
  margin-right: 40px;
  border: 8px solid black;
}

.bg-blue,
.bg-red,
.bg-yellow,
.bg-green {
  margin: 0 auto;
  width: calc(100% - 40px);
  max-width: 1300px;
  height: 250px;
}

.bg-blue {
  background-color: #3498db;
}

.bg-red {
  background-color: #f6e58d;
}

.bg-yellow {
  background-color: #e74c3c;
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
  font-size: 30px;
  font-family: "Architects Daughter", cursive;
  text-align: center;
  margin: 0;
}

.orders-container {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  padding-left: 10px;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 80px;
  max-width: 100%;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.orders-container::-webkit-scrollbar {
  height: 8px;
  background-color: transparent;
}

.orders-container::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 10px;
}

.orders-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(80, 80, 80, 0.8);
}

.orders-container::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0);
}

.orders-container::before,
.orders-container::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  pointer-events: none;
  display: none;
}

.orders-container.scroll-left::before {
  display: block;
}

.orders-container.scroll-right::after {
  display: block;
}

.order-card {
  background-color: black;
  color: white;
  padding: 0px;
  border-radius: 8px;
  text-align: center;
  flex: 0 0 15%;
  height: 160px;
  cursor: grab;
  font-family: "Architects Daughter", cursive;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.order-card:hover {
  border: 5px solid white;
  color: rgb(182, 124, 1);
}

.order-card h3 {
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
}

.order-card p {
  margin: 5px 0 0 0;
  font-size: 20px;
}
@media (max-width: 480px) {
  .bg-blue,
  .bg-red,
  .bg-yellow,
  .bg-green {
    width: calc(100% - 20px);
    max-width: none;
    height: 180px;
  }

  .orders-container {
    flex-direction: row;
    overflow-x: auto;
    gap: 5px;
    padding-left: 5px;
    padding-right: 5px;
  }

  .order-card {
    flex: 0 0 48%;
    height: 100px;
  }

  .order-card h3 {
    font-size: 18px;
  }

  .order-card p {
    font-size: 12px;
    margin-top: 5px;
  }

  .section-title {
    font-size: 22px;
  }
}
</style>
