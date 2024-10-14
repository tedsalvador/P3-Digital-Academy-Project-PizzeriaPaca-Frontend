import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);

  const addToCart = (item) => {
    const existingItem = cartItems.value.find(cartItem => cartItem.name === item.name)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({ ...item, quantity: 1 })
    }
  }

  const removeFromCart = (itemName) => {
    cartItems.value = cartItems.value.filter(item => item.name !== itemName);
  };

  const totalAmount = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  })

  const clearCart = () => {
    //cartItems.value = [];
    cartItems.value.splice(0, cartItems.value.length); // Vaciar el array sin perder reactividad
  }

  return { cartItems, addToCart, removeFromCart, totalAmount, clearCart }
});
