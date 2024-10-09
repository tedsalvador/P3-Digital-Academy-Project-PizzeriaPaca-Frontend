import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  const addToCart = (item) => {
    cartItems.value.push(item);
  };

  const removeFromCart = (itemName) => {
    cartItems.value = cartItems.value.filter(item => item.name !== itemName);
  };

  return { cartItems, addToCart, removeFromCart };
});
