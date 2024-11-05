import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref([]);


  if (localStorage.getItem('cartItems')) {
    cartItems.value = JSON.parse(localStorage.getItem('cartItems'));
  }

  const addToCart = (item) => {
    const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      item.quantity = 1;
      cartItems.value.push(item);
    }
    console.log(`Товар ${item.title} добавлен в корзину.`);
  };

  const deleteFromCart = (item) => {
    const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    }
    console.log(`Товар ${item.title} удален из корзины.`);
  };

  const totalAmount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);
  });

  // Сохраняем изменения в корзине в localStorage
  watch(cartItems, (newItems) => {
    localStorage.setItem('cartItems', JSON.stringify(newItems));
  }, { deep: true });  // { deep: true } для наблюдения за вложенными изменениями объектов

  return { cartItems, addToCart, deleteFromCart, totalAmount };
});
