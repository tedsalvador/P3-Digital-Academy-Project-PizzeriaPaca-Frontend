<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const items = ref([
  {
    name: 'Dark Chocolate',
    description: 'Perfect Snacks',
    price: '$08.00',
    image: 'https://via.placeholder.com/50'
  },
  {
    name: 'Good Source',
    description: 'Sweet Snacks',
    price: '$08.00',
    image: 'https://via.placeholder.com/50'
  },
  {
    name: 'Coconut Chips',
    description: 'Dang',
    price: '$18.00',
    image: 'https://via.placeholder.com/50'
  }
])
const deliveryAmount = '$04.00'
const totalAmount = 'USD 38.00'
</script>

<template>
  <div class="cart-container">
    <div class="cart-header">
      <h1>Cart</h1>
      <div class="cart-count">3</div>
    </div>
    <div class="cart-items">
      <div class="cart-item" v-for="item in items" :key="item.name">
        <img :src="item.image" alt="Product image" class="item-image" />
        <div class="item-details">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <div class="item-price">{{ item.price }}</div>
      </div>
    </div>
    <div class="cart-summary">
      <div class="summary-row">
        <p>Delivery Amount</p>
        <p>{{ deliveryAmount }}</p>
      </div>
      <div class="summary-row total">
        <p>Total Amount</p>
        <p>{{ totalAmount }}</p>
      </div>
    </div>
    <button class="payment-button">
      Make Payment
      <span class="payment-icon">➤</span>
    </button>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 350px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
}
.cart-count {
  background-color: #f5e050;
  color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-items {
  margin-top: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
  color: white;
}
.item-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.item-details {
  flex: 1;
  margin-left: 10px;
}
.item-details h2 {
  font-size: 16px;
  margin: 0;
}
.item-details p {
  margin: 5px 0 0 0;
  font-size: 12px;
  color: #bbb;
}
.item-price {
  font-size: 18px;
}
.cart-summary {
  margin-top: 20px;
  background-color: #f5e050;
  border-radius: 15px;
  padding: 20px;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.summary-row.total {
  font-weight: bold;
  font-size: 22px;
}
.payment-button {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #f5e050;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
}
.payment-icon {
  margin-left: 10px;
}
</style>
